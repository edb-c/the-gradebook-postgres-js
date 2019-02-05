class CourseDetailSerializer < ActiveModel::Serializer
  attributes :id, :assignment_name, :assignment_grade, :course_id, :student_id, :teacher_id
  belongs_to :teacher
  belongs_to :student
  belongs_to :course 
end
