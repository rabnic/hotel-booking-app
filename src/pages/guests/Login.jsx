import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// import { getAuth } from "firebase/auth";

import Alert from "../../components/Alert";

import { getUser, login } from "../../services/hotel.service";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowAlert, setIsShowAlert] = useState(false);
  const [alertStatus, setAlertStatus] = useState({});
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password)
      .then(() => {
        getUser(email)
          .then((userDoc) => {
            if (userDoc) {
              setIsShowAlert(true);
              setAlertStatus({ type: "success", message: "Login successful" });
              console.log(userDoc);
              const goTo = userDoc.role === "admin" ? "/admin" : "/";
              navigate(goTo);
            } else {
              setIsShowAlert(true);
              setAlertStatus({
                type: "danger",
                message: "Login unsuccessful! Check your email or password.",
              });
            }
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        setIsShowAlert(true);
        setAlertStatus({
          type: "danger",
          message: "Login unsuccessful! Check your email or password.",
        });
      });
  };

  return (
    <main className="mt-24 py-4 px-4 lg:w-3/4 mx-auto">
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Welcome to the GREAT-STAY
          </h1>
          <p className="mb-6 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 text-center">
            Escape to our exquisite hotel and indulge in a world of luxury and
            relaxation. Experience impeccable service, breathtaking views, and
            an array of amenities that will make your stay truly unforgettable.
          </p>

          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <p className="text-sm text-blue-400 dark:text-gray-400">
                Admin test:{" "}
                <span className="text-blue-600">
                  email= admin_n@g-stay.co.za password= admin101
                </span>
              </p>
              <form
                className="space-y-4 md:space-y-6"
                action="#"
                onSubmit={handleLogin}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>

                {isShowAlert && <Alert status={alertStatus} />}

                <button
                  type="submit"
                  className="w-full text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
                <p className="text-sm  text-gray-700 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link
                    to="/register"
                    className="font-medium text-orange-700 hover:underline dark:text-orange-400"
                  >
                    Register
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Login;
