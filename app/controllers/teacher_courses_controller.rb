class TeacherCoursesController < ApplicationController
 

  def index

  #ec-2019   
      @teachercourses_js = TeacherCourse.where(teacher_id: current_teacher)
    
      respond_to do |f|
        f.html {render :index} #teacher_courses_path
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
