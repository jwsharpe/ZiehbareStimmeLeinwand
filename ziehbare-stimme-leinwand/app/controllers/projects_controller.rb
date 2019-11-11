class ProjectsController < ApplicationController
  def index
    render json: Project.all, :include => :todos
  end

  def show
    render json: Project.find(params[:id])
  end

  def create
    proj = Project.create({ title: params[:title] })
    render json: proj
  end

  def destroy
    Project.find_by_id(params[:id]).destroy
  end

  def update
    render json: Project.update(params[:todo])
  end
end
