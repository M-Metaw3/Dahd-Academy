


const apihttp="http://localhost:5000/"







export const getcontact= async (body) => {
    try {
      return  await fetch(
        apihttp,
      
        {
          method: "get",
          headers: {
            "Content-Type": " application/json",
            // Authorization: `Bearer ${token.token}`,
          },
        //   body: JSON.stringify(body),
        }
      );
      
    } catch (error) {
  
      
      
    }
  
  
  
    
  }

