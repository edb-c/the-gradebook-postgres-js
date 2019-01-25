class TeacherCourse < ApplicationRecord
  belongs_to :teacher, optional: :true
  belongs_to :course, optional: :true

  has_many :course_details
  
end
