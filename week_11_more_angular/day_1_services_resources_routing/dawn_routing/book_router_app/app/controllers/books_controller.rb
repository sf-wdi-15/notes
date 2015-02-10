class BooksController < ApplicationController
  def index
    @books = Book.all
    respond_to do |f|
      f.html
      f.json { render json: @books }
    end
  end

  def create
    book_params = params.require(:book).permit(:title)
    @book = Book.create(book_params)
    respond_to do |f|
      f.json { render json: @book }
    end
  end
end
