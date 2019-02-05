class Course < ApplicationRecord
  belongs_to :student_courses, optional: :true
  belongs_to :teacher_courses, optional: :true
  
  has_many  :course_details, dependent: :destroy
  has_many :student_courses
  has_many  :students, through: :student_courses
  
end
