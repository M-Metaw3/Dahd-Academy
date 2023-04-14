import React, { useEffect, useState } from 'react';
import bg from "../../assets/images/home-bg.png"
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../actions/actions';
import * as api from '../../api/api'
import moment from "moment"

const Home = () => {
    const dispatch = useDispatch()
    const selector2 = useSelector((state) => state.teacher)
    useEffect(() => {
        // console.log("getEmpDetails");
        dispatch(actions.getALLcontact())
    }, [dispatch]);

// console.log( moment(Date).fromNow());


    const [file, setfile] = useState('')

    // console.log(file);

    // useEffect(() => {
    //     console.log("HomeComponent");

    //     dispatch({type:"getAllTeacher"})
    //   }, []);

    console.log(selector2.teachers);
    return (
        <>
            <section className="position-relative"

            >
                {/* <Link to="/files/myfile.pdf" target="_blank" download>Download</Link> */}

                {/* <a href='http://localhost:5000/197 Section Intro.mp4' download>Click to download</a> */}
                <img src={bg} alt="" className='w-100' height={400} />
                <h3 className="text-light text-uppercase position-absolute top-50 start-50 translate-middle text-center">A journey of a thousand miles begins with a single step.</h3>
            </section>
            {
                selector2.teachers ? selector2.teachers.map((data)=>(
                    <div key={data.id}>
                        {/* <h6>{data.id}</h6> */}
                        <h2>{data.name}</h2>
                        <h6>{data.createdAt}</h6>
                        <h6>{moment(data.createdAt).fromNow()}</h6>
                    </div>
                )) :""
            }
            <img src={`${api.apihttp}startup-g3174bf914_1920.jpg`} width={"50%"} alt="" />

        </>
    );
}

export default Home;
