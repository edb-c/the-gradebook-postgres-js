class TeachercourseSerializer < ActiveModel::Serializer
  attributes :id, :teacher_id, :course_id
  has_many :course_details
end
