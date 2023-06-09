import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { apihttp } from "../../api/api"

function Addvideo() {

  const [file, setFile] = useState(null);
  const [title, settitle] = useState('');
  const [description, setdescription] = useState('');
  const [url, seturl] = useState('');
  const [videoId, setVideoId] = useState(null);
  const [video, setVideo] = useState(null);


  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();

    if (!file) {
      setError('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('video', file);
    formData.append('title', title);
    formData.append('description', description);

    const config = {
      onUploadProgress: progressEvent => {
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        setProgress(percentCompleted);
      }
    };

    if (videoId) {
      // If we have a video ID, update the existing video
      await axios.put(`${apihttp}video/updateVideo/${videoId}`, formData, config)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      // Otherwise, add a new video
      await axios.post(`${apihttp}video/addVideo`, formData, config)
        .then(response => {
          console.log(response);
          setVideoId(response.data._id);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  async function handleDelete(id) {


    await axios.delete(`${apihttp}video/deleteVideo/${id}`)
      .then(response => {
        console.log(response);
        setFile(null);
        settitle('');
        setdescription('');
        setVideoId(null);
      })
      .catch(error => {
        console.log(error);
      });
  }

  // useEffect(async () => {
  //   // Fetch the video data when the component mounts
  //       const headers = { Range: 'bytes=0-' };

  // await  axios.get(`${apihttp}video/getVideo`,{ headers, responseType: 'blob' })
  //     .then(response => {
  //         setVideo(response.data.body.getVideo)
  //         console.log(response);

  //       })
  //       .catch(error => {
  //           console.log(error);
  //       });
  //   }, []);
  // console.log(done);
  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const headers = { Range: 'bytes=0-' };
        const response = await axios.get(`${apihttp}video/getVideo`, { headers, responseType: 'blob' });
        const videoUrl = URL.createObjectURL(response.data);
        const videoId = response.headers['video-id'];

        setVideo(videoUrl);
      } catch (error) {
        console.error(error);
      }
    };
    fetchVideo();
  }, []);

  return (
    <>
          <h3>Video</h3>
          <div className='py-2 row'>
      <div className='col-12 col-lg-6 m-auto'>
          <form onSubmit={handleSubmit}>
            <div className='row'>
              {error && <div className="alert alert-danger">{error}</div>}
              <div className="form-group col-12 pb-2">
                <label htmlFor="title">Title:</label>
                <input type="text" className="form-control" id="title" name="title" value={title} onChange={(e) => settitle(e.target.value)} />
              </div>
              <div className="form-group col-12 pb-2">
                <label htmlFor="description">Description:</label>
                <textarea className="form-control" id="description" name="description" value={description} onChange={(e) => setdescription(e.target.value)} />
              </div>
              <div className="form-group col-12 pb-2">
                <label htmlFor="video">Video file:</label>
                <input type="file" className="form-control" id="video" onChange={(e) => setFile(e.target.files[0])} />
              </div>
              <div className="form-group col-12 pb-2">
                <button type="submit" className="w-100 btn-submit btn px-5">{videoId ? 'Update' : 'Upload'}</button>
              </div>
              {progress > 0 && (
  <progress value={progress} max="100" />
)}

              {url && <video src={url} controls className="mt-3" />}
            </div>
          </form>

          <div>
      <div className='col-12 pt-5  m-auto'>
                      <video width={"100%"}  controls>
                {video && <source src={video} type="video/mp4" />}
              </video>
              </div>
            {/* {
   video? video.map((el)=>(
       <>
            <h1>{el.id}</h1>
              <button type="button" className="btn btn-danger mt-3" onClick={()=>handleDelete(el.id)}>Delete</button>
            
              </>
        
    ))
 :"no videose" } */}
          </div>
        </div>
      </div>
    </>


  );
}

export default Addvideo;