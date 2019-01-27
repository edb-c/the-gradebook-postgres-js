class TeacherSerializer < ActiveModel::Serializer
  attributes :id, :prefix, :firstname, :lastname, :email

    has_many :teacher_courses  
    has_many :courses,     through: :teacher_courses
    
    has_many :course_details
 
    #TeacherCourse.first.teacher.course_details.count = For teacher1 = 6
end
