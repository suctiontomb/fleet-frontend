import { useState } from 'react'
import Login from './Login'
import Vehicles from './Vehicles'
import AddVehicle from './AddVehicle'


function App(){
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [refreshKey, setRefreshKey] = useState(0)

    return(
        <div>
            <h1>FLEET- Vehicle Maintenance Tracker </h1>
            {isLoggedIn
                 ?<>
                    <Vehicles onLogout = {() => setIsLoggedIn(false)} refreshKey={refreshKey}/>
                    <AddVehicle onAdd={() => setRefreshKey(k => k+1)}/>
                 </>  
            : <Login onLogin = {() => setIsLoggedIn(true)}/>}
        </div>
    )
}

export default App
