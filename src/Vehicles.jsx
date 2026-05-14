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
            <h2>Vehicles</h2>
            <div>
                {vehicles.map(vehicle => (
                    <div key={vehicle.id}>
                            <p>{vehicle.registration_number} - {vehicle.make} {vehicle.model}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Vehicles