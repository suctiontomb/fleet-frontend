import { useState } from 'react'
import Login from './Login'
import Vehicles from './Vehicles'
import AddVehicle from './AddVehicle'


function App(){
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [refreshKey, setRefreshKey] = useState(0)
    const [showform, setShowform] = useState(false)

    return(
        <div className='min-h-screen bg-gray-900 text-white'>
            <nav className='bg-gray-800 px-6 py-4 flex justify-between items-center'>
                <h1 className='text-xl font-bold text-blue-400'>FLEET</h1>
                {isLoggedIn && (
                    <button 
                        className='bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-semibold transition-all'
                        onClick={() => setIsLoggedIn(false)}>
                        Logout  
                    </button>
                )}
            </nav>
            <div className='p-8 '>
                {isLoggedIn
                    ?<>
                        <Vehicles onLogout = {() => setIsLoggedIn(false)} refreshKey={refreshKey}/>
                        {showform &&<AddVehicle onAdd={() => setRefreshKey(k => k+1)}/>}
                        <button
                            onClick={() => setShowform(!showform)}
                            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                            showform
                                ? 'bg-gray-600 hover:bg-gray-500 text-gray-200'
                                : 'bg-blue-600 hover:bg-blue-500 text-white'
                            }`}
                        >
                            {showform ? 'Cancel' : '+ Add Vehicle'}
                        </button>
                    </>  
                : <Login onLogin = {() => setIsLoggedIn(true)}/>}
            
            </div>
        </div>
    )
}

export default App
