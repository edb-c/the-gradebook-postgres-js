class CourseDetailSerializer < ActiveModel::Serializer
  attributes :id, :assignment_name, :assignment_grade
  belongs_to :teacher
  belongs_to :course
end
