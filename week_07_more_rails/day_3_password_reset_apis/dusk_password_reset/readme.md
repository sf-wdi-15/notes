#Mailer Notes

##LetterOpener
Lets start by installing a gem that will allow us to debug sent mail messages in rails.

Add `letter_opener` gem to your development group.

```
group :development do
	gem "letter_opener"
end
```

Let's add some development settings to `config/development/enviornments/development.rb`

```
config.action_mailer.delivery_method = :letter_opener
config.action_mailer.default_url_options = { :host => "localhost:3000" }
```

##Update User Model

Let's add two new fields to our model to allow use to do a password reset.

Run a migration
```
rails g migration add_password_reset_to_users code expires_at:datetime
```

Add the following method to your user model.

```
def set_password_reset
  self.code = SecureRandom.urlsafe_base64
  self.expires_at = 4.hours.from_now
  self.save!
end
```

##Create a new password reset controller
You could also decide to include this methods on your session or user controller.

Generate a new controller

```
rails g controller passwords new
```

Add a link to page

```
<%= link_to "Forgot Password?", new_password_path %>
```

Add a form for your `new` page.

```
	<h1>Enter your email to reset password</h1>
	
	<%= form_tag passwords_path do %>
	<%= text_field_tag :email, nil, placeholder: "Enter your email" %>
	<%= submit_tag "Reset Password" %>
	<% end %>
	
```

Setup your create action

```
  def create
    user = User.find_by_email(params[:email])

    if user
      # start password flow
      user.set_password_reset
      UserMailer.password_reset(user).deliver

    end

    # render text: "User has been reset"
    redirect_to login_url, notice: "Email was sent with instructions"

  end
```

##Generate a mailer
Run a generator to make a mailer

```
rails g mailer user_mailer password_reset
```
Update `/app/mailers/user_mailer.rb`

```
  def password_reset(user)
    @user = user
    mail :to=> @user.email, :subject => "Please reset your password"
  end
```

Finally Add a link in your password_reset view

```
Please reset your email using the link below

<%= link_to "Reset Password", edit_password_url(@user.code) %>
```

##Add edit method to passwords controller
```
def edit
   code = params[:id]
   @user = User.find_by(code: code)
   puts "THIS IS USER \n \n \n \n \n"
    puts user
 end
```
##Create View
```
<%= @user.email %>
<%= form_for :user, url: "/passwords/#{@user.code}" do |f| %>
  <%= f.password_field :password %>
  <%= f.password_field :password_confirmation %>
  <%= f.submit "Update" %>
<% end %>
```
##  Add the route to the `POST "/passwords/:id"`

`routes.rb`

```
...
  post "/passwords/:id", to: "passwords#update"
...

```


## Add The `Passwords#update` Method

```
  def update
   code = params[:id]
   @user = User.find_by(code: code)
   if @user.update_attributes params.require(:user).permit(:password, :password_confirmation)
    #invalidate the @user.code to avoid replay
    @user.code = nil
    @user.save
    redirect_to root_path
   else
    redirect_to "/passwords/#{@user.code}"
   end
  end
```
