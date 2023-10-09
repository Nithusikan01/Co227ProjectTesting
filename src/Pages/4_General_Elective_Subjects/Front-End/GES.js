import React, { useEffect, useState } from 'react'
import './GES.css'
import axios from "axios"

const GES = () => {

  const [courses, setCourses] = useState([])

  useEffect(() =>{
    loadCourses();
  },[]);

  const loadCourses =async () =>{
    const result=await axios.get("http://localhost:8080/api/v1/auth/getcourses");
    setCourses(result.data);
  }
  return (
    <div className="ges-container">
      <div className='ges-inner-container'>
        <div className='ges-margin'>
        <div className = "Section1">
      <h2 className = "heading1">General Elective Subjects</h2>
      <p className = "para1">
        It is the student's responsibility to obtain 12 credits from General elective subjects in order to be qualified for graduation. Out of these 12 credits minimum of 2 credits should be from each category 1,2,3 (Refer to the Faculty Handbook for details)
      </p>
      <h3 className = "heading2">Categories</h3>
      <ol>
        <li>Management and Economics</li>
        <li>Arts and Humanities</li>
        <li>Political and Social Sciences</li>
      </ol>
      <p>
        Therefore students are requested to select courses appropriately in 5,6,7,8 semesters and GE short semester of computer engineering students. Some courses are not offered every semester and some courses are offered in the same slot and the exams also conducted in parallel. Therefore you should not select subjects from the same slot.
        <br></br>
        <br></br>
        Some Departments offers courses contributing to components satisfied by General Electives subjects. Some Departments make some GE subjects compulsory for their students and some GE subjects are not allowed to take. Therefore please follow the guidelines of each department, in addition to the guidelines in the Faculty Hand Book.
      </p>

      <div className = "Section2" >
        <table className = "Table">
          
          <thead>
            <tr>
              <th colSpan="11">General Elective Subject</th>
            </tr>
            <tr>
              <th>#</th>
              <th>Code</th>
              <th>Subject</th>
              <th>Credits</th>
              <th>Category</th>
              <th>5/7 Semsester</th>
              <th>6/8 Semster</th>
              <th>CO Short Semester</th>
              <th>Coordinating Dept</th>
              <th>Coordinator</th>
              <th>Lecturer</th>
            </tr>
          </thead>
          <tbody>
            {
              courses.map((course,index) =>(
                <tr>
                  <td key={index}>{index+1}</td>
                  <td>{course.code}</td>
                  <td>{course.subject}</td>
                  <td>{course.credits}</td>
                  <td>{course.category}</td>
                  <td>{course.semester_5_7}</td>
                  <td>{course.semester_6_8}</td>
                  <td>{course.cO_Short_Semester}</td>
                  <td>{course.coordinating_Dept}</td>
                  <td>{course.coordinator}</td>
                  <td>{course.lecturer}</td>
                </tr>
              ))
            }
            <tr>

            </tr>
          </tbody>
          
        </table>
        <br></br>

        <p>
        * To be offered from October 2021
        <br></br>
        <br></br>
        Note: The following courses are offered in Semester 5 (Starting from June 7, 2021)
        <br></br>
        EF511, EF516, EF519, EF521, EF528
        <br></br>
        The following courses are offered in Semester 6 (Starting from June 7, 2021)
        <br></br>
        EF501, EF509, EF511, EF520, EF521, EF528
        <br></br>
        </p>

        <h3>Special Requirements</h3>
        <br></br>
        <br></br>

        <p>
          CP551: Sustainable Development
          <br></br>
          EF528: Introduction to Digital Art
          <br></br>
          An only a limited number of student will be registered on a first-come-first-served basis
        </p>
      </div>
      <div className = "Section3">
        <h3>The List of Courses offered under General Electives</h3>
        <ul>
          <li>CO422: Professional Practices</li>
          <li>CO423: Software Project Management</li>
          <li>CO424: Information Systems Management</li>
          <li>CP551: Sustainable Development</li>
          <li>EF501: The Engineer in Society</li>
          <li class="crossed-out">EF503: Critical Thinking and Writing Skills</li>
          <li class="crossed-out">EF505: Management in Practice with Case Studies</li>
          <li class="crossed-out">EF507: Government and Politics of Sri Lanka</li>
          <li class="crossed-out">EF508: Political Issues in Sri Lanka</li>
          <li>EF509: Engineer as an Entrepreneur</li>
          <li class="crossed-out">EF510: Technology and Economic Development</li>
          <li>EF511: Social Project</li>
          <li class="crossed-out">EF512: Rural Economic Development and Technology</li>
          <li>EF513: Introduction to Music</li>
          <li class="crossed-out">EF514: Cinema and Television</li>
          <li class="crossed-out">EF515: Theatre and Drama</li>
          <li>EF516: Painting and Sculpture</li>
          <li class="crossed-out">EF517: Project in Fine Arts</li>
          <li>EF519: Written English for Communication</li>
          <li>EF520: Effective Communication in English through Speech</li>
          <li>EF521: Intellectual Property</li>
          <li class="crossed-out">EF522: Sri Lankan Technology</li>
          <li>EF524: Business Law</li>
          <li class="crossed-out">EF526: Marketing & Financial Management</li>
          <li>EF528: Introduction to Digital Art</li>
          <li>EF530: Engineering Management</li>
          <li>EF531: Mindfulness for Engineers</li>
          <li>MA501: Accounting and Finance for Engineers</li>
          <li>MA503: Business Communication</li>
          <li>MA505: Business Law and Intellectual Property</li>
          <li>MA507: Management of Technology</li>
          <li>MA509: Marketing for Engineers</li>
          <li>MA520: Economics for Engineers</li>
          <li>MA522: Engineer as an Entrepreneur</li>
          <li>MA524: Organizational Behaviour and Human Resources Management</li>
          <li>MA526: Project Management</li>
          <li>PR507: Industrial and Organizational Psychology</li>
        </ul>
      </div>
    </div>
        </div>
      </div>
    </div>
    
  )
}

export default GES
