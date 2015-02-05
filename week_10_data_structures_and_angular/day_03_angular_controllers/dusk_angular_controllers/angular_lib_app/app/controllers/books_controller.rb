class BooksController < ApplicationController
 
  def index
    @books = Book.all
    respond_to do |format|
      format.html
      format.json { render json: @books }
    end
  end

  def create
    book_params = params.require(:book).permit(:title, :description)
    @book = Book.create(book_params)
    respond_to do |format|
      format.json {render json: @book}
    end
  end
end
