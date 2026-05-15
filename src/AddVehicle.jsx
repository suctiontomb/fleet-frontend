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
        <div className="bg-gray-800 rounded-xl p-6 mt-4 border border-gray-700">
            <h2 className="text-lg font-bold text-white mb-5">Add a Vehicle</h2>

            <div className="grid grid-cols-2 gap-4">

                <div className="flex flex-col gap-1">
                    <label className="text-xs text-gray-400 uppercase tracking-wide">Registration Number</label>
                    <input
                        type="text"
                        value={registration_number}
                        onChange={(e) => setRegistration_number(e.target.value)}
                        className="bg-gray-900 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-blue-500"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-xs text-gray-400 uppercase tracking-wide">Make</label>
                    <input
                        type="text"
                        value={make}
                        onChange={(e) => setMake(e.target.value)}
                        className="bg-gray-900 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-blue-500"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-xs text-gray-400 uppercase tracking-wide">Model</label>
                    <input
                        type="text"
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                        className="bg-gray-900 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-blue-500"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-xs text-gray-400 uppercase tracking-wide">Year</label>
                    <input
                        type="number"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        className="bg-gray-900 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-blue-500"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-xs text-gray-400 uppercase tracking-wide">Total Flight Hours</label>
                    <input
                        type="number"
                        value={total_flight_hours}
                        onChange={(e) => setTotal_flight_hours(e.target.value)}
                        className="bg-gray-900 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-blue-500"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-xs text-gray-400 uppercase tracking-wide">Last Maintenance Date</label>
                    <input
                        type="date"
                        value={last_maintenance}
                        onChange={(e) => setLast_maintenance(e.target.value)}
                        className="bg-gray-900 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-blue-500"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-xs text-gray-400 uppercase tracking-wide">Next Service Due</label>
                    <input
                        type="date"
                        value={next_service_due}
                        onChange={(e) => setNext_service_due(e.target.value)}
                        className="bg-gray-900 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-blue-500"
                    />
                </div>

                <div className="flex items-center gap-3 pt-4">
                    <input
                        type="checkbox"
                        id="is_active"
                        checked={is_active}
                        onChange={(e) => setIs_active(e.target.checked)}
                        className="w-4 h-4 accent-blue-500"
                    />
                    <label htmlFor="is_active" className="text-sm text-gray-300">Active Vehicle</label>
                </div>

            </div>

            <div className="mt-6">
                <button
                    onClick={add_a_vehicle}
                    className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-2 rounded-lg text-sm transition-colors"
                >
                    Submit
                </button>
            </div>
        </div>
    )
}

export default AddVehicle