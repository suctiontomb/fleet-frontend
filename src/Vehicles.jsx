import {useState, useEffect} from 'react'

function Vehicles({onLogout, refreshKey}){
    const [vehicles, setVehicles] = useState([])

    useEffect(() => {
        fetchVehicles()
    },[refreshKey])

    async function fetchVehicles() {
        const token = localStorage.getItem('token')
        const response = await fetch('http://localhost:8000/api/vehicles/', {
            headers : {
                'Authorization': `Bearer ${token}`
            }
        })
        if (response.status == 401){
            localStorage.removeItem('token')
            onLogout()
            return
        }
        const data = await response.json()
        setVehicles(data)
        
    }

    return (
        <div>
            <h2  className='text-xl font-bold mb-4'>Vehicles</h2>
            <div className='grid grid-cols-1 gap-3'>
                {vehicles.map(vehicle => (
                    <div key={vehicle.id}
                        className='bg-gray-800 p-4 rounded-lg flex justify-between items-center'>
                        <div>
                        <p className='font-bold text-blue-400'>{vehicle.registration_number}</p>   
                        <p className='text-gray-400 text-sm'>{vehicle.make} {vehicle.model}</p> 
                        </div>
                        <span className={`px-2 py-1 rounded text-xs ${vehicle.is_active ? 'bg-green-600' : 'bg-red-600'}`}>
                            {vehicle.is_active ? 'Active' : 'Inactive'}
                        </span>  
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Vehicles