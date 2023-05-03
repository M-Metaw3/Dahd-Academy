import React, { useEffect, useState } from 'react'
import CommonSection from '../Common-section/CommonSection';
import course from "../../assets/images/courses.png"
import { Container } from 'react-bootstrap';
import { NavLink, useParams } from 'react-router-dom';
import axios from "axios";
import { useTranslation } from 'react-i18next';
import { apihttp } from "../../api/api"


function Courses() {
  const [t] = useTranslation();

  useEffect(() => {
    document.title ="Courses";  
  }, []);
  const {name}=useParams();

  const [courses, setCourses] = useState([]);

  const getCourseName =() => {
  
  };

  useEffect(() => {  
      let courseName="";
      switch(name) {
        case "Arabic":
          courseName="Arabic";
          break;
        case "QuranAndReadings":
          courseName="Quran and readings"
          break;
             case "IslamicStudies":
              courseName="Islamic studies"
            break;
             case "QualifyingCourses":
              courseName="Qualifying Courses"
            break;
             case "CraftsAndSkills":
              courseName="Crafts and Skills"
            break;
            case "FieldTrips":
              courseName="Field tourism";
              break;
        default:
          courseName="";
        }
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/course/getCourse?coursedepartment=${courseName}`);
        setCourses(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    getCourseName();
  }, [name]);
  
  useEffect(() => {  
    getCourseName();
  });


  return (
    <>
      <CommonSection title={t(`${name}`)} img={`${course}`} />
      <Container className='py-5'>
      <div className="row d-flex justify-content-center">
      {courses.map((course) => (
                <div key={course._id} className="col-10 col-md-6 col-lg-4 pb-5">
                <NavLink to={`/course/${course.title}`} className="text-decoration-none">
                    <div className="card rounded-20 ">
                    <img src={`${apihttp}${course.image}`} height={300} className="rounded-img-top " alt="..." />
                            <div className="card-body d-flex flex-column justify-content-evenly" style={{height:"150px"}}>
                                <p className="card-title"><i className="fa-regular fa-clock pe-1"></i>{course.hours} {`${t('Hours')}`}</p>
                                <h6 className="card-text">{course.title} </h6>
                                <div className=' d-flex  '>
                                <span className=' '>{course.price} {t('EGP')}</span>
                                <p className='px-3 text-decoration-line-through'>{course.price} {t('EGP')}</p>
                          
                                </div>
                                </div>
                    </div>
                </NavLink>
                    </div>
                        ))} 

                </div>
      </Container>
    </>
  )
}

export default Courses
