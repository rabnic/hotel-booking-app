import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { deleteRoom, getAllRooms } from "../../services/hotel.service";
import { onSnapshot } from "firebase/firestore";
import Sidebar from "../../components/admin/SidebarAdmin";

function RoomsAdmin() {
  const [roomsDB, setRoomsDB] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllRooms()
      .then((snapshot) => {
        setRoomsDB(
          snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setIsLoading(false);
      });
  }, []);

  const handleDeleteRoom = (roomId) => {
    console.log("rooms start", roomsDB);
    deleteRoom(roomId)
      .then(() => {
        console.log("Delete successful");
        console.log(roomsDB);
        roomsDB.forEach((element) => {
          console.log(`${element.id} != ${roomId} -> ${element.id !== roomId}`);
        });
        setRoomsDB((prevData) => {
          prevData.filter((room) => {
            return room.id !== roomId;
          });
        });
        setIsLoading(false);
        console.log("rooms inside", roomsDB);
      })
      .catch((err) => {
        console.log(err.message);
      });

    console.log("rooms end", roomsDB);
  };

  const toggleDropdown = (roomId) => {
    const actionsModal = document.getElementById(`${roomId}-actions-dropdown`);
    if (actionsModal.classList.contains("hidden")) {
      actionsModal.classList.remove("hidden");
    } else {
      actionsModal.classList.add("hidden");
    }
  };
  return (
    <>
      <main className="flex">
        <Sidebar />

        <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 w-full">
          <div className="w-full xl:w-2/3 p-4 mx-auto my-auto">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
              Hotel Rooms
            </h1>
            <p
              className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400"
              onClick={toggleDropdown}
            >
              Explore all the rooms at G-STAY Hotel
            </p>
          </div>
          <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
            <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
              <div className="hidden flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4"></div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-4 py-3">
                        Room No.
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Room Type
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Price
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Max Guest
                      </th>
                      <th scope="col" className="px-4 py-3">
                        bookings
                      </th>
                      <th scope="col" className="px-4 py-3">
                        <span className="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {isLoading ? (
                      <tr>
                        <td role="status">
                          <svg
                            aria-hidden="true"
                            className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
                        </td>
                      </tr>
                    ) : (
                      roomsDB &&
                      roomsDB.map((room) => {
                        return (
                          <tr
                            className="border-b dark:border-gray-700"
                            key={room.id}
                          >
                            <th className="px-4 py-3">{room.number}</th>
                            <td className="px-4 py-3">{room.type}</td>
                            <td className="px-4 py-3">{room.price}</td>
                            <td className="px-4 py-3">{room.maxGuests}</td>
                            <td className="px-4 py-3">None</td>
                            <td className="px-4 py-3 flex items-center justify-end relative">
                              <button
                                onClick={() => {
                                  toggleDropdown(room.id);
                                }}
                                id={`${room.id}-dropdown-button`}
                                data-dropdown-toggle="actions-dropdown"
                                className="inline-flex items-center  p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                                type="button"
                              >
                                <svg
                                  className="w-5 h-5"
                                  aria-hidden="true"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                </svg>
                              </button>
                              <div
                                id={`${room.id}-actions-dropdown`}
                                className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 absolute -top-3 right-2"
                              >
                                <ul
                                  className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                  aria-labelledby="apple-imac-27-dropdown-button"
                                >
                                  <li>
                                    <a
                                      href="#"
                                      className="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                      Show
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                      Edit
                                    </a>
                                  </li>
                                </ul>
                                <div className="py-1">
                                  <a
                                    href="#"
                                    className="block py-2 px-4 text-sm text-gray-200 font-semibold bg-red-400 hover:bg-red-500 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white text-center"
                                    onClick={() => {
                                      toggleDropdown(room.id);
                                    }}
                                  >
                                    Close
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Outlet />
    </>
  );
}

export default RoomsAdmin;
