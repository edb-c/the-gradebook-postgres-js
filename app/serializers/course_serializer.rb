class CourseSerializer < ActiveModel::Serializer
  attributes :id, :course_name
  has_many  :course_details
end
