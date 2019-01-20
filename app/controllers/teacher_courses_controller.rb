class TeacherCoursesController < ApplicationController
 

  def index

  #ec-2019   
    @teachercourse = TeacherCourse.where(teacher_id: current_teacher)
    #render json: @teachercourse
   respond_to do |format|
        format.html {render :index} #teacher_courses_path
        format.json {render json: @teachercourse}
    end
     
  end  

# Show page for one of the Teacher Courses, ie. Math / Social Students
  def show
    #@teachercourse = TeacherCourse.find(params[:id])
    @teachercourse = TeacherCourse.where(course_id: params[:id])
      respond_to do |format|
        format.html {render :show}
        format.json {render json: @teachercourse}
    end
  end

  def edit
  
  end

  def update
  end


end
