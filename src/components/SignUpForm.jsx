import { useState } from 'react';

export default function SignUpForm({setToken}) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    async function handleSubmit(event) {
        //Prevents reloading the page
        event.preventDefault();

        if(!username || !password){
            setError("Please put correct username, password.");
            return;
        }else if(username.length !== 5 && password.length !== 5){
            setError("Please put 5 characters of username, password.");
            return;
        }else if(username.length !== 5){
            setError("Please put 5 characters of username.");
            return;
        }else if(password.length !== 5){
            setError("Please put 5 characters of password");
            return;
        }else setError(null);

        try {
                const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
                    method: "POST",  // Change to POST method
                    headers: {
                        "Content-Type": "application/json",  // Indicate the request body is JSON
                    },
                    body: JSON.stringify({
                        username: username,  // Include the username in the request body
                        password: password   // Include the password in the request body
                    }),
                });            
            
                const result = await response.json();
                console.log(result);

                setToken(result.token);
            
        } catch (error) {
            setError(error.message);
        }
      }

    return(
        <>
            <h2>Sign Up!</h2>
            {error && <p>{error}</p>}

            <form onSubmit={handleSubmit}>
                <label>
                    <b>Username: </b><input value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label>
                    <b>Password: </b>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label><br />
                <button className="btn btn-primary">Submit</button>
            </form>
        </>
    );
  }