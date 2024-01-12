import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="min-w-full  lg:w-3/4 mx-auto ">
      <section className="w-full  min-h-full">
        <div
          className="relative min-h-full overflow-hidden bg-cover bg-no-repeat "
          style={{
            backgroundPosition: "100%",
            backgroundImage: "url('/assets/images/hotel.jpg')",
            height: "700px",
          }}
        >
          <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
            <div className="flex h-full items-center justify-center max-w-screen-xl mx-auto">
              <div className="px-6 text-center text-white md:px-12">
                <h1 className="mt-2 mb-16 text-5xl font-normal tracking-tight md:text-6xl xl:text-7xl">
                  The best offer on the market for your{" "}
                  <span className="text-orange-100 font-bold">GREAT STAY</span>
                  <br />
                  {/* <span>for your business</span> */}
                </h1>
                <p className="mb-6 text-lg drop-shadow font-normal text-gray-400 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-200 text-center">
                  Escape to our exquisite hotel and indulge in a world of luxury
                  and relaxation.
                </p>
                {/* <button
                  type="button"
                  className="rounded border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Get started
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto pt-16 p-4">
          <div className="lg:flex">
            <div className="xl:w-2/5 lg:w-2/5 py-2 xl:rounded-bl rounded-tl rounded-tr xl:rounded-tr-none">
              <div className="xl:w-5/6 xl:px-0 px-8 mx-auto">
                <h2 className="text-5xl font-extrabold tracking-wide dark:text-white text-center">Get Insight With Us</h2>
                <h3 className="my-4 text-2xl text-gray-500 text-center">We are ready to present you your great stay.</h3>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <p className="mb-4 text-lg font-normal text-gray-700 dark:text-gray-400 flex gap-2">
                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
                  </svg>
                  <span className="font-semibold">Check-In:</span> 11:00  <span className="font-semibold">Check-Out:</span> 13:00</p>

                <p className="mb-4 flex gap-2 text-lg font-normal text-gray-700 dark:text-gray-400">
                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                    <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                  </svg>
                  1 Mark Shuttleworth Street, Lynwood, Pretoria, 0087</p>
                <Link className="mb-4 flex gap-2 text-lg font-normal text-blue-500 dark:text-blue-800 hover:underline">
                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                  </svg>
                  info@g-stay.com</Link>
                <Link className="mb-4 flex gap-2 text-lg font-normal text-blue-500 dark:text-blue-800 hover:underline">
                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                    <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                  </svg>
                  012 345 6789</Link>



              </div>
            </div>
            <div className="xl:w-3/5 lg:w-3/5 bg-gray-200 pt-5 pb-5 xl:pr-5 xl:pl-0 rounded-tr rounded-br lg:flex-1">
              <div className="w-full h-full">
                <iframe className="w-full h-full min-h-[100%]" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14374.57545585607!2d28.2681143!3d-25.7492884!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e956044e649a34b%3A0xff7146688dfcfc17!2sThe%20Innovation%20Hub%20Management%20Company!5e0!3m2!1sen!2sza!4v1690272035158!5m2!1sen!2sza"
                  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
