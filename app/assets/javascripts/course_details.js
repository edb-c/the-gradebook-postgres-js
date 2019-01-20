console.log( "ec2019- In course_details.js" );


window.onload=function(){

	document.getElementById('displayRails2').addEventListener('click', displayRails2); 
	document.getElementById('fetchCourseDetails_btn').addEventListener('click',getCourseDetails);

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
 
  }
}

function getCourseDetails(){  
  var current_url = window.location.href;
  //console.log('in get coursedetails' + current_url);
  
  fetch(current_url + '.json')
    .then((res) => res.json()) // Transform to JSON object
    .then((data) => {
      
      let output_table_cd = `<div id="course-details2">
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
          console.log(coursedetails);
          output_table_cd += `  
           <tr> 
            <td width="150"><h6>${coursedetails.assignment_name}</h6></td> 
            <td width="150"><h6>${coursedetails.student.lastname}, ${coursedetails.student.firstname}</h6></td> 
            <td width="150"><h6>${coursedetails.assignment_grade}</h6></td> 
            <td width="150"></td> 
           </tr> 
        
          `;  
             
       });
       output_table_cd += `          
         </tbody> 
         </table>
         </div>
       `
    document.getElementById('output_table_cd').innerHTML = output_table_cd;

  })
} //getCourseDetails()