import React, {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";


function BookingConfirmation() {
  const location = useLocation();
  const [roomToBeBooked, setRoomToBooked] = useState(location.state)
  useEffect(() => {
    console.log(location.state);
  })
  return (
    <main className="mt-20 py-4 px-4 lg:w-3/4 mx-auto">
      <section className="bg-white dark:bg-gray-900">
        <div className="py-2 lg:py-8 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Booking Confirmation
          </h2>
          <p className="mb-2 text-md lg:mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            You need to be a registered user to confirm your booking. 
          </p>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        </div>
        <section className="flex justify-center">
          
        </section>

      </section>
    </main>
  );
}

export default BookingConfirmation;
