import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import { HeartIcon, ShoppingBagIcon } from '@heroicons/react/solid'

const Room = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const room = location.state;
  console.log(location.state);

  useEffect(() => {
    if (!location.state) {
      navigate("/rooms");
    }
  });

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

  const product = {
    name: "Presidential Suite Room",
    price: 199,
    rating: 4.4,
    reviews: 96,
    hrefReviews: "#link",
    description:
      "L61 x 2 bedroom apartments – Spacious two bedroom apartments have extra length beds with a choice of a king size or twin, ensuite bathrooms and a fully equipped kitchen, lounge and balcony.",
    features: [
      { name: "Materials", details: "Bamboo, Glass" },
      { name: "Teapot", details: '7"L x 4.5"W x 4.5"H' },
      { name: "Capacity", details: "650 ml." },
      { name: "Cleaning", details: "Hand Wash" },
      { name: "Materials", details: "Bamboo, Glass" },
      { name: "Teapot", details: '7"L x 4.5"W x 4.5"H' },
      { name: "Capacity", details: "650 ml." },
      { name: "Cleaning", details: "Hand Wash" },
    ],
    colors: [
      { name: "Black", class: "bg-black" },
      { name: "White", class: "bg-white" },
      { name: "Blue", class: "bg-sky-400" },
    ],
    sizes: [
      { name: "Size 1", inStock: true },
      { name: "Size 2", inStock: true },
      { name: "Size 3", inStock: false },
    ],
    pictures: [
      { src: "/assets/images/room1.jpg", alt: "Teapot model" },
      { src: "/assets/images/room2.jpg", alt: "Teapot to pour water" },
      { src: "/assets/images/room3.jpg", alt: "Teapot for breakfast" },
    ],
  };

  const [mainPicture, setMainPicture] = useState(0);

  const starsNumber = Math.floor(product.rating);
  const isHalfStar = !Number.isInteger(product.rating);
  const emptyStars = 5 - Math.ceil(product.rating);

  return (
    <main className="mt-24 flex justify-center items-center min-h-full">
      <div className="mx-auto px-4 w-full max-w-7xl bg-white text-gray-700 my-auto border">
        <div className="flex flex-col lg:flex-row">
          {/* :PICTURES CONTAINER */}
          <div className="py-8 w-full lg:w-1/2 flex flex-col items-center">
            {/* ::Like Button */}
            <span className="self-start ml-10">
              <button className="text-gray-300 hover:text-red-500">
                {/* <HeartIcon className="w-10 h-10" /> */}
              </button>
            </span>
            {/* ::Main Picture */}
            <div className="w-auto h-56 sm:h-72 lg:h-full max-h-96 overflow-hidden">
              <img
                src={room.room.images[mainPicture]}
                alt="room main img"
                className="object-contain w-full h-full"
              />
            </div>
            {/* ::Gallery */}
            <div className="mt-6 mx-auto">
              <ul className="grid grid-flow-col auto-cols-fr gap-4">
                {room.room.images
                  .slice(0, 4) // Here you can manage the number of pictures displayed
                  .map((image, index) => (
                    <li
                      key={index}
                      className={`col-span-1 p-1 w-16 rounded border-2 ${
                        index === mainPicture
                          ? "border-yellow-600"
                          : "border-transparent"
                      }`}
                    >
                      <button
                        type="button"
                        className="block h-full rounded overflow-hidden"
                        onClick={() => setMainPicture(index)}
                      >
                        <img
                          src={image}
                          alt="room img"
                          className="object-contain"
                        />
                      </button>
                    </li>
                  ))}
              </ul>
            </div>
          </div>

          {/* :PRODUCT DETAILS */}
          <div className="lg:py-8 w-full lg:w-1/2 flex flex-col lg:border-l-2 border-gray-200">
            {/* ::Description Container */}
            <div className="order-3 lg:order-1 pb-5 sm:px-6 lg:border-b-2 border-gray-200">
              {/* :::Name */}
              <h1 className="mt-2 text-4xl text-gray-700 font-light tracking-wide">
                {room.room.type + " Room"}
              </h1>
              {/* :::Description */}
              <p className="mt-10 text-base text-gray-500">
                {roomDescription[room.room.type]}
              </p>
              {/* :::Features */}

              <h4 className="text-lg mt-2 font-semibold dark:text-white">
                Room Amenities
              </h4>

              <ul className="my-5 flex flex-wrap gap-3">
                {product.features.map((feature, index) => (
                  <li
                    key={index}
                    className="text-gray-500 w-fit list-disc list-inside"
                  >
                    <span className="text-sm font-normal">
                      {feature.details}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ::Customization Container */}

            {/* ::Actions Container */}
            <div className="order-2 lg:order-3 pt-8 sm:px-6 flex flex-wrap lg:flex-nowrap justify-around items-center border-b-2 lg:border-none border-gray-200">
              {/* :::Price */}
              <span className="m-2.5 text-4xl text-gray-500 font-extrabold">
                <span className="font-normal">R</span>
                {room.room.price}
              </span>
              {/* :::Add to cart button */}
              <button
                type="button"
                onClick={() => {navigate('/booking', {state: room.room})}}
                className="m-2.5 py-1.5 px-5 inline-flex items-center rounded-md bg-orange-500 text-base text-white font-semibold uppercase whitespace-nowrap hover:bg-orange-600"
              >
                {/* <ShoppingBagIcon className="mr-3 w-6 h-6" /> */}
                Check Availability
              </button>
              {/* :::Reviews */}
              <div className="m-2.5 flex items-center hidden">
                {/* ::::rating stars */}
                <div className="flex items-center space-x-1">
                  {/* full stars */}
                  {[...Array(starsNumber)].map((star, index) => (
                    <span key={index} className="flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-yellow-500 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                      </svg>
                    </span>
                  ))}
                  {/* half star */}
                  {isHalfStar && (
                    <span className="flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-yellow-500 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524v-12.005zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z" />
                      </svg>
                    </span>
                  )}
                  {/* empty stars */}
                  {[...Array(emptyStars)].map((star, index) => (
                    <span key={index} className="flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-yellow-500 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z" />
                      </svg>
                    </span>
                  ))}
                </div>
                {/* ::::all reviews */}
                <a
                  href={product.hrefReviews}
                  className="ml-2 text-sm text-sky-400 font-medium tracking-wide hover:text-sky-500 hover:underline"
                >{`${product.reviews} reviews`}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Room;
