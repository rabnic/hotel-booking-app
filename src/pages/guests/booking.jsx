import React from "react";
import { addBooking } from "../../services/hotel.service";

function Booking() {
  const handleAddBooking = (e) => {
    addBooking("ZmSbofQFFE7fpQ9wPvYX", {bookingId: '100',checkIn:'27-07-2023', checkOut: "29-07-2023"});
  }
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
          <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          <div date-rangepicker class="flex items-center">
            <div class="relative">
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Check In</label>
              <input name="start" type="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Check-In" />
            </div>
            <span class="mx-4 text-gray-500">to</span>
            <div class="relative"  htmlFfor="check-in">
              <label htmlFor="check-in" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Check Out</label>
              <input name="end" type="date" id="check-out" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Check-Out" />
            </div>
            <span class="mx-4"></span>
            <div class="relative">
            <label htmlFor="check-out" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white invisible">check</label>
              <input name="end" onClick={handleAddBooking} type="button" id="check-out" class="bg-orange-500 border font-semibold text-slate-800 text-sm text-center rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value="Check Availability" />
            </div>
          </div>
          <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        </div>
      </section>
    </main>
  );
}

export default Booking;
