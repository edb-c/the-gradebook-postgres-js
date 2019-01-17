class TeacherCoursesController < ApplicationController

  def index
    #teacher_courses_path
  end

 # def show
 #   @teachercourse = TeacherCourse.find(params[:id])
 # end

  def show
    @teachercourse_js = TeacherCourse.find(params[:id])
    respond_to do |f|
      f.html {render :show}
      f.json {render json: @teachercourse_js }
    end
  end

  def edit
  end

  def update
  end


end
