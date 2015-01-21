class UsersController < ApplicationController
  def index
    @users = User.all
    @articles = Article.all

    respond_to do |format|
      format.html
      format.json { render json: @users, except: [:password_digest]}
    end
  end

  def show
    @user = User.find(params[:id])
    taco = {
            user: @user, 
            articles: @user.articles
          }
    respond_to do |format|
      format.html
      format.json { render json: taco,  except: [:password_digest]  }
    end
  end

  def new
  end

  def edit
  end
end
