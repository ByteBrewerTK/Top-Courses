import { FcLike,FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

export default function Card({course, likedCourses, setLikedCourses}) {

  function likeClickHandeler(){
    if(likedCourses.includes(course.id)){

      setLikedCourses((prev) => prev.filter(cid => cid!==course.id))
      toast.warning("Like Removed")

    }else{
      if(!likedCourses.length){
        setLikedCourses([course.id]);
      }else{
        setLikedCourses(prev => [...prev, course.id])
      }

      toast.error("Liked Successfully", {icon : "❤️"});
    }

  }

  return (
    <div className='Card'>

      <div className='image'>
        <img src={course.image.url} alt={course.image.alt} />
        <button className='btn-like' onClick={likeClickHandeler}>
          {likedCourses.includes(course.id)?<FcLike/>:<FcLikePlaceholder/>}
        </button>
      </div>
      <div className="course-details">
        <h3 className="course-title">{course.title}</h3>
        <p className="course-description">{`${course.description.slice(0, 100)}...`}</p>
      </div>

    </div>
  )
}