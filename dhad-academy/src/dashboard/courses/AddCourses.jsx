import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube'
import axios from 'axios';
import { Container, Row, Col, ListGroup, Button, Form } from 'react-bootstrap';
import { apihttp } from "../../api/api"

const AddCourses = () => {
  const [courses, setCourses] = useState([]);
  const [addcourse, setaddcourse] = useState(false);
  const [idcourse, setidcourse] = useState("");


  const [formValues, setFormValues] = useState({
    title: '',
    lessons: [],
    image: null,
    courseName: '',
    coursesDepartment: '',
    price: '',
    hours: '',
  });
  const [lessonFormValues, setLessonFormValues] = useState({
    name: '',
    pdf: null,
    video: '',
    meeting: '',
  });
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get(`${apihttp}course/getCourse`);
      console.log(response.data);
      setCourses(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFormChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleLessonFormChange = (event) => {
    setLessonFormValues({
      ...lessonFormValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleFileChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.files[0],
    });
  };

  const handleLessonFileChange = (event) => {
    setLessonFormValues({
      ...lessonFormValues,
      [event.target.name]: event.target.files[0],
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('title', formValues.title);
    formData.append('courseName', formValues.courseName);
    formData.append('coursesDepartment', formValues.coursesDepartment);
    formData.append('price', formValues.price);
    formData.append('hours', formValues.hours);
    if (formValues.image) {
      formData.append('image', formValues.image);
    }

    try {
      if (selectedCourse) {
        console.log(selectedCourse);
        const response = await axios.put(`${apihttp}course/updateCourse/${selectedCourse._id}`, formData);
        console.log(response);
        console.log(response.data);
        setCourses((prevCourses) => {
          const index = prevCourses.findIndex((course) => course._id === response.data.body.updateCourse._id);
          const updatedCourses = [...prevCourses];
          updatedCourses[index] = response.data.body.updateCourse;
          return updatedCourses;
        });
        setSelectedCourse(null);
      } else {
        // Create new course
        const response = await axios.post(`${apihttp}course/addCourse`, formData);
        console.log(response.data);


        setCourses((prevCourses) => [...prevCourses, response.data]);
      }
      setFormValues({
        title: '',
        lessons: [],
        image: null,
        courseName: '',
        coursesDepartment: '',
        price: '',
        hours: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleLessonFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', lessonFormValues.name);
    formData.append('video', lessonFormValues.video);
    formData.append('meeting', lessonFormValues.meeting);
    if (lessonFormValues.pdf) {
      formData.append('image', lessonFormValues.pdf);
    }

    try {
      const response = await axios.post(`${apihttp}course/${idcourse}/lessons`, formData);
      setCourses((prevCourses) => {
        const index = prevCourses.findIndex((course) => course._id === idcourse);

        const updatedCourses = [...prevCourses];
        updatedCourses[index] = response.data.body;

        return updatedCourses;
      });
      setSelectedLesson(null);
      setLessonFormValues({
        name: '',
        pdf: null,
        video: '',
        meeting: '',

      });
      setaddcourse(false)
    } catch (error) {
      console.error(error);
    }
  };

  const handleCourseEdit = (course) => {
    setSelectedCourse(course);
    Add();
    setFormValues({
      title: course.title,
      lessons: course.lessons,
      courseName: course.courseName,
      coursesDepartment: course.coursesDepartment,
      price: course.price,
      hours: course.hours,
    });
  };

  const handleCourseDelete = async (course) => {
    console.log(course);
    try {
      await axios.delete(`${apihttp}course/deleteCourse/${course._id}`);
      setCourses((prevCourses) => prevCourses.filter((c) => c._id !== course._id));
    } catch (error) {
      console.error(error);
    }
  };

  // const handleLessonEdit = (lesson) => {
  //   setSelectedLesson(lesson);
  //   setLessonFormValues({
  //     name: lesson.name,
  //     pdf: null,
  //     video: lesson.video,
  //     meeting: lesson.meeting,
  //   });
  // };

  const handleLessonDelete = async (lesson) => {
    console.log(lesson.course_id);
    try {
      await axios.delete(`${apihttp}course/${lesson.course_id}/lessons/${lesson._id}`);
      setCourses((prevCourses) => {
        const index = prevCourses.findIndex((course) => course._id === lesson.course_id);
        const updatedCourses = [...prevCourses];
        updatedCourses[index].lessons = updatedCourses[index].lessons.filter((l) => l._id !== lesson._id);
        return updatedCourses;
      });
    } catch (error) {
      console.error(error);
    }
  };
  const handleLessonSubmit = (event) => {
    event.preventDefault();
    const newLesson = {
      name: lessonFormValues.name,
      courseId: selectedCourse._id,
    };
    axios
      .post('/api/lessons', newLesson)
      .then((response) => {
        const updatedCourse = { ...selectedCourse };
        updatedCourse.lessons.push(response.data);
        setSelectedCourse(updatedCourse);
        setLessonFormValues({ name: '' });
      })
      .catch((error) => {
        console.error('Error creating lesson: ', error);
      });
  };
  // const resetForm = () => {
  //   if (selectedCourse) {
  //     setFormValues({
  //       title: selectedCourse.title,
  //       courseName: selectedCourse.courseName,
  //       coursesDepartment: selectedCourse.coursesDepartment,
  //       price: selectedCourse.price,
  //       hours: selectedCourse.hours,

  //     });
  //   } else {
  //     setFormValues({
  //       title: '',
  //       courseName: '',
  //       coursesDepartment: '',
  //       price: '',
  //     hours: '',


  //     });
  //   }
  // };

  const handleaddlessons = (course) => {
    // console.log(c);
    setaddcourse(true)
    setidcourse(course._id)
  }
  const [showAdd, setShowAdd] = useState(false);
  const Add = () => setShowAdd(true);
  const All = () => setShowAdd(false);

  const CancelUpdate = () =>{
   setShowAdd(false);
   setSelectedCourse(null);
   setFormValues({
    title: '',
    lessons: [],
    image: null,
    courseName: '',
    coursesDepartment: '',
    price: '',
    hours: '',
  });
}

  return (


    <Container>
          {/* <h1 className="my-4">Course Manager</h1> */}
      <h3>Courses</h3>
     <div className='py-2 instructors'>
     <button className={`btn mx-1 ${showAdd ? "":"active" }`}  onClick={All}>All</button>
     <button className={`btn mx-1 ${showAdd ? "active":"" }`} onClick={Add}>Add and Update</button>
     </div>
          
        {showAdd?
          <Container className='py-2 row'>
              <h5 className=' text-center'>{selectedCourse ? `Edit Course: ${selectedCourse.title}` : 'Create Course'}</h5>
              <div className='col-12 col-lg-6 m-auto'>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="formTitle" className='pb-2'>
              <Form.Label>Title:</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={formValues.title}
                onChange={handleFormChange}
              />
            </Form.Group>
            <Form.Group controlId="formCourseName" className='pb-2'>
              <Form.Label>Course Name:</Form.Label>
              <Form.Control
                type="text"
                name="courseName"
                value={formValues.courseName}
                onChange={handleFormChange}
              />
            </Form.Group>

            <Form.Group controlId="formCoursesDepartment" className='pb-2'>
              <Form.Label>Course Department:</Form.Label>
              <Form.Control
                as="select"
                name="coursesDepartment"
                value={formValues.coursesDepartment}
                onChange={handleFormChange}
              >
                <option value="">-- Select Department --</option>
                <option value="Arabic">Arabic</option>
                <option value="Quran and Readings">Quran and Readings</option>
                <option value="Islamic Studies">Islamic Studies</option>
                <option value="Qualifying Courses">Qualifying Courses</option>
                <option value="Crafts and Skills">Crafts and Skills</option>
                <option value="Field Tourism">Field Tourism</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formDescription" className='pb-2'>
              <Form.Label>price:</Form.Label>
              <Form.Control
                type="text"
                name="price"
                value={formValues.price}
                onChange={handleFormChange}
              />
              <Form.Label>hourse:</Form.Label>
              <Form.Control
                type="text"
                name="hours"
                value={formValues.hours}
                onChange={handleFormChange}
              />
            </Form.Group>
            <Form.Group controlId="formImage" className='pb-2'>
              <Form.Label>Image:</Form.Label>
              <Form.Control type="file" name="image" onChange={handleFileChange} />
            </Form.Group>
            <div className="pt-2 text-center ">
              <Button type="submit" className=' mx-2  btn-submit border-0 px-4'>
                {selectedCourse ? 'Update Course' : 'Create Course'}
              </Button>
              {selectedCourse && (
               <Button type=" button" onClick={CancelUpdate} className='mx-2 btn-submit border-0 px-5'>
               Cancel
               </Button>
)}
            </div>
           

          
          </Form>
          </div>
          
        </Container> :
          <Container className='py-2 row'>
            {addcourse && (
              <div className='col-12 col-lg-6 m-auto pb-5'>
              <h5 className=' text-center'>{'Add Lesson'}</h5>
              <Form onSubmit={handleLessonFormSubmit} >
                <Form.Group controlId="formLessonName" className='pb-2'>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={lessonFormValues.name}
                    onChange={handleLessonFormChange}
                  />
                </Form.Group>
                <Form.Group controlId="formLessonDescription" className='pb-2'>
                  <Form.Label>Meeting Link</Form.Label>
                  <Form.Control
                    type="text"
                    name="meeting"
                    value={lessonFormValues.meeting}
                    onChange={handleLessonFormChange}
                  />
                </Form.Group>
                <Form.Group controlId="formLessonPdf" className='pb-2'>
                  <Form.Label>pdf</Form.Label>
                  <Form.Control type="file" name="pdf" onChange={handleLessonFileChange} />
                </Form.Group>

                <Form.Group controlId="formLessonVideo" className='pb-2'>
                  <Form.Label>Video Link</Form.Label>
                  <Form.Control type="text" name="video" onChange={handleLessonFormChange} />
                </Form.Group>
                <div className="pt-2 text-center ">
                <Button className='mx-2 btn-submit border-0 px-4' type="submit">
                  Add Lesson
                </Button>
                <Button className='mx-2 btn-submit border-0 px-5' onClick={() => setaddcourse(false)}>
                Cancel
              </Button>
                </div>
              </Form>

              
            </div>
          )}
                    <Container className='py-2 row'>

        <ListGroup className='col-12 m-auto'>
        {courses &&
          courses.map((course) => (
            <ListGroup.Item key={course._id} className='my-2'>
              <div className="">
              <div className="py-3 d-flex justify-content-center">
                <img src={`${apihttp}${course.image}`} width={"30%"} height={200} />
                </div>
                <div>
                <p className=' fw-bold'>title: <span className=' fw-normal'> {course.title}</span></p>

                <p className=' fw-bold'>lessons: <span className=' fw-normal'> {course.lessons ? course.lessons.length : 0}</span> </p>
                {course.lessons.length?
              <div className=''>
                  <ol>
              {
                course.lessons.map((lesson) => (
                  <li key={lesson._id}>
                    <div className="d-flex justify-content-between">
                      <div>{lesson.name}</div>
                      <a href={`${apihttp}${lesson.pdf}`}>pdf</a>
                      <a href={lesson.video}>video</a>
                      <a href={lesson.video}>meeting</a>

                      <div>
                        {/* <Button variant="info" onClick={() => handleLessonEdit(lesson)}>
                          Edit
                        </Button>{' '} */}
                        <Button className='mx-2 btn-submit border-0 px-5' onClick={() => handleLessonDelete(lesson)}>
                          Delete
                        </Button>
                      </div>
                    </div>
                  </li>
                ))}
            </ol>
              </div>
              :""
            
}
                <p className=' fw-bold'>courseName: <span className=' fw-normal'> {course.courseName}</span></p>
                <p className=' fw-bold'>coursesDepartment: <span className=' fw-normal'> {course.coursesDepartment}</span></p>
                <p className=' fw-bold'>price: <span className=' fw-normal'> {course.price}</span></p>
                <p className=' fw-bold'>hours: <span className=' fw-normal'> {course.hours}</span></p>
                
                </div>
                <div className=' text-center py-3'>
                  <Button className='mx-2 btn-submit border-0 px-5' onClick={() => handleCourseEdit(course)}>
                    Edit
                  </Button>{' '}
                  <Button className='mx-2 btn-submit border-0 px-5' onClick={() => handleCourseDelete(course)}>
                    Delete
                  </Button>
                  <Button className='mx-2 btn-submit border-0 px-5' onClick={() => handleaddlessons(course)}>
                    Add lesson
                  </Button>
                </div>
              </div>

              
            </ListGroup.Item>
          ))}
      </ListGroup>
      </Container>
      </Container>
}
        


    </Container>
  );

};

export default AddCourses;
