import React, { useContext } from "react";
import { useAuthContext } from "../../App";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const handleLogout = () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      console.log("Sign-out successful.");
    })
    .catch((error) => {
      // An error happened.
    });
};

function Navbar() {
  const currentUser = useAuthContext();
  console.log(currentUser);
  return (
    <nav className="bg-slate-900 bg-opacity-95 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 dark:border-gray-600 text-slate-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="" className="flex items-center">
          <img src="/logo.png" className="h-8 mr-3" alt="G-STAY Logo" />
        </Link>
        <div className="flex md:order-2">
          <Link
            to="booking"
            className="text-white bg-orange-700 hover:bg-orange-800 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0"
          >
            Book Now
          </Link>
          {/* <button
            type="button"
            className="text-white bg-transparent mx-2 hover:drop-shadow border border-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0"
          >
            Login
          </button> */}
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="true"
            onClick={() => { }}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:flex-row md:space-x-8 md:mt-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 text-slate-200">
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 hover:font-semibold text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="rooms"
                className="block py-2 pl-3 pr-4 hover:font-semibold text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Rooms
              </Link>
            </li>
            <li>
              <Link
                to="facilities"
                className="block py-2 pl-3 pr-4 hover:font-semibold text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Facilities
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                className="block py-2 pl-3 pr-4 hover:font-semibold text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </Link>
            </li>
            {
              currentUser ?
                <li>
                  <button
                    onClick={handleLogout}
                    className="block py-2 pl-3 pr-4 border-b-2 border-red-900 hover:font-semibold md:hover:bg-transparent text-orange-200 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Logout
                  </button>
                </li>
                :
                <li>
                  <Link
                    to="login"
                    className="block py-2 pl-3 pr-4 border-b-2 border-green-900 hover:font-semibold md:hover:bg-transparent text-orange-200 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Login
                  </Link>
                </li>
            }
          </ul>
        </div>
      </div>
    </nav>

    // <nav className='bg-slate-900' >

    //     <div className='w-full xl:w-2/3 flex p-4 gap-8 justify-start items-center mx-auto my-auto'>
    //         <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="border border-red-600 inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
    //             <span className="sr-only">Open sidebar</span>
    //             <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    //                 <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
    //             </svg>
    //         </button>
    //         <div className='hidden'>
    //             <img src='./assets/icons/menu-bar.png' alt="" className="w-8 h-8 bg-slate-100 rounded-md" />
    //         </div>
    //         <div className=''>
    //             <img src='./logo.png' alt="" className="h-8" />
    //         </div>
    //         <div className='ml-auto flex items-center gap-3'>
    //             <img src='./assets/icons/user.png' alt="" className="w-8 h-8" />
    //             <p className='text-green-600 text-lg font-semibold'>John Doe</p>
    //         </div>
    //     </div>
    // </nav>
  );
}

export default Navbar;
