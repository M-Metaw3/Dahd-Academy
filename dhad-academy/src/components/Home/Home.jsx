import React, { useEffect } from 'react';
import bg from "../../assets/images/home-bg.png"
const Home = () => {
    useEffect(() => {
        document.title ="Home";  
      }, []);
    return (
        <div>
             <section className="position-relative" 
>
      <img src={bg} alt="" className='img-fluid'/>
        <h3 className="text-light text-uppercase position-absolute top-50 start-50 translate-middle text-center">A journey of a thousand miles begins with a single step.</h3>
    </section>
            Home
        </div>
    );
}

export default Home;
