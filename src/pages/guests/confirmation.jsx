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
  });

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
                  Balenciaga Fall Collection
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
                  Balenciaga Signature Sweatshirt
                </h1>
              </div>
              <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                <p className="text-base leading-4 text-gray-800">Colours</p>
                <div className="flex items-center justify-center">
                  <p className="text-sm leading-none text-gray-600">
                    Smoke Blue with red accents
                  </p>
                  <div
                    className="
								w-6
								h-6
								bg-gradient-to-b
								from-gray-900
								to-indigo-500
								ml-3
								mr-4
								cursor-pointer
							"
                  ></div>
                  <svg
                    className="cursor-pointer"
                    width="6"
                    height="10"
                    viewBox="0 0 6 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 5L1 9"
                      stroke="#4B5563"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                <p className="text-base leading-4 text-gray-800">Size</p>
                <div className="flex items-center justify-center">
                  <p className="text-sm leading-none text-gray-600 mr-3">
                    38.2
                  </p>
                  <svg
                    className="cursor-pointer"
                    width="6"
                    height="10"
                    viewBox="0 0 6 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 5L1 9"
                      stroke="#4B5563"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <p className=" text-base lg:leading-tight leading-normal text-gray-600 mt-7">
                  It is a long established fact that a reader will be distracted
                  by thereadable content of a page when looking at its layout.
                  The point of usingLorem Ipsum is that it has a more-or-less
                  normal distribution of letters.
                </p>
                <p className="text-base leading-4 mt-7 text-gray-600">
                  Product Code: 8BN321AF2IF0NYA
                </p>
                <p className="text-base leading-4 mt-4 text-gray-600">
                  Length: 13.2 inches
                </p>
                <p className="text-base leading-4 mt-4 text-gray-600">
                  Height: 10 inches
                </p>
                <p className="text-base leading-4 mt-4 text-gray-600">
                  Depth: 5.1 inches
                </p>
                <p className="md:w-96 text-base leading-normal text-gray-600 mt-4">
                  Composition: 100% calf leather, inside: 100% lamb leather
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
                  <div class="flex rounded-md shadow-sm" role="group">
                    <Link
                      to="/login"
                      state={{ from: "confirmation" }}
                      class="inline-flex group justify-center items-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-transparent  tracking-widest border border-gray-900 rounded-l-lg hover:bg-gray-900 hover:text-orange-400 focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                    >
                      <svg
                        class="w-[22px] h-[22px] text-gray-800 dark:text-white mr-2 group-hover:text-orange-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 15"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1"
                          d="M1 7.5h11m0 0L8 3.786M12 7.5l-4 3.714M12 1h3c.53 0 1.04.196 1.414.544.375.348.586.82.586 1.313v9.286c0 .492-.21.965-.586 1.313A2.081 2.081 0 0 1 15 14h-3"
                        />
                      </svg>
                      Login
                    </Link>
                    <Link
                      to="/register"
                      state={{ from: "confirmation" }}
                      class="inline-flex group justify-center items-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-transparent tracking-widest border border-gray-900 rounded-r-md hover:bg-gray-900 hover:text-orange-400 focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                    >
                      <svg
                        class="w-[22px] h-[22px] text-gray-800 dark:text-white mr-2 hover:fill-orange-500 group-hover:text-orange-500"
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
