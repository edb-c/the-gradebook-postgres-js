class TeacherCoursesController < ApplicationController

 # def index
    #teacher_courses_path
 # end

  def index
    @teachercourses_js = TeacherCourse.all
    
    respond_to do |f|
      f.html {render :index}
      f.json {render json: @teachercourses_js }
    end
  end  


  def show
    @teachercourse = TeacherCourse.find(params[:id])

  end

  def edit
  end

  def update
  end


end
