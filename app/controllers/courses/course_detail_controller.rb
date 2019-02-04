class Courses::CourseDetailController < ApplicationController

  def index
    puts "ec- In CourseDetailController -index"
    puts ("#{params[:course_id]}")

    @coursedetail = CourseDetail.where(course_id: params[:course_id])

    respond_to do |format|
        format.html {render :index} #
        format.json {render json: @coursedetail }
    end    
    
  end

  def edit
    puts "ec- In CourseDetailController -edit"
  		@course_detail = CourseDetail.find(params[:id])
  end

  def new
      @course_detail = CourseDetail.new
  end

  def at_risk
    CourseDetail.at_risk_students
  end

#RAILS PROJECT CODE
 # def create
 #   puts "ec- In CourseDetailController -create"
 #   @course_detail = CourseDetail.new(course_detail_params)

 #   if @course_detail.save
 #      flash[:notice] = "Record successfully added."
 #      redirect_to course_course_details_path("#{params[:course_id]}")
 #   else
 #      flash[:error] = "Record not added. Please try again."
 #      puts "Errors are #{@course_detail.errors.any?}"
 #      @course_detail.errors.full_messages.each do |msg|
 #        puts msg
 #      end
 #      render :new
 #
 #     end
 # end

#ec2019 JAVASCRIPT / RAILS PROJECT CODE
 
  def create
    puts "ec- In CourseDetailController -create"
    @course_detail = CourseDetail.new(course_detail_params)

    if @course_detail.save
       flash[:notice] = "Record successfully added."
#     redirect_to course_course_details_path("#{params[:course_id]}")
       render json: @course_detail, status: 201

    else
       #render json: @course_detail, status: 406

       flash[:error] = "Record not added. Please try again."
       puts "Errors are #{@course_detail.errors.any?}"
       
       @course_detail.errors.full_messages.each do |msg|
         puts msg
       end
       
       render :new
 
      end
  end
 #Note: This project does logically break from REST pattern
 #This shows course details for 1 course
  def show  
   puts "ec- In CourseDetailController -show"
    @a_courses_details = CourseDetail.where(course_id: params[:id])
    respond_to do |format|
        format.html {render :index} 
        format.json {render json: @a_courses_details }
    end    
  end

  def update
    @course_detail = CourseDetail.find(params[:id])
    if @course_detail.update(course_detail_params)
      flash[:notice] = "Record successfully updated."
    else
      flash[:notice] = "Record not updated. Please try again."
    end
    render :edit
  end

  def destroy
    @course_detail = CourseDetail.find(params[:id])
    @course_detail.delete
    flash[:notice] = "Record successfully deleted."
    redirect_to course_course_details_path("#{params[:course_id]}")
  end

## PRIVATE METHODS

  private

  def course_detail_params
    params.require(:course_detail).permit(:student_id, :teacher_id, :course_id, :assignment_name, :assignment_grade)
  end

end
