import React, { useEffect } from 'react';
import CommonSection from '../Common-section/CommonSection';
import about from "../../assets/images/about.png"
import { Container } from 'react-bootstrap';
import "./about.css"


function About() {
  useEffect(() => {
    document.title = "About";
  }, []);
  return (
    <>
      <CommonSection title="about" img={`${about}`} />
      <Container className='py-5'>
        <div className='row d-flex justify-content-center justify-content-md-between align-items-center'>
          <div className='col-8 col-md-4 '>
            <img src={require("../../assets/images/who we are.png")} className='w-100 rounded-4' alt="" />
          </div>
          <div className='col-12 col-md-8 py-3 p-md-5'>
            <h3>Who we are</h3>
            <p>An academy for education and training to devote the Arab identity to non-native speakers.</p>
            <p>It is an institution that works to teach non-Arabic speaking students to teach them the Arabic language, whatever their religion. Field trips for non-native speakers to practically instil Arabic culture.</p>
          </div>
        </div>
        <div className='pt-3 pt-lg-5'>
          <h3>With us,</h3>
          <p>
            you will find what you want. If the student is not a Muslim, he will enjoy it because he will coexist in our atmosphere of a family nature, and the curricula offered to him will differ from the curricula of the student of an Islamic character. Of course, your request is with us, educational pleasure, and high and proven strategies, in addition to providing job and training opportunities for teachers who seek to develop themselves.
          </p>
        </div>
        <div className='pt-3 pt-lg-5'>
          <h3>Our History</h3>
          <p className='w-50'>History is not the past but a map of the past, drawn from a particular point of view, to be useful to the modern traveller.</p>
        </div>
        <div className='row d-flex justify-content-center justify-content-md-between align-items-center '>
        <div className='col-6 col-md-4 py-3 py-md-5'>
        <img src={require("../../assets/images/history2.png")} className='w-100 rounded-4 py-2' alt="" />
        <img src={require("../../assets/images/history.png")} className='w-100 rounded-4 py-2' alt="" />
        </div>
        <div className='col-12 col-md-6 py-3 py-md-5 '>
              <ul className="timeline">
                <li className="event" data-date="2015">
                <p>Our academic career started from this year</p>
                </li>
                <li className="event" data-date="2017">
                  <p>
                  We officially started working after hiring Ms. Amnah Al-Sayed Visiting Doctor at the University of Islamabad                  </p>
                </li>
                <li className="event" data-date="2021">
                  <p>
                    We established the academy under the name of Amnah Arabic Academy
                  </p>
                </li>
                <li className="event" data-date="2023">
                  <p>
                    We developed ourselves and the academy, and it became under the name of Dhad Academy.
                  </p>
                </li>
              </ul>
        </div>


        </div>
    
      </Container>

    </>
  )
}

export default About
