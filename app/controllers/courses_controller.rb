class CoursesController < ApplicationController

    def show  
        @course = Course.find(params[:id]) if current_teacher
        render json: @course     
    end


end
