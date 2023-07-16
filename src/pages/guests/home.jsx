import React from "react";

function Home() {
  return (
    <main className="min-w-full  lg:w-3/4 mx-auto ">
      <section className="min-w-full h-full">
        <div
          className="relative overflow-hidden bg-cover bg-no-repeat "
          style={{
            backgroundPosition: "100%",
            backgroundImage: "url('/assets/images/hotel.jpg')",
            height: "500px",
          }}
        >
          <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
            <div className="flex h-full items-center justify-center">
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
    </main>
  );
}

export default Home;
