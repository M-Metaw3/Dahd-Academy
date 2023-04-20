import { useState } from "react";
import axios from "axios";

const CourseUpdate = ({ course }) => {
  const [title, setTitle] = useState(course.title);
  const [description, setDescription] = useState(course.description);
  const [link, setLink] = useState(course.link);
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("link", link);
    formData.append("image", image);
    try {
      const res = await axios.patch(`http://localhost:5000/updateCourse/${course._id}`, formData);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
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
  );
};

export default CourseUpdate;
