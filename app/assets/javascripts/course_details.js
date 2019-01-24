console.log( "ec2019- In course_details.js" );

window.onload=function(){
  //document.getElementById('displayRails').addEventListener('click', displayRails);
  //document.getElementById('displayRails2').addEventListener('click', displayRails2); 

document.getElementById("new_course_detail").addEventListener("submit", function(event){
        event.preventDefault()
        alert('Hello')
    });




} //end window.onload

function displayRails2() {
  var rails_section = document.getElementById("old_DIV2");
  
  if (rails_section.style.display === "none") {
    rails_section.style.display = "block";
  } else {
    rails_section.style.display = "none";
  }
};

class CourseDetails {
  constructor(input) {
    this.assignment_name = input.assignment_name
    this.assignment_grade = input.assignment_grade
    this.course_id = input.course_id
    this.student_id = input.student_id
    this.teacher_id = input.teacher_id
  }
}

function getCourseDetails(){  
  let current_url = window.location.href;
  
  fetch(current_url + '.json')
    .then((res) => res.json()) // Transform to JSON object
    .then((data) => {

      let output_course_details = `<div id="output_course_details">
         <table>
         <tbody> 
          <tr> 
            <td width="150"><h5>Assignment Name</h5></td> 
            <td width="150"><h5>Student Name</h5></td> 
            <td width="150"><h5>Student Grade</h5></td> 
            <td width="150"></td> 
          </tr> 
          `;
      
       data.forEach(function(coursedetails){
          
          output_course_details += `  
           <tr> 
            <td width="150"><h6>${coursedetails.assignment_name}</h6></td> 
            <td width="150"><h6>${coursedetails.student.lastname}, ${coursedetails.student.firstname}</h6></td> 
            <td width="150"><h6>${coursedetails.assignment_grade}</h6></td> 
            <td width="150"></td> 
           </tr> 
        
          `;  
             
       });
       output_course_details += `          
         </tbody> 
         </table>
         <a href="${current_url + '/new'}">Add New Assignment</a>  
         </div>
       `
    document.getElementById('output_course_details').innerHTML = output_course_details;

  })

} //getCourseDetails()


function newCourseDetail(){

   //   e.preventDefault();
let current_url = document.referrer;
let data = current_url + '.json';

fetch(data, {
  method: 'POST',
  body: JSON.stringify(data), 
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.then(response => console.log('Success:', JSON.stringify(response)));

}; //newCourseDetail()