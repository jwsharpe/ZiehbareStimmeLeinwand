class TodosController < ApplicationController
  def index
    render json: Todo.all
  end

  def show
    render json: Todo.find(params[:id])
  end

  def create
    render json: Todo.create(params[:todo])
  end

  def destroy
    Todo.find_by_id(params[:id]).destroy
  end

  def update
    render json: Todo.update(params[:todo])
  end
end
