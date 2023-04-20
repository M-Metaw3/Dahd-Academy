import { useState, useEffect } from "react";
import axios from "axios";
import CourseUpdate from "./CourseUpdate";

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [link, setLink] = useState();
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("link", link);
    formData.append("image", image);
    try {
      const res = await axios.patch(`http://localhost:5000/updateCourse/${courses._id}`, formData);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/course/getCourse");
        setCourses(res.data.body.getCourse);
        console.log(res.data.body.getCourse)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:5000/course/deleteCourse/${id}`);
      console.log(res.data);
      setCourses(courses.filter((course) => course._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {courses.map((course) => (
        <div key={course._id}>
          <h2>{course.title}</h2>
          <p>{course.description}</p>
          <p>{course.link}</p>
          <img width={200} src={`http://localhost:5000/${course.image}`} alt={course.title} />
      <button onClick={() => handleSubmit(course._id)} type="submit">Update Course</button>
          <button onClick={() => handleDelete(course._id)}>Delete</button>
        </div>
      ))}
  














  <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div>
        <label htmlFor="link">Link</label>
        <input
          type="text"
          id="link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="image">Image</label>
        <input
          type="file"
          id="image"
          accept=".jpg, .jpeg, .png"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>
      <button type="submit">Update Course</button>
    </form>









    </div>

  );
};

export default CourseList;








