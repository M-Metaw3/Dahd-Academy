import React, { useEffect } from 'react';
import { useDispatch ,useSelector } from 'react-redux';

const Home = () => {
    const dispatch = useDispatch()
    const selector2 = useSelector((state)=>state)


    useEffect(() => {
        console.log("HomeComponent");

        dispatch({type:"getAllTeacher"})
      }, []);

      console.log(selector2);
    return (
        <div>
           {/* <button onClick={done}></button> */}
        </div>
    );
}

export default Home;
