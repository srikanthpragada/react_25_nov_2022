import React from 'react'

export default function CourseList({courses}) {
  return (
    <>
      <h2>List of Courses</h2>
      <table className="table table-bordered">
        <CourseHead />
        <tbody>
          {
            courses.map((c, idx) => <CourseDetails key={idx} course={c} />)
          }
        </tbody>
      </table>
      <CourseSummary courses={courses} />
    </>
  )
}

function CourseHead() {
  return (
    <thead>
      <tr className="text-white bg-danger"><th>Title</th><th>Duration</th><th>Fee</th></tr>
    </thead>
  )
}

function CourseSummary({courses}) {
  var total = 0
  var count = courses.length 

  courses.forEach( c => total += c.fee)

  return (
     <>
      Average Course Fee : {total/count}
     </>
  )
}


function CourseDetails({course}) {
  return (
    <tr>
      <td style={{ fontWeight: 800 }}>{course.title}</td>
      <td>{course.duration}</td>
      <td>{course.fee}</td>
    </tr>
  )
}