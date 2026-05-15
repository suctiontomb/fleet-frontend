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
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
            <div className="bg-gray-800 p-8 rounded-lg w-200">
                <h1 className="text-white text-2xl font-bold  mb-6 text-center">Login to FLEET</h1>
                <input 
                    className="w-full bg-gray-700 text-white p-3 rounded mb-4 outline-none"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    className="w-full bg-gray-700 text-white p-3 rounded mb-4 outline-none"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button  
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded font-bold"
                    onClick={handleSubmit}>
                    Login
                </button>
                {error && <p className=" text-red-700 mt-3 text-center text-xl">{error}</p>}
            </div>
        </div>
    )
}

export default Login