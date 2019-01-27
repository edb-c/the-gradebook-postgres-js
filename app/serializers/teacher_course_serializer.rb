class TeacherCourseSerializer < ActiveModel::Serializer
  attributes :id, :teacher_id, :course_id, :getCount 
  belongs_to :teacher, optional: :true
  belongs_to :course, optional: :true

  def getCount
  	 CourseDetail.select(:student_id).distinct.where(course_id: instance_options[:course_id]).count
  end

end
