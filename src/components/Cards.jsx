import React, {useState} from 'react'
import Card from './Card';

export default function Cards({coursesData, category}) {

  const [likedCourses, setLikedCourses] = useState([]);

  const getCourses = ()=>{
    if(category==="All"){
      const courseList = [];
      Object.values(coursesData).forEach(list=>{
        list.forEach(data=>{
          courseList.push(data);
        })
      })
  
      return courseList;
    }else{
      return coursesData[category];
    }
    
  }


 return (
    <div className='Cards'>
      
      {
        getCourses().map(course =>{ 
          return <Card key={course.id}
          course={course}
          likedCourses = {likedCourses}
          setLikedCourses = {setLikedCourses}/> 
        })
      }
      
    </div>
  )
}
