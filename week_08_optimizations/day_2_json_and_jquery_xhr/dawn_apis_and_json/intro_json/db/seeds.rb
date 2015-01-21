
(10).times do |n|
  user = User.new
  user.email = "#{n}#{Faker::Internet.email}"
  user.first_name = Faker::Name.first_name
  user.last_name = Faker::Name.last_name
  user.save
  (10).times do |n|
    article = user.articles.new
    article.title = Faker::HipsterIpsum.words(5).join(" ")
    article.content = Faker::HipsterIpsum.paragraph
    article.save

    old_comment = nil
    (20).times do |n|
      params = Hash.new
      params[:body] = Faker::HipsterIpsum.paragraph

      if rand(3) && old_comment
        old_comment = old_comment.comments.create params
      else
        new_comment = article.comments.create params
        old_comment = new_comment
      end
      old_comment.user_id = user.id
      old_comment.save
    end
  end
end