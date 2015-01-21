class ArticlesController < ApplicationController
  def index
    @articles = Article.all

    respond_to do |format|
      format.html 
      format.json {render json: @articles}
    end
  end

  def show
  end

  def new
  end

  def edit
  end
end
