import React, { useEffect } from 'react'
import CommonSection from '../Common-section/CommonSection';
import contact from "../../assets/images/contact.png"
import { Container } from 'react-bootstrap';
import "./contact.css";

function Contact() {
  useEffect(() => {
    document.title = "Contact";
  }, []);
  return (
    <>
      <CommonSection title="CONTACT US" img={`${contact}`} />
      <Container className='p-5'>
        <h3>Contact us</h3>
        <div className='hr'></div>
        <div className='row d-flex justify-content-between'>
          <div className='col-12 col-lg-8 pe-lg-3'>
            <p>
              You can contact us any way that is convenient for you. We are available 24/7 via email. You can also use a quick contact form below or visit our academy personally.
            </p>
            <form className='pb-5'>
              <div className='row'>
                <div className="col-6 form-group pb-3">
                  <label className="form-label" htmlFor="name">Name</label>
                  <input type="text" id="name" className="form-control" />
                </div>
                <div className="col-6 form-group pb-3">
                  <label className="form-label" htmlFor="email">Email</label>
                  <input type="email" id="email" className="form-control" />
                </div>

                <div className="col-12 form-group pb-3">
                  <label className="form-label" htmlFor="subject">Subject</label>
                  <input type="text" id="subject" className="form-control" />
                </div>

                <div className="form-group col-12 pb-3">
                  <label className="form-label" htmlFor="message" >Message</label>
                  <textarea className="form-control" id='message' rows="4"></textarea>
                </div>
              </div>
              <div className="pt-3">
                <button type="submit" className="btn-submit btn px-5">Submit</button>
              </div>
            </form>

          </div>

          <div className='col-12 col-lg-3 ps-lg-1 row'>
            <div className='col-6 col-lg-12'>
              <h5>Phone Numbers</h5>
              <div className='hr w-100'></div>
              <p><i className="fa-solid fa-phone"></i>(+2) 0100 763 3800</p>
              <p><i className="fa-solid fa-phone"></i>(+2) 0109 764 5047</p>
              <p><i className="fa-solid fa-phone"></i>(+2) 0110 040 6408</p>
              {/* <p><img src={require("../../assets/images/Vector.png")}  alt="" /></p> */}
            </div>
            <div className='col-6 col-lg-12'>
              <h5 >Emails</h5>
              <div className='hr w-100'></div>
              <p><i className="fa-regular fa-envelope"></i>Info@dhadacademy.com</p>
            </div>
            <div className='col-6 col-lg-12'>
              <h5>Address</h5>
              <div className='hr w-100'></div>
              <p><i className="fa-solid fa-location-dot"></i>Ibn Al-Roumi St, Seventh District, Nasr City, Cairo</p>
            </div>
            <div className='col-6 col-lg-12'>
              <h5 >Working Hours</h5>
              <div className='hr w-100'></div>
              <p><i className="fa-regular fa-clock"></i>10:00 AM - 06:00 PM</p>
            </div>
          </div>

        </div>


      </Container>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.169245783417!2d31.16288551494053!3d27.182416954971163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1445095c0090fd45%3A0x49288d1cdc6f41f4!2sCID%20Pharmaceutical%20Factory!5e0!3m2!1sen!2seg!4v1680791446864!5m2!1sen!2seg"
        width="100%" height="500"
        title='map'
        style={{ border: 0 }} allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    </>
  )
}

export default Contact
