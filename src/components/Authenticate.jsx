import { useState } from 'react';

export default function Authenticate({ token }) {
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);
  
    async function handleClick() {
        console.log("token: ", {token});

      if(!token){
        setError("Authentication failed.");
        return;
      }else setError(null);

      try {
        const response = await fetch(
          "https://fsa-jwt-practice.herokuapp.com/authenticate",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const result = await response.json();
        setSuccessMessage(result.message);
      } catch (error) {
        setError(error.message);
      }
    }
  
    return (
      <div>
              <h2>Authenticate</h2>
              {successMessage && <p>{successMessage}</p>}
              {error && <p>{error}</p>}
              <button className="btn btn-info" onClick={handleClick}>Authenticate Token!</button>
            
      </div>
    );
  }