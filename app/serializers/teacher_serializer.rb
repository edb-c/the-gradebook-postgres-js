class TeacherSerializer < ActiveModel::Serializer
  attributes :id, :prefix, :firstname, :lastname, :email
end
