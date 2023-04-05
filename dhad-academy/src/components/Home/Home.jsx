import React, { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        document.title ="Home";  
      }, []);
    return (
        <div>
            home
        </div>
    );
}

export default Home;
