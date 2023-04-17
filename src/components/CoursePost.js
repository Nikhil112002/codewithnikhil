import React from 'react'
import { useParams } from 'react-router-dom'
import  courses from "../courses.json"
import Header from './header';
import FooterAll from './FooterAll';



const CoursePost = () => {
    const params = useParams();
const index = params.id
const courseData = courses[index]
console.log(courseData);

  return (
    <>
    <Header/>
    <div class="container pt-3 mb-5 py-3">
    <div class="row">
    <div class="col-md-8 mx-auto">
    <h1 style={{fontSize: "36px", fontWeight: "700", lineHeight: "40px", paddingBottom: "5px;"}}>
        {courseData.title}
    </h1>
    <p style={{color:"rgb(75, 85, 99)", fontSize: "16px", fontWeight: "400", lineHeight: "24px"}}>{courseData.createdAt}</p>
<div class="mt-4">
<p class="mt-2 text-justify textalign1">
{courseData.description}
</p>
</div>
<h1 style={{fontSize: "30px", fontWeight: "600", lineHeight: "36px", marginTop: "35px", paddingBottom: "3px"}}>{courseData.about}</h1>
<p class="mt-2 text-justify textalign1">
  {courseData.content}
</p>






</div>
</div>
</div>
<FooterAll/>

    </>
  )
}

export default CoursePost