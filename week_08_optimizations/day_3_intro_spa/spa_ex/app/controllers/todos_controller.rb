class TodosController < ApplicationController
  def index
    @todos = Todo.all
    @todo = Todo.new
    
    respond_to do |format|
      format.html
      format.json { render json: @todos }
    end
  end

  def create
    # we don't permit the :completed because
    #   new todos should not be :completed
    @todo = Todo.create(params.require(:todo).permit(:content))

    respond_to do |format|
      format.html
      format.json { render json: @todo }
    end
  end
end
