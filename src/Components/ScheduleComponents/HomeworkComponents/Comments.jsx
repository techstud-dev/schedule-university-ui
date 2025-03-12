import { Link } from "react-router-dom";
import c from '../styles/Homework.module.css'

const Comments = (lesson) => {
    console.log(lesson)
    return (
        <div>
            <Link to="#" className={c.link}>{lesson.lesson.name}</Link>
            {lesson.lesson.comments.map(comment => (
                <div className="text">{comment}</div>
            ))}
        </div>
    )
}

export default Comments;