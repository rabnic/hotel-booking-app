import React, { useState } from "react";
import { addBooking } from "../../services/hotel.service";
import { getTodayAndTomorrowDate } from "../../utils/utils";
import { Timestamp } from 'firebase/firestore'



function Booking() {

  const [today, tomorrow] = getTodayAndTomorrowDate();

  const [checkInDate, setCheckInDate] = useState(today);
  const [checkOutDate, setCheckOutDate] = useState(tomorrow);

  

  // const checkInTime = "13:00:00";
  // const checkOutTime = "10:00:00";

  const booking = 
    {
      guestEmail: '',
      checkIn:'',
      checkOut:'',
      guestsQuantity:1,
      totalCost: 0,
      status: ''
    }
  

  const handleAddBooking = (e) => {
    // addBooking("ZmSbofQFFE7fpQ9wPvYX", {
    //   bookingId: "100",
    //   checkIn: "27-07-2023",
    //   checkOut: "29-07-2023",
    // }
    // );
    console.log(new Date(checkInDate), checkOutDate);
    console.log("below dates");

  };
  return (
    <main className="mt-20 py-4 px-4 lg:w-3/4 mx-auto">
      <section className="bg-white dark:bg-gray-900">
        <div className="py-2 lg:py-8 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Book A Room
          </h2>
          <p className="mb-2 text-md lg:mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Check availability for a room and book your great stay.
          </p>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          <div date-rangepicker={"true"} className="flex items-center">
            <div className="relative">
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Check In
              </label>
              <input
                name="check-in"
                type="date"
                min={today}
                value={checkInDate}
                id="check-in"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => {
                  setCheckInDate(e.target.value);
                }}
              />
            </div>
            <span className="mx-4 text-gray-500">to</span>
            <div className="relative" htmlFor="check-in">
              <label
                htmlFor="check-in"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Check Out
              </label>
              <input
                name="check-out"
                type="date"
                min={tomorrow}
                id="check-out"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={checkOutDate}
                onChange={(e) => {
                  setCheckOutDate(e.target.value);
                }}
              />
            </div>
            <span className="mx-4"></span>
            <div className="relative">
              <label
                htmlFor="check-out"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white invisible"
              >
                check
              </label>
              <input
                name="end"
                onClick={handleAddBooking}
                type="button"
                id="check-out"
                className="bg-orange-500 border font-semibold text-slate-800 text-sm text-center rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value="Check Availability"
              />
            </div>
          </div>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        </div>
      </section>
    </main>
  );
}

export default Booking;
