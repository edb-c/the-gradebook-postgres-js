$(function() {
  addListenerTo_ViewAllTeacherCourses_Link();

})

function addListenerTo_ViewAllTeacherCourses_Link () {
  const ViewAllTeacherCourses_Link = document.getElementById("view_all_teacher_courses");
  ViewAllTeacherCourses_Link.addEventListener('click', function(e){
    e.preventDefault();
    fetch_ViewAllTeacherCourses_Data();
  });
}

