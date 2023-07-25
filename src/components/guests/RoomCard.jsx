import React from "react";
import { Link } from "react-router-dom";

function RoomCard({ room }) {
  console.log(room)
  const roomDescription = {
    Single:
      "Experience comfort and convenience in our stylish single rooms. Designed with the modern traveler in mind, these cozy retreats feature a comfortable bed, a well-appointed ensuite bathroom, and all the amenities you need for a relaxing stay.",
    Double:
      "Indulge in the spacious elegance of our double rooms. Perfect for couples or those seeking extra space, these rooms offer a plush king-size or twin beds, a luxurious ensuite bathroom, and a charming sitting area where you can unwind and enjoy your time together.",
    Family:
      "Create lasting memories with your loved ones in our family rooms. These well-designed spaces provide ample room for the whole family, featuring comfortable bedding options, a private ensuite bathroom, and thoughtful amenities to ensure everyone's comfort. Relax and enjoy quality time together in the comfort of our family-friendly environment.",
    Presidential:
      "Experience the pinnacle of luxury in our exquisite presidential suite. This grand and opulent retreat offers unparalleled elegance and comfort. Enjoy the lavish king-size bed, a stunning ensuite bathroom with deluxe amenities, a fully equipped kitchen for your culinary delights, and a spacious lounge area to entertain guests. The suite's private balcony showcases breathtaking views, providing a truly unforgettable stay.",
  };
  return (
    <>
      <div className="cursor-pointer flex flex-col rounded-xl bg-white p-3 shadow-lg hover:shadow-x2 hover:shadow-orange-800">
        <div className="relative h-40 flex items-end overflow-hidden rounded-xl">
          <img src={room.images[0]} alt="Room main pic" className="w-full" loading="lazy" />

          <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-yellow-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>

            <span className="ml-1 text-sm text-slate-400">4.9</span>
          </div>
        </div>

        <div className="mt-1 p-2 flex flex-col max-h-50 flex-1 justify-between gap-2 relative">
          <h2 className="text-slate-800 font-semibold">{`${room.type} Room`}</h2>
          <p className="mt-1 text-sm text-slate-500">2 Bedroom. 4 Guests</p>
          <p className="mt-1 text-sm text-slate-500">
            {roomDescription[room.type]}
          </p>

          <div className="mt-auto relative bottom-0 flex items-center justify-between">
            <p>
              <span className="text-lg font-bold text-orange-500">{`R${room.price}`}</span>
              <span className="text-sm text-slate-400">/night</span>
            </p>

            {/* <div className="group inline-flex rounded-xl bg-orange-100 p-2 hover:bg-orange-200"> */}
            <Link
              to="room"
              state={{ room: room }}
              className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              View room
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
            {/* </div> */}
          </div>
        </div>
      </div>

      {/* <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="./assets/images/room1.jpg" alt="" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>
            </a> */}
    </>
  );
}

export default RoomCard;
