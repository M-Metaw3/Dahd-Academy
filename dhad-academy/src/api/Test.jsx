// // import React, { useState } from 'react';

// // const Test = () => {
// //   const [username, setUsername] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [image, setImage] = useState(null);

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     const formData = new FormData();
// //     formData.append('username', username);
// //     formData.append('email', email);
// //     formData.append('password', password);
// //     formData.append('image', image);
// //     // console.log(formData);
// //     // http://localhost:5000/userRegistration
// //     fetch('http://localhost:4000/register', {
// //       method: 'POST',
// //       body: formData
// //     })
// //       .then((response) => response.json())
// //       .then((data) => {
// //         console.log(data);
// //       })
// //       .catch((error) => {
// //         console.error(error);
// //       });
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <label htmlFor="username">Username:</label>
// //       <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />

// //       <label htmlFor="email">Email:</label>
// //       <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />

// //       <label htmlFor="password">Password:</label>
// //       <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />

// //       <label htmlFor="image">Profile Picture:</label>
// //       <input type="file" id="image" name="image" onChange={(e) => setImage(e.target.files[0])} />

// //       <button type="submit">Register</button>
// //     </form>
// //   );
// // };

// // export default Test;







// // import React, { useState } from 'react';
// // import './Card.css';

// // function Test({ title, image, description }) {
// //   const [isHovering, setIsHovering] = useState(false);

// //   const handleMouseEnter = () => {
// //     setIsHovering(true);
// //   };

// //   const handleMouseLeave = () => {
// //     setIsHovering(false);
// //   };

// //   return (
// //     <div
// //       className={`card ${isHovering ? 'card-hover' : ''}`}
// //       onMouseEnter={handleMouseEnter}
// //       onMouseLeave={handleMouseLeave}
// //     >
// //       <img src={image} alt={title} />
// //       <div className='card-content'>
// //         <h3>{title}</h3>
// //         <p>{description}</p>
// //       </div>
// //     </div>
// //   );
// // }


// // import React, { useState } from 'react';
// // import './Card.css';
// // import { Card } from 'react-bootstrap';

// // function Test({ title, image, description }) {
// //   const [isHovering, setIsHovering] = useState(false);

// //   const handleMouseEnter = () => {
// //     setIsHovering(true);
// //   };

// //   const handleMouseLeave = () => {
// //     setIsHovering(false);
// //   };

// //   return (
// //     <Card
// //       className={`animated-card ${isHovering ? 'animated-card-hover' : ''}`}
// //       onMouseEnter={handleMouseEnter}
// //       onMouseLeave={handleMouseLeave}
// //     >
// //       <Card.Img variant='top' src={image} alt={title} />
// //       <Card.Body>
// //         <Card.Title>{title}</Card.Title>
// //         <Card.Text>{description}</Card.Text>
// //       </Card.Body>
// //     </Card>
// //   );
// // }





// import React, { useState, useEffect } from 'react';
// import './Cursor.css';

// function Test() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (event) => {
//     setPosition({ x: event.clientX, y: event.clientY });
//   };

//   useEffect(() => {
//     document.addEventListener('mousemove', handleMouseMove);
//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   return (
//     <div className='cursor' style={{ left: position.x, top: position.y }}>
//       <div className='cursor-animation'></div>
//     </div>
//   );
// }

// export default Test;

import React from 'react';

const Test = () => {
  return (
    <div>
      test
    </div>
  );
}

export default Test;
