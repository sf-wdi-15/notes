class SessionController < ApplicationController
  def new
    # my login form
  end

  def create
    @user = User.authenticate(params[:user][:email],params[:user][:password] )

    if @user
      session[:user_id] = @user.id
      # render text: "Logged you in"
      redirect_to login_url, :notice => "You have just logged in!!"
    else
      # render text: "Who are you really???"
      flash.now[:error] = "Cant log you in "
      render :new
    end

  end

  def destroy
    session[:user_id] = nil
    # render text: "You've destroyed the session"
    redirect_to login_path
  end
end
