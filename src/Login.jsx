import { useState } from "react";

function Login({onLogin}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    async function handleSubmit() {
        const response = await fetch('http://localhost:8000/api/token/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username,password})
        })
        const data = await response.json()

        if(data.access){
            localStorage.setItem('token', data.access)
            console.log('Login successful')
            onLogin()
    
        } else{
            console.log('Login failed', data)
            setError('Invalid username or password')
        }
    
    }

    return(
        <div>
            <h1>Login to FLEET</h1>
            <input 
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSubmit}>Login</button>
            {error && <p style={{color: 'red'}}>{error}</p>}
        </div>
    )
}

export default Login