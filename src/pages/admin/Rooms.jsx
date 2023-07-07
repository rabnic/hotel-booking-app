import { useEffect, useState } from "react";

import { getAllRooms } from "../../services/hotel.service";
import { onSnapshot } from "firebase/firestore";


function Rooms() {

    const [roomsDB, setRoomsDB] = useState([]);

    useEffect(() => {
        getAllRooms()
        .then((snapshot) => {
            setRoomsDB(snapshot.docs.map(doc => {
                return {id: doc.id, ...doc.data()}
            }))
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])


    const toggleDropdown = () => {
        document.getElementById('apple-imac-27-dropdown').classList.remove('hidden');
        console.log(roomsDB);
    }
    return (
        <>

            <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 ">
                <div className='w-full xl:w-2/3 p-4 mx-auto my-auto'>
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white">Hotel Rooms</h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400" onClick={toggleDropdown}>Explore all the rooms at G-STAY Hotel</p>
                </div>
                <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
                    <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                        <div className="hidden flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">

                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-4 py-3">Room No.</th>
                                        <th scope="col" className="px-4 py-3">Room Type</th>
                                        <th scope="col" className="px-4 py-3">Price</th>
                                        <th scope="col" className="px-4 py-3">Max Guest</th>
                                        <th scope="col" className="px-4 py-3">bookings</th>
                                        <th scope="col" className="px-4 py-3">
                                            <span className="sr-only">Actions</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {roomsDB.map(room => {
                                        return (
                                            <tr className="border-b dark:border-gray-700" key={room.id}>
                                                <th className="px-4 py-3">{room.number}</th>
                                                <td className="px-4 py-3">{room.type}</td>
                                                <td className="px-4 py-3">{room.price}</td>
                                                <td className="px-4 py-3">{room.maxGuests}</td>
                                                <td className="px-4 py-3">None</td>
                                                <td className="px-4 py-3 flex items-center justify-end">
                                                    <button onClick={toggleDropdown} id="apple-imac-27-dropdown-button" data-dropdown-toggle="apple-imac-27-dropdown" className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
                                                        <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                                        </svg>
                                                    </button>
                                                    <div id="apple-imac-27-dropdown" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                                        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="apple-imac-27-dropdown-button">
                                                            <li>
                                                                <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                                            </li>
                                                        </ul>
                                                        <div className="py-1">
                                                            <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Rooms