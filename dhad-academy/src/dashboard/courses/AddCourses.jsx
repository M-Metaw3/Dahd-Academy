import { useState } from "react";
import axios from "axios";
// import "animate.css";
import './coursescss.css'
const AddCourses = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [image, setImage] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("link", link);
    formData.append("image", image, image.name);
    try {
      const res = await axios.post("http://localhost:5000/course/addCourse", formData, {
        onUploadProgress: (progressEvent) => {
          const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
          setUploadProgress(progress);
        }
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="animate__animated animate__fadeIn">
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="link">Link</label>
        <input
          type="text"
          id="link"
          className="form-control"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="image">Image</label>
        <input
          type="file"
          id="image"
          className="form-control-file"
          accept=".jpg, .jpeg, .png"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>
      <div>
        {uploadProgress > 0 && <progress value={uploadProgress} max="100" />}
      </div>
      <button type="submit" className="btn btn-primary">Add Course</button>
    </form>
  );
};

export default AddCourses;
