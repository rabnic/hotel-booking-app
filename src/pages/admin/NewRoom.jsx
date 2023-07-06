import React from "react";

function NewRoom() {
  return (
    <>
      <section class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 ">
        <div className="w-full xl:w-2/3 p-4 mx-auto my-auto">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white ">
            New Room
          </h1>
          <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl  dark:text-gray-400">
            Here you can add a new room to be booked by guests at G-STAY Hotel
          </p>
        </div>
        <section class="dark:bg-gray-900">
          <div class="py-0 px-4 mx-auto max-w-2xl lg:py-0">
            {/* <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
              Add a new product
            </h2> */}
            <form action="#">
              <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div class="sm:col-span-2">
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Room Number
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type room number"
                    required=""
                  />
                </div>
                <div class="w-full">
                  <label
                    for="brand"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Room Type
                  </label>
                  <input
                    type="text"
                    name="brand"
                    id="brand"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Room type"
                    required=""
                  />
                </div>
                <div class="w-full">
                  <label
                    for="price"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="R950.00"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="category"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Room Type
                  </label>
                  <select
                    id="category"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  >
                    <option selected="">Select category</option>
                    <option value="TV">Single</option>
                    <option value="PC">Double</option>
                    <option value="GA">Presidential</option>
                    <option value="PH">Family</option>
                  </select>
                </div>
                <div>
                  <label
                    for="item-weight"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Item Weight (kg)
                  </label>
                  <input
                    type="number"
                    name="item-weight"
                    id="item-weight"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="12"
                    required=""
                  />
                </div>
                <div class="sm:col-span-2">
                  <label
                    for="description"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    rows="8"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Your description here"
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-right text-white bg-orange-700 rounded-lg focus:ring-4 focus:ring-orange-200 dark:focus:ring-orange-900 hover:bg-orange-800"
              >
                Add room
              </button>
            </form>
          </div>
        </section>
      </section>
    </>
  );
}

export default NewRoom;
