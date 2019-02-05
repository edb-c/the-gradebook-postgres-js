class CourseSerializer < ActiveModel::Serializer
  attributes :id, :course_name
  has_many  :course_details
  
  has_many :student_courses

  has_many  :students #, through: :student_courses

end
