class TeachersController < ApplicationController

# before_action :authenticate_teacher!

  def index
  end

  def new
  end

  def edit
  end

  def create
  end

  def update
  end

  def show
    
    @teacher = Teacher.find(params[:id])
    render json: @teacher 

  end

  def destroy
  end


end
