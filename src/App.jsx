import { useState } from 'react'
import Login from './Login'
import Vehicles from './Vehicles'


function App(){
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return(
        <div>
            <h1>FLEET- Vehicle Maintenance Tracker </h1>
            {isLoggedIn ? <Vehicles /> : <Login onLogin = {() => setIsLoggedIn(true)}/>}
        </div>
    )
}

export default App
