(function($){
	  $(function(){
	    $('.sidenav').sidenav();
	    $('.parallax').parallax(); 
	}); // end of document ready
})(jQuery);

console.log("ec2019- in init.js" );
document.addEventListener("DOMContentLoaded", function(){
  console.log("ec2019- in init.js doc loaded" );
  
  document.getElementById('fetchCourseDetails_btn').addEventListener('click',getCourseDetails);

  document.getElementById('fetchTeacherCourses_btn').addEventListener('click', getTeacherCourses);
    console.log("ec2019- in init.js doc loaded" );
});