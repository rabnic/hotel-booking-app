import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useAuthContext } from "../../App";
import Alert from "../../components/Alert";

function BookingConfirmation() {
  const location = useLocation();

  const currentUser = useAuthContext();
  const [roomToBeBooked, setRoomToBooked] = useState(location.state);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  useEffect(() => {
    console.log(location.state);
    window.scrollTo(0, 0);
  }, [location]);

  const handleBookingConfrimation = () => {
    if (!currentUser) {
      alert("You need to be logged in to confirm booking");
    }
  };
  return (
    <main className="mt-20 py-4 px-4 lg:w-3/4 mx-auto">
      <section className="bg-white dark:bg-gray-900">
        <div className="py-2 lg:py-8 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Booking Confirmation
          </h2>
          <p className="mb-2 text-md lg:mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            You are now few clicks away from securing your Great STAY.
          </p>
          {/* <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" /> */}
        </div>
        <section className="">
          <div className="md:flex items-start justify-center ">
            <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
              <img
                className="w-full"
                alt="img of a girl posing"
                src="https://i.ibb.co/QMdWfzX/component-image-one.png"
              />
            </div>
            <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
              <div className="border-b border-gray-200 pb-6">
                <p className="text-sm leading-none text-gray-600">
                  Kgabo Molatja's great stay!
                </p>
                <h1
                  className="
							lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
							mt-2
						"
                >
                  Presidential Rooom
                </h1>
              </div>
              <div className="py-4 border-b border-gray-200 flex items-center gap-3">
                <pan className="flex items-center">
                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 18">
                    <path d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                  </svg>
                  1 room
                </pan>
                <pan className="flex items-center">
                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 18">
                    <path d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                  </svg>
                  2 guests
                </pan>

              </div>
              <div className="pb-4 border-b border-gray-200 flex items-center justify-between">
                <p className="text-base lg:leading-tight leading-normal text-gray-600 mt-7">

                  18m² • Non-smoking • En-suite Bathroom • Wireless Internet • Air conditioned • Housekeeping •
                  Room Service • Laundry Facilities • 24hr Security • Swimming Pool • Fridge • Tea/Coffee Maker
                </p>

              </div>
              <div className="mb-4">

                <p className="text-base leading-4 my-7 text-gray-600 font-normal flex justify-between border-b border-gray-200">
                  Tue, 25 July 23 – Wed, 26 July 23
                  <span> 3 nights</span>
                </p>

                <p className=" text-base lg:leading-tight leading-normal text-gray-600 mt-7  border-b border-gray-200 pb-4">
                  May your room booking bring you a wonderful experience and an unforgettable
                  adventure during your stay, wishing you a truly great stay that surpasses all expectations!
                </p>

                <p className="text-base leading-4 mt-7 text-gray-600 font-semibold flex justify-between">
                  Total
                  <span>R3500.00</span>
                </p>

              </div>
              {currentUser ? (
                <button
                  onClick={handleBookingConfrimation}
                  className="
						focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-gray-800 w-full py-4 hover:bg-gray-700"
                >
                  Confirm Booking
                </button>
              ) : (
                <>
                  <Alert
                    status={{
                      type: "warning",
                      message: "You need to be signed in to confirm booking!",
                    }}
                  />
                  <div className="flex rounded-md shadow-sm" role="group">
                    <Link
                      to="/login"
                      state={{ from: "confirmation" }}
                      className="inline-flex group justify-center items-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-transparent  tracking-widest border border-gray-900 rounded-l-lg hover:bg-gray-900 hover:text-orange-400 focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                    >
                      <svg
                        className="w-[22px] h-[22px] text-gray-800 dark:text-white mr-2 group-hover:text-orange-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 15"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          strokeWidth="1"
                          d="M1 7.5h11m0 0L8 3.786M12 7.5l-4 3.714M12 1h3c.53 0 1.04.196 1.414.544.375.348.586.82.586 1.313v9.286c0 .492-.21.965-.586 1.313A2.081 2.081 0 0 1 15 14h-3"
                        />
                      </svg>
                      Login
                    </Link>
                    <Link
                      to="/register"
                      state={{ from: "confirmation" }}
                      className="inline-flex group justify-center items-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-transparent tracking-widest border border-gray-900 rounded-r-md hover:bg-gray-900 hover:text-orange-400 focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                    >
                      <svg
                        className="w-[22px] h-[22px] text-gray-800 dark:text-white mr-2 hover:fill-orange-500 group-hover:text-orange-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 18"
                      >
                        <path d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Zm11-3h-2V5a1 1 0 0 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 0 0 2 0V9h2a1 1 0 1 0 0-2Z" />
                      </svg>
                      Register
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

export default BookingConfirmation;
