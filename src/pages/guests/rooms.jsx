import React, { useState, useEffect } from "react";
import RoomCard from "../../components/guests/RoomCard";
import {
  getAllRooms,
  getRoomsByPriceRange,
  getRoomsByType,
  getRoomsByTypeAndPriceRange,
} from "../../services/hotel.service";

function Rooms() {
  const [roomsDB, setRoomsDB] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedRoomType, setSelectedRoomType] = useState("");
  const [selectedRoomPriceRange, setSelectedRoomPriceRange] = useState("");

  const priceRanges = {
    p1: [500, 999],
    p2: [1000, 1499],
    p3: [1500, 1999],
    p4: [2000, 2500],
  };

  useEffect(() => {
    handleGetAllRooms();
  }, []);

  const handleGetAllRooms = () => {
    getAllRooms()
      .then((roomsSnapshot) => {
        console.log("get all called");
        setRoomsDB(roomsSnapshot);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setIsLoading(false);
      });
  };

  const handleGetRoomsByType = (e) => {
    if (selectedRoomPriceRange) {
      const priceStart = priceRanges[selectedRoomPriceRange][0];
      const priceEnd = priceRanges[selectedRoomPriceRange][1];
      handleGetRoomsByTypeAndPriceRange(selectedRoomType, priceStart, priceEnd);
      setSelectedRoomType(e.target.value);
      return;
    }
    getRoomsByType(e.target.value)
      .then((snapshot) => {
        setRoomsDB(
          snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
      })
      .catch((error) => {
        console.log(error.message);
      });
    setSelectedRoomType(e.target.value);
  };

  const handleGetRoomsByPriceRange = (e) => {
    const priceStart = priceRanges[e.target.value][0];
    const priceEnd = priceRanges[e.target.value][1];

    if (selectedRoomType) {
      handleGetRoomsByTypeAndPriceRange(selectedRoomType, priceStart, priceEnd);
      setSelectedRoomPriceRange(e.target.value);
      return;
    }
    getRoomsByPriceRange(priceStart, priceEnd)
      .then((snapshot) => {
        setRoomsDB(
          snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
      })
      .catch((error) => {
        console.log(error.message);
      });
    setSelectedRoomPriceRange(e.target.value);
  };

  const handleGetRoomsByTypeAndPriceRange = (
    roomType,
    priceStart,
    priceEnd
  ) => {
    getRoomsByTypeAndPriceRange(roomType, priceStart, priceEnd)
      .then((snapshot) => {
        setRoomsDB(
          snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleReset = () => {
    handleGetAllRooms();
    setSelectedRoomType("");
    setSelectedRoomPriceRange("");
    console.log("reset");
  };

  return (
    <main className="mt-24 py-4 px-4 lg:w-3/4 mx-auto">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
        Exquisite rooms at GREAT-STAY
      </h1>
      <p className="mb-6 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 text-center">
        Escape to our exquisite hotel and indulge in a world of luxury and
        relaxation. Experience impeccable service, breathtaking views, and an
        array of amenities that will make your stay truly unforgettable.
      </p>
      <div className="w-full md:w-2/3 shadow p-5 rounded-lg bg-white mx-auto">
        <div className="flex items-center justify-between mt-4">
          <p className="font-medium">Filters</p>

          <button
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md"
            onClick={handleReset}
          >
            Reset Filter
          </button>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <select
              id="price"
              value={selectedRoomPriceRange}
              onChange={handleGetRoomsByPriceRange}
              className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="">Room Price</option>
              <option value="p1">R500 - R999</option>
              <option value="p2">R1000 - R1499</option>
              <option value="p3">R1500 - R1999</option>
              <option value="p4">R2000 - R2500</option>
            </select>
            <select
              id="type"
              value={selectedRoomType}
              onChange={handleGetRoomsByType}
              className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="">Room Type</option>
              <option value="Single">Single</option>
              <option value="Double">Double</option>
              <option value="Family">Family</option>
              <option value="Presidential">Presidential</option>
            </select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {isLoading ? (
          <div role="status" className="mx-auto w-full">
            <svg
              aria-hidden="true"
              className="w-14 h-14 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          roomsDB &&
          roomsDB.map((room, index) => {
            return <RoomCard room={room} key={index} />;
          })
        )}
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
  );
}

export default Rooms;
