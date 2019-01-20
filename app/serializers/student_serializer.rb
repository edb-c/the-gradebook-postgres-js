class StudentSerializer < ActiveModel::Serializer
  attributes :id, :firstname, :lastname
  has_many :course_details
  has_many :teachers,    through: :course_details
end
