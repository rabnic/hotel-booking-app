import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Alert from "../../components/Alert";
import BookRoomCard from "../../components/guests/BookRoomCard";
import Loader from "../../components/Loader";

import {
  addBooking,
  getRoomBookings,
  checkRoomAvailability,
  checkSimilarRoomsAvailability,
} from "../../services/hotel.service";
import { getTodayAndTomorrowDate } from "../../utils/utils";
// import { Timestamp } from 'firebase/firestore'

const Booking = () => {
  const roomState = useLocation().state;
  const navigate = useNavigate();
  console.log(roomState);

  const [today, tomorrow] = getTodayAndTomorrowDate();

  const [roomUnderCheck, setRoomUnderCheck] = useState(roomState || null);
  const [checkInDate, setCheckInDate] = useState(today);
  const [checkOutDate, setCheckOutDate] = useState(tomorrow);
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [isRoomAvailable, setIsRoomAvailable] = useState(false);
  const [isSimilarRoomAvailable, setIsSimilarRoomAvailable] = useState(false);
  const [similarRooms, setSimilarRooms] = useState([]);
  const [isShowAlert, setIsShowAlert] = useState(false);
  const [alertStatus, setAlertStatus] = useState({ message: "", type: "" });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!roomUnderCheck) {
      navigate("/rooms");
    }
  });

  const checkInTime = "13:00:00";
  const checkOutTime = "10:00:00";

  const booking = {
    guestEmail: "none",
    checkIn: new Date(`${checkInDate}T${checkInTime}`).getTime(),
    checkOut: new Date(`${checkOutDate}T${checkOutTime}`).getTime(),
    guestsQuantity: numberOfGuests,
    totalCost: 0,
    status: "in-progress",
  };

  const handleGetRoomBookings = (e) => {
    getRoomBookings(roomUnderCheck.id)
      .then((roomBookings) => {
        console.log(roomBookings);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleCheckRoomAvailability = (e) => {
    // setIsLoading(true)
    checkRoomAvailability(
      roomUnderCheck.id,
      booking.checkIn,
      booking.checkOut
    ).then((isAvailable) => {
      if (isAvailable) {
        console.log("Room is available");
        setIsShowAlert(false);
        setAlertStatus({ message: "", type: "" });
        setIsRoomAvailable(true);
        // addBooking(roomUnderCheck.id, booking);
      } else {
        // alert("Room not available");
        setIsShowAlert(true);
        setAlertStatus({ message: "Room is not available", type: "danger" });
        setTimeout(() => {
          if (
            window.confirm(
              "Do you want to check availability for similar rooms?"
            )
          ) {
            checkSimilarRoomsAvailability(
              roomUnderCheck.type,
              booking.checkIn,
              booking.checkOut
            )
              .then((snapshot) => {
                console.log(snapshot);
                setSimilarRooms(snapshot);
                if (snapshot) {
                  setIsShowAlert(false);
                }
              })
              .catch((err) => {
                console.log(err.message);
              });
            console.log("checking similar rooms availability");
          }
        }, 500);
      }
    });
    setIsLoading(false);
  };

  return (
    <main className="mt-20 py-4 px-4 lg:w-3/4 mx-auto">
      <section className="bg-white dark:bg-gray-900">
        <div className="py-2 lg:py-8 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Book A Room
          </h2>
          <p className="mb-2 text-md lg:mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Check availability for a room and book your great stay.
          </p>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          <div date-rangepicker={"true"} className="flex items-center justify-between">
            <div className="relative">
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Check In
              </label>
              <input
                name="check-in"
                type="date"
                min={today}
                value={checkInDate}
                id="check-in"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => {
                  setCheckInDate(e.target.value);
                }}
              />
            </div>
            <span className="mx-4 text-gray-500">to</span>
            <div className="relative" htmlFor="check-in">
              <label
                htmlFor="check-in"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Check Out
              </label>
              <input
                name="check-out"
                type="date"
                min={tomorrow}
                id="check-out"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={checkOutDate}
                onChange={(e) => {
                  setCheckOutDate(e.target.value);
                }}
              />
            </div>
            <span className="mx-4 text-gray-500"></span>
            <div className="relative" htmlFor="check-in">
              <label
                htmlFor="check-in"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Number of Guests
              </label>
              <input
                name="number-of-guests"
                type="number"
                min={1}
                max={6}
                id="number-of-guests"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={numberOfGuests}
                onChange={(e) => {
                  setNumberOfGuests(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="relative">
              <label
                htmlFor="check-out"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white invisible"
              >
                check
              </label>
              <input
                name="end"
                onClick={(e) => {
                  setIsLoading(true);
                  handleCheckRoomAvailability(e);
                }}
                type="button"
                id="check-out"
                className="bg-orange-500 border font-semibold text-slate-800 text-sm text-center rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value="Check Availability"
              />
            </div>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        </div>
        <section className="flex justify-center">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {isShowAlert && <Alert status={alertStatus} />}

              {isRoomAvailable && (
                <BookRoomCard room={roomUnderCheck} booking={booking} />
              )}

              {similarRooms &&
                similarRooms.map((room) => {
                  return <BookRoomCard room={room} booking={booking} />;
                })}
            </>
          )}
        </section>
      </section>
    </main>
  );
};

export default Booking;

