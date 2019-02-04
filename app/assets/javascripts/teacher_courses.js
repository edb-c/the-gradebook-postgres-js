console.log( "ec2019- In teacher_courses.js" );


window.onload=function(){
  //document.getElementById('displayRails').addEventListener('click', displayRails);
  //document.getElementById('displayRails2').addEventListener('click', displayRails2); 
} //end window.onload


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
    this.id          = input.id;
    this.teacher_id  = input.teacher_id;
    this.course_id   = input.course_id;
    this.course_name = input.course.course_name;
  }
};

/* Modified code to meet requirement - Must translate the JSON responses into JavaScript Model Objects using either ES6 class or constructor syntax. The Model Objects must have at least one method on the prototype. Formatters work really well for this.*/

function getTeacherCourses(){

  var current_url = window.location.href;
 
  let output_teacher_courses = '';

  fetch(current_url + '.json')
    
    .then((res) => res.json()) // Transform to JSON object
    .then((data) => { 
     
     data.forEach(teachercourse => {    // ES6 -Use of arrow function
        let thisTeacherCourse = new TeacherCourse(teachercourse);
        thisTeacherCourse.createOutput();
    })


})

} //end getTeacherCourses()

TeacherCourse.prototype.createOutput = function() {

output_teacher_courses += `

         <table>
         <tr> 
            <td width="100"><h6>${this.course_id}</h6></td> 
            <td width="150"><h6>${this.course_name}</h6></td> 
            <td width="200"><h6></h6>Not Translatable at this time</td> 
            <td width="300"><h6><a href="/courses/${this.course_id}/course_details">View Assignments</a></h6></td> 
        </tr> 
        </table>  
 
        
       `;  
    document.getElementById('output_teacher_courses').innerHTML = output_teacher_courses;

} // end TeacherCourse.prototype.createOutput

/* -------------------------------------------------- 

//Other Veresion -Plainly taking JSON response

function getTeacherCourses(){
  var current_url = window.location.href;
  
  fetch(current_url + '.json')
     
  
    .then((res) => res.json()) // Transform to JSON object
    .then((data) => {
      
      let output_teacher_courses = `<div id="output_teacher_courses">
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

let thisTeacherCourse = new TeacherCourse(teachercourse);

    console.log("thisTeacherCourse course_id " + thisTeacherCourse.course_id);
    console.log("thisTeacherCourse teacher_id " + thisTeacherCourse.teacher_id);
    console.log("thisTeacherCourse course_name " + thisTeacherCourse.course_name);

          output_teacher_courses += `  
           <tr> 
            <td width="100"><h6>${teachercourse.course_id}</h6></td> 
            <td width="150"><h6>${teachercourse.course.course_name}</h6></td> 
            <td width="200"><h6></h6>Not Translatable at this time</td> 
            <td width="300"><h6><a href="/courses/${teachercourse.course_id}/course_details">View Assignments</a></h6></td> 
          </tr> 
 
 
          `;  
             
       });
       output_teacher_courses += `          
         </tbody> 
         </table>
         </div>
       `
    document.getElementById('output_teacher_courses').innerHTML = output_teacher_courses;
    
  })
} //end getTeacherCourses()
*/