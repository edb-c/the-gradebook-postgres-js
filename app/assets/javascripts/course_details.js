console.log( "ec2019- In course_details.js" );

window.onload=function(){
  //document.getElementById('displayRails').addEventListener('click', displayRails);
  //document.getElementById('displayRails2').addEventListener('click', displayRails2); 

//document.getElementById('new_course_detail').addEventListener('submit', new_course_detail);

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


function new_course_detail(){

//let current_url = window.location.referrer + '.json';

let course_detail_course_id = document.getElementById('course_detail_course_id').value;
let student_id = document.getElementById('course_detail_student_id').value; 
let teacher_id = document.getElementById('course_detail_teacher_id').value; 
let assignment_name = document.getElementById('course_detail_assignment_name').value; 
let assignment_grade = document.getElementById('course_detail_assignment_grade').value;

let current_url = '/courses/${course_id}/course_details.json';

let data = {course_id: course_detail_course_id,
      student_id: student_id, 
      teacher_id: teacher_id, 
      assignment_name: assignment_name, 
      assignment_grade: assignment_grade};

fetch(current_url, {
  method: 'POST',
  body: JSON.stringify(data), 
  headers:{
    'Content-Type': 'application/json',
     'Accept': 'application/json',
  'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
  },
  
}) 
.then(res => res.json())
.then(data => {

   // console.log('Success:', JSON.stringify(data))
  let jsonData = JSON.stringify(data);
  let parsedData = JSON.parse(jsonData);

  let output_new_course_detail = ` The following Course Details has been posted:<br>
  Course ID :  ${parsedData.course_id} <br>
  Student ID:  ${parsedData.student_id} <br>
  Teacher ID:  ${parsedData.teacher_id} <br>
  Assignment Name:  ${parsedData.assignment_name} <br>
  Assignment Grade: ${parsedData.assignment_grade} <br>
  `;
  document.getElementById('output_new_course_detail').innerHTML = output_new_course_detail;

}); 
  document.getElementById('new_course_detail').reset();
}//newCourseDetail()