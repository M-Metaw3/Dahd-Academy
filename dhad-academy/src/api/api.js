


export const apihttp="http://localhost:5000/"




export const getcontact= async () => {
    try {
      return  await fetch(
        apihttp+'contact',
      
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

