class TodosController < ApplicationController
  def index
    @todos = Todo.all

    respond_to do |format|
      format.html
      format.json { render json: @todos }
    end
  end

  def create
    @todo = Todo.create(params.require(:todo).permit(:content))

    respond_to do |format|
      format.html
      format.json { render json: @todo }
    end
  end
end
