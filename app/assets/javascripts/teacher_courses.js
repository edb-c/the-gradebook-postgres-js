console.log( "ec2019- In teacher_courses.js" );


function displayRails() {
  var rails_section = document.getElementById("old_DIV");
  
  if (rails_section.style.display === "none") {
    rails_section.style.display = "block";
  } else {
    rails_section.style.display = "none";
  }
};

class TeacherCourse {
  constructor(input) {
    this.id = input.id;
    this.teacher_id = input.teacher_id;
    this.course_id = input.course_id;
    this.course_name = input.course.course_name;
  }
}

function getTeacherCourses(){
  var current_url = window.location.href;
  
  fetch(current_url + '.json')

    .then((res) => res.json()) // Transform to JSON object
    .then((data) => {
      
      let output_table = `<div id="teacher-courses">
         <table>
         <tbody> 
          <tr> 
            <td width="100"><h5>Course ID</h5></td> 
            <td width="150"><h5>Course Name</h5></td> 
            <td width="200"><h5>Number of Students Enrolled</h5></td> 
            <td width="300"><h5>Teacher Actions for Course</h5></td> 
          </tr> 
          `;
      
       data.forEach(function(teachercourse){
//${teachercourse.getCount} - does not work
          output_table += `  
           <tr> 
            <td width="100"><h6>${teachercourse.course_id}</h6></td> 
            <td width="150"><h6>${teachercourse.course.course_name}</h6></td> 
            <td width="200"><h6></h6>Not Translatable at this time</td> 
            <td width="300"><h6><a href="/courses/${teachercourse.course_id}/course_details">View Assignments</a></h6></td> 
          </tr> 
        
          `;  
             
       });
       output_table += `          
         </tbody> 
         </table>
         </div>
       `
    document.getElementById('output_table').innerHTML = output_table;

  })
} //end getTeacherCourses()

function hideTeacherCourses(){

  document.getElementById("teacher-courses").style.visibility = "hidden";

} //end hideTeacherCourses()  

window.onload=function(){
console.log( "ec2019- In teacher_courses.js - window.onload" );
 // document.getElementById('displayRails2').addEventListener('click', displayRails2); 
 // document.getElementById('displayRails').addEventListener('click', displayRails);
 document.getElementById('fetchTeacherCourses_btn').addEventListener('click', getTeacherCourses);
  document.getElementById('fetchCourseDetails_btn').addEventListener('click',getCourseDetails);
  console.log( "ec2019- In teacher_courses.js - window.onload2" );
} //end window.onload
