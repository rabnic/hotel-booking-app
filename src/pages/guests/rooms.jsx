import React from 'react'
import RoomCard from '../../components/guests/RoomCard'

function Rooms() {
    return (
        <main className='py-4 px-4 lg:w-3/4 mx-auto' >
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">Exquisite rooms at GREAT-STAY</h1>
            <p className="mb-6 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 text-center">
                Escape to our exquisite hotel and indulge in a world of luxury and relaxation. Experience impeccable service, breathtaking views,
                and an array of amenities that will make your stay truly unforgettable.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                <RoomCard />
                <RoomCard />
                <RoomCard />
                <RoomCard />
                <RoomCard />
                <RoomCard />
                <RoomCard />
                <RoomCard />
            </div>
            {/* < section className="bg-gray-50 dark:bg-gray-900 border" >
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 border">
                    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Welcome to the GREAT-STAY</h1>
                    <p className="mb-6 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 text-center">
                        Escape to our exquisite hotel and indulge in a world of luxury and relaxation. Experience impeccable service, breathtaking views,
                        and an array of amenities that will make your stay truly unforgettable.
                    </p>
                    <div className=" flex flex-wrap flex-shrink gap-3 items-center justify-center ">
                        <RoomCard />
                        <RoomCard />
                        <RoomCard />
                        <RoomCard />
                        <RoomCard />
                        <RoomCard />
                        <RoomCard />
                        <RoomCard />
                    </div>
                </div>
            </section> */}
        </main>
    )
}

export default Rooms
