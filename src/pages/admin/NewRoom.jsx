import React, { useState, useEffect, useRef } from "react";

import { addNewRoom, uploadRoomImages } from "../../services/hotel.service";
import Sidebar from "../../components/admin/Sidebar";

const NewRoom = () => {
  const [number, setNumber] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [numBeds, setNumBeds] = useState(1);
  const [maxGuests, setMaxGuests] = useState(1);
  const [amenities, setAmenities] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [roomImages, setRoomImages] = useState([]);

  const handleAddNewRoom = (e) => {
    e.preventDefault();
    const room = {
      number,
      price,
      type,
      numBeds,
      maxGuests,
      bookings,
      amenities,
    };
    // console.log(Array.from(roomImages));
    uploadRoomImages(number, Array.from(roomImages))
      .then((urls) => {
        addNewRoom({ ...room, images: urls });
      })
      .catch((err) => {
        console.log(err.message);
      });
    // addNewRoom(room)
    // console.log(room)
  };

  return (
    <main className="flex relative">
      <Sidebar />
      <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 mx-auto">
        <div className="w-full xl:w-2/3 p-4 mx-auto my-auto">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white ">
            New Room
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl  dark:text-gray-400">
            Here you can add a new room to be booked by guests at G-STAY Hotel
          </p>
        </div>
        <section className="dark:bg-gray-900">
          <div className="py-0 px-4 mx-auto max-w-2xl lg:py-0">
            {/* <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
              Add a new product
            </h2> */}
            <form action="#" onSubmit={handleAddNewRoom}>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div className="w-full">
                  {/*"sm:col-span-2">*/}
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Room Number
                  </label>
                  <input
                    type="text"
                    name="number"
                    id="number"
                    value={number}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type room number"
                    required
                    onChange={(e) => {
                      setNumber(e.target.value);
                    }}
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="brand"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Room Price
                  </label>
                  <input
                    type="text"
                    name="price"
                    id="price"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Room price"
                    required
                    value={price}
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="price"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Max Guests
                  </label>
                  <input
                    type="number"
                    name="maxGuests"
                    id="maxGuests"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="R950.00"
                    required
                    min={1}
                    value={maxGuests}
                    onChange={(e) => {
                      setMaxGuests(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Room Type
                  </label>
                  <select
                    id="type"
                    value={type}
                    onChange={(e) => {
                      setType(e.target.value);
                    }}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  >
                    <option defaultValue="">Select category</option>
                    <option value="Single">Single</option>
                    <option value="Double">Double</option>
                    <option value="Presidential">Presidential</option>
                    <option value="Family">Family</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="item-weight"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Beds
                  </label>
                  <input
                    type="number"
                    name="numBeds"
                    id="numBeds"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="2"
                    required
                    value={numBeds}
                    min={1}
                    onChange={(e) => {
                      setNumBeds(e.target.value);
                    }}
                  />
                </div>

                <div>
                  <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    htmlFor="multiple_files"
                  >
                    Upload Room Images
                  </label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    id="multiple_files"
                    type="file"
                    multiple
                    required
                    onChange={(e) => {
                      setRoomImages(e.target.files);
                    }}
                  />
                </div>
                {/* {block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400} */}

                <div className="sm:col-span-2">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Room Amenities
                  </label>

                  {/* <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Identification</h3> */}
                  <ul className="grid gap-0 sm:grid-cols-2 sm:gap-2 text-sm font-medium text-gray-900 bg-white border border-gray-900 rounded-lg  dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                      <div className="flex items-center pl-3">
                        <input
                          id="vue-checkbox-list"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          htmlFor="vue-checkbox-list"
                          className="text-gray-900 text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        >
                          Feather Bedding
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                      <div className="flex items-center pl-3">
                        <input
                          id="react-checkbox-list"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          htmlFor="react-checkbox-list"
                          className="text-gray-900 text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        >
                          TV
                        </label>
                      </div>
                    </li>

                    <li className="w-full dark:border-gray-600">
                      <div className="flex items-center pl-3">
                        <input
                          id="laravel-checkbox-list"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          htmlFor="laravel-checkbox-list"
                          className="text-gray-900 text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        >
                          WiFi
                        </label>
                      </div>
                    </li>
                    <li className="w-full dark:border-gray-600">
                      <div className="flex items-center pl-3">
                        <input
                          id="laravel-checkbox-list"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          htmlFor="laravel-checkbox-list"
                          className="text-gray-900 text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        >
                          Toiletries
                        </label>
                      </div>
                    </li>
                    <li className="w-full dark:border-gray-600">
                      <div className="flex items-center pl-3">
                        <input
                          id="laravel-checkbox-list"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          htmlFor="laravel-checkbox-list"
                          className="text-gray-900 text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        >
                          Bathrobes
                        </label>
                      </div>
                    </li>
                    <li className="w-full dark:border-gray-600">
                      <div className="flex items-center pl-3">
                        <input
                          id="laravel-checkbox-list"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          htmlFor="laravel-checkbox-list"
                          className="text-gray-900 text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        >
                          Bar Fridge
                        </label>
                      </div>
                    </li>
                    <li className="w-full dark:border-gray-600">
                      <div className="flex items-center pl-3">
                        <input
                          id="laravel-checkbox-list"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          htmlFor="laravel-checkbox-list"
                          className="text-gray-900 text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        >
                          Hairdryer
                        </label>
                      </div>
                    </li>
                    <li className="w-full dark:border-gray-600">
                      <div className="flex items-center pl-3">
                        <input
                          id="laravel-checkbox-list"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          htmlFor="laravel-checkbox-list"
                          className="text-gray-900 text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        >
                          Complimentary Breakfast
                        </label>
                      </div>
                    </li>
                    <li className="w-full dark:border-gray-600">
                      <div className="flex items-center pl-3">
                        <input
                          id="laravel-checkbox-list"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          htmlFor="laravel-checkbox-list"
                          className="ext-gray-900 text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        >
                          Shower and bathtub
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <button
                type="submit"
                className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-right text-white bg-orange-700 rounded-lg focus:ring-4 focus:ring-orange-200 dark:focus:ring-orange-900 hover:bg-orange-800"
              >
                Add room
              </button>
            </form>
          </div>
        </section>
      </section>
    </main>
  );
};

export default NewRoom;
