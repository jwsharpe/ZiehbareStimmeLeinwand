class TodosController < ApplicationController
  def index
    render json: Todo.all
  end

  def show
    render json: Todo.find(params[:id])
  end

  def create
    todo = Todo.create({ title: params[:title], content: params[:content], project_id: params[:projectId] })
    render json: todo
  end

  def destroy
    Todo.find_by_id(params[:id]).delete
  end

  def update
    render json: Todo.update(params[:todo])
  end
end
