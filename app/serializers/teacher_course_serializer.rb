class TeacherCourseSerializer < ActiveModel::Serializer
  attributes :id, :teacher_id, :course_id
  belongs_to :course

  def getCourseName
	"#{object.course_name}"
  end	

end
