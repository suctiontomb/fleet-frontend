import { useState } from "react";



function AddVehicle({onAdd}){
    const[registration_number, setRegistration_number] = useState('')
    const[make, setMake] = useState('')
    const[model, setModel] = useState('')
    const[year, setYear] = useState('')
    const[total_flight_hours, setTotal_flight_hours] = useState('')
    const[last_maintenance, setLast_maintenance] = useState('')
    const[next_service_due, setNext_service_due] = useState('')
    const[is_active, setIs_active] = useState(false)

    async function add_a_vehicle() {
        const token = localStorage.getItem('token')
        const post = await fetch('http://localhost:8000/api/vehicles/', {
            method: "POST",
            headers: {'Content-Type': 'application/json', 
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({registration_number, make, model, year, total_flight_hours, last_maintenance, next_service_due, is_active})
        })
        const data = await post.json()
        if (data.id) {
            setRegistration_number('')
            setMake('')
            setModel('')
            setYear('')
            setTotal_flight_hours('')
            setLast_maintenance('')
            setNext_service_due('')
            setIs_active(false)
            onAdd()
            console.log(data)
            }       
        }
        
    

    return (
        <div>
            <h2>Add a Vehicle</h2>
            <div>
                <input 
                type="text"
                placeholder="Registration number"
                value={registration_number}
                onChange={(e) => setRegistration_number(e.target.value)}
                />
                <br/>
                <input 
                type="text"
                placeholder="Make"
                value={make}
                onChange={(e) => setMake(e.target.value)}
                />
                <br/>
                <input 
                type="text"
                placeholder="model"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                />
                <br/>
                <input 
                type="number"
                placeholder="year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                />
                <br/>
                <input 
                type="number"
                placeholder="Total Flight Hours"
                value={total_flight_hours}
                onChange={(e) => setTotal_flight_hours(e.target.value)}
                />
                <br/>
                <label>
                     <input 
                    type="date"
                    placeholder="Last Maintenance Date"
                    value={last_maintenance}
                    onChange={(e) => setLast_maintenance(e.target.value)}
                    />
                    Last Maintenance Date
                </label>
                <br/>
                <label>
                    <input 
                    type="date"
                    placeholder="Next service Due"
                    value={next_service_due}
                    onChange={(e) => setNext_service_due(e.target.value)}
                    />
                    Next service Due
                </label>
                <br/>
                <label>
                    <input 
                    type="checkbox"
                    checked={is_active}
                    onChange={(e) => setIs_active(e.target.checked)}
                    />
                    Is Acitve
                </label>
                <br/>
                <button onClick={add_a_vehicle} >Submit</button>
            </div>
        </div>
    )
}

export default AddVehicle