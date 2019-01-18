console.log( "ec2019- In teacher_courses.js" );

window.onload=function(){

  document.getElementById('getTeacherCourses_btn').addEventListener('click', getTeacherCourses);
//  document.getElementById('hideTeacherCourses_btn').addEventListener('click', hideTeacherCourses);

 

} //end window.onload

function getTeacherCourses(){
  fetch('http://localhost:3000/teacher_courses.json')
    .then((res) => res.json())
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
       let output_row = ``;   
       data.forEach(function(teachercourse){
          output_row += `
            
           <tr> 
            <td width="100"><h6>${teachercourse.course_id}</h6></td> 
            <td width="150"><h6></h6></td> 
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
    document.getElementById('output_row').innerHTML = output_row;
  })
} //end getTeacherCourses()

function hideTeacherCourses(){

  document.getElementById("teacher-courses").style.visibility = "hidden";

} //end hideTeacherCourses()  