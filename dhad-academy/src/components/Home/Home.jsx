import React, { useEffect ,useState } from 'react';
import bg from "../../assets/images/home-bg.png"
import { useDispatch ,useSelector } from 'react-redux';
const Home = () => {
    const dispatch = useDispatch()
    const selector2 = useSelector((state)=>state.teacher)
const [file,setfile]=useState('')

console.log(file);

    useEffect(() => {
        console.log("HomeComponent");

        dispatch({type:"getAllTeacher"})
      }, []);

      console.log(selector2);
    return (
        <div>
             <section className="position-relative"  
             
>

{/* <Link to="/files/myfile.pdf" target="_blank" download>Download</Link> */}

{/* <a href='http://localhost:5000/197 Section Intro.mp4' download>Click to download</a> */}
      <img src={bg} alt="" className='img-fluid'/>
        <h3 className="text-light text-uppercase position-absolute top-50 start-50 translate-middle text-center">A journey of a thousand miles begins with a single step.</h3>
    </section>
            Home
        </div>
    );
}

export default Home;
