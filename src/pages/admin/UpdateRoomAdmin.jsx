import React, { useState, useEffect, useRef } from "react";

import { addNewRoom, uploadRoomImages } from "../../services/hotel.service";
import Sidebar from "../../components/admin/SidebarAdmin";

function UpdateRoomAdmin() {
  const [number, setNumber] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [numBeds, setNumBeds] = useState(1);
  const [maxGuests, setMaxGuests] = useState(1);
  const [amenities, setAmenities] = useState([]);
  const [bookings, setBookings] = useState({});
  const [roomImages, setRoomImages] = useState([]);
  const [amenitiesCheckboxes, setAmenitiesCheckboxes] = useState({
    featherBedding: { checked: false, value: "Feather Bedding" },
    tv: { checked: false, value: "TV" },
    wifi: { checked: false, value: "WiFi" },
    toiletries: { checked: false, value: "Toiletries" },
    bathrobes: { checked: false, value: "Bathrobes" },
    barFridge: { checked: false, value: "Bar Fridge" },
    hairdryer: { checked: false, value: "Hair Dryer" },
    breakfast: { checked: false, value: "Complimentary Breakfast" },
    showerBathtub: { checked: false, value: "Shower Bathtub" },
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    console.log(name, checked, amenitiesCheckboxes);
    setAmenitiesCheckboxes((prevCheckboxes) => {
      prevCheckboxes[name]["checked"] = checked;
      // console.log(prevCheckboxes[name]["checked"]);
      return {
        ...prevCheckboxes,
      };
    });
  };

  const getAmenities = () => {
    let checkedAmenities = [];
    Object.entries(amenitiesCheckboxes).forEach(([outerKey, innerObj]) => {
      console.log(innerObj);
      if (innerObj.checked) {
        checkedAmenities.push(innerObj.value);
      }
    });
    return checkedAmenities;
  };

  const handleAddNewRoom = (e) => {
    e.preventDefault();
    // const selectedOptions = Object.entries(amenitiesCheckboxes)
    //   .filter(([_, isChecked]) => isChecked)
    //   .map(([option]) => option);

    const room = {
      number,
      price,
      type,
      numBeds,
      maxGuests,
      amenities: getAmenities(),
    };

    console.log(room);

    // console.log(Array.from(roomImages));
    // uploadRoomImages(number, Array.from(roomImages))
    //   .then((urls) => {
    //     addNewRoom({ ...room, images: urls });
    //   })
    //   .catch((err) => {
    //     console.log(err.message);
    //   });
    // addNewRoom(room)
    // console.log(room)
    // console.log(room);
  };

  return (
    <main className="flex relative">
      <Sidebar />
      <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 mx-auto">
        <div className="w-full xl:w-2/3 p-4 mx-auto my-auto">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white ">
            Update Room
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl  dark:text-gray-400">
            Here you can update your chosen room to be booked by guests at
            G-STAY Hotel
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
                    type="number"
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
                    type="number"
                    name="price"
                    id="price"
                    step="any"
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
                    max={4}
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
                    max={3}
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
                          id="feather-bedding-checkbox"
                          type="checkbox"
                          name="featherBedding"
                          value="Feather Bedding"
                          checked={amenitiesCheckboxes.featherBedding.checked}
                          onChange={handleCheckboxChange}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          htmlFor="feather-bedding-checkbox"
                          className="text-gray-900 text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        >
                          Feather Bedding
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                      <div className="flex items-center pl-3">
                        <input
                          id="tv-checkbox"
                          type="checkbox"
                          name="tv"
                          value="TV"
                          checked={amenitiesCheckboxes.tv.checked}
                          onChange={handleCheckboxChange}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          htmlFor="tv-checkbox"
                          className="text-gray-900 text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        >
                          TV
                        </label>
                      </div>
                    </li>

                    <li className="w-full dark:border-gray-600">
                      <div className="flex items-center pl-3">
                        <input
                          id="wifi-checkbox"
                          type="checkbox"
                          name="wifi"
                          value="Wifi"
                          checked={amenitiesCheckboxes.wifi.checked}
                          onChange={handleCheckboxChange}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          htmlFor="wifi-checkbox"
                          className="text-gray-900 text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        >
                          WiFi
                        </label>
                      </div>
                    </li>
                    <li className="w-full dark:border-gray-600">
                      <div className="flex items-center pl-3">
                        <input
                          id="toiletries-checkbox"
                          type="checkbox"
                          name="toiletries"
                          value="Toiletries"
                          checked={amenitiesCheckboxes.toiletries.checked}
                          onChange={handleCheckboxChange}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          htmlFor="toiletries-checkbox"
                          className="text-gray-900 text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        >
                          Toiletries
                        </label>
                      </div>
                    </li>
                    <li className="w-full dark:border-gray-600">
                      <div className="flex items-center pl-3">
                        <input
                          id="bathrobes-checkbox"
                          type="checkbox"
                          name="bathrobes"
                          value="Bathrobes"
                          checked={amenitiesCheckboxes.bathrobes.checked}
                          onChange={handleCheckboxChange}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          htmlFor="bathrobes-checkbox"
                          className="text-gray-900 text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        >
                          Bathrobes
                        </label>
                      </div>
                    </li>
                    <li className="w-full dark:border-gray-600">
                      <div className="flex items-center pl-3">
                        <input
                          id="bar-fridge-checkbox"
                          type="checkbox"
                          name="barFridge"
                          value="Bar Fridge"
                          checked={amenitiesCheckboxes.barFridge.checked}
                          onChange={handleCheckboxChange}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          htmlFor="bar-fridge-checkbox"
                          className="text-gray-900 text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        >
                          Bar Fridge
                        </label>
                      </div>
                    </li>
                    <li className="w-full dark:border-gray-600">
                      <div className="flex items-center pl-3">
                        <input
                          id="hairdryer-checkbox"
                          type="checkbox"
                          name="hairdryer"
                          value="Hairdryer"
                          checked={amenitiesCheckboxes.hairdryer.checked}
                          onChange={handleCheckboxChange}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          htmlFor="hairdryer-checkbox"
                          className="text-gray-900 text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        >
                          Hairdryer
                        </label>
                      </div>
                    </li>
                    <li className="w-full dark:border-gray-600">
                      <div className="flex items-center pl-3">
                        <input
                          id="breakfast-checkbox"
                          type="checkbox"
                          name="breakfast"
                          value="Complimentary Breakfast"
                          checked={amenitiesCheckboxes.breakfast.checked}
                          onChange={handleCheckboxChange}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          htmlFor="breakfast-checkbox"
                          className="text-gray-900 text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        >
                          Complimentary Breakfast
                        </label>
                      </div>
                    </li>
                    <li className="w-full dark:border-gray-600">
                      <div className="flex items-center pl-3">
                        <input
                          id="shower-bathtub-checkbox"
                          type="checkbox"
                          name="showerBathtub"
                          value="Shower and bathtub"
                          checked={amenitiesCheckboxes.showerBathtub.checked}
                          onChange={handleCheckboxChange}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          htmlFor="shower-bathtub-checkbox"
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
}

export default UpdateRoomAdmin;
