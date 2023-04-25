import { useState } from "react";
import axios from "axios";
// import "animate.css";
import './coursescss.css'
import { Container } from "react-bootstrap";
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
    <>
    <Container className='py-5'>
        <div className='w-50 m-auto'>
    <form onSubmit={handleSubmit} className="animate__animated animate__fadeIn">
    <div className='row'>

    <div className="col-12 form-group pb-1">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="col-12 form-group pb-2">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="col-12 form-group pb-1">
        <label htmlFor="link">Link</label>
        <input
          type="text"
          id="link"
          className="form-control"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
      </div>
      <div className="col-12 form-group pb-1">
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
      <div className="pt-4 col-12">
      <button type="submit" className="btn w-100 btn-submit px-5">Add Course</button>
      </div>
    </div>
    </form>
    </div>
    </Container>
    </>

  );
};

export default AddCourses;
