console.log( "ec2019- In teacher_courses.js" );

window.onload=function(){

  document.getElementById('displayRails').addEventListener('click', displayRails); 

  document.getElementById('fetchTeacherCourses_btn').addEventListener('click', getTeacherCourses);

//  document.getElementById('hideTeacherCourses_btn').addEventListener('click', hideTeacherCourses);

} //end window.onload

function displayRails() {
  var rails_section = document.getElementById("old_DIV");
  
  if (rails_section.style.display === "none") {
    rails_section.style.display = "block";
  } else {
    rails_section.style.display = "none";
  }
};


function getTeacherCourses(){
  fetch('http://localhost:3000/teacher_courses.json')
    .then((res) => res.json()) // Transform to JSON object
    .then((data) => {
      console.log(data)
      console.log(data.course_name)

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
          output_table += `
            
           <tr> 
            <td width="100"><h6>${teachercourse.course_id}</h6></td> 
            <td width="150"><h6>${teachercourse.course.course_name}</h6></td> 
            <td width="200"><h6></h6></td> 
            <td width="300"><h6></h6></td> 
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