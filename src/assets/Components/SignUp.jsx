import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import IntlTelInput from "intl-tel-input/reactWithUtils";
import "intl-tel-input/styles";
import signupPic from "../Images/signupPic.jpg";
import jdbIcon from "../Images/jdb-icon.png";

function SignUp() {
  const [maxDate, setMaxDate] = useState("");
  const [currentSection, setCurrentSection] = useState(1);
  const nextSection = () => setCurrentSection((prev) => Math.min(prev + 1, 3));
  const prevSection = () => setCurrentSection((prev) => Math.max(prev - 1, 0));
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  // const onSubmit = () => {

  // }

  useEffect(() => {
    const today = new Date();
    const maxDate = new Date();
    maxDate.setFullYear(today.getFullYear() - 18);
    const formatDate = (date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${day}-${month}-${year}`;
    };

    setMaxDate(formatDate(maxDate));
  }, []);

  return (
    <div className="SignUp flex h-[100vh] w-[100vw] flex-col items-center justify-center bg-green-900">
      <div className="flex h-[100vh] w-[100vw] flex-col items-center overflow-clip bg-white [box-shadow:0px_0px_10px_2px_#00000050] sm:h-[90vh] sm:w-[90vw] sm:flex-row sm:rounded-[10px]">
        <div className="flex h-[20vh] sm:h-[100%] sm:w-[50%]">
          <img src={signupPic} alt="" className="object-cover" />
        </div>
        <div className="flex w-[90%] grow flex-col items-center justify-center gap-[30px] sm:h-[100%] sm:w-[50%]">
          <img src={jdbIcon} alt="" />
          <form className="relative flex w-[80%] max-w-[300px] flex-col gap-[20px]">
            <fieldset
              className={`flex w-[100%] flex-col items-center gap-[10px] ${
                currentSection === 1 ? "active block" : "hidden"
              }`}
            >
              <input
                name="firstname"
                type="text"
                placeholder="First Name"
                value={state.firstname}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
              />

              <input
                name="lastname"
                type="text"
                placeholder="Last Name"
                value={state.lastname}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
              />

              <input
                name="email"
                type="email"
                placeholder="Email Address"
                value={state.email}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
              />
            </fieldset>

            <fieldset
              className={`flex w-full flex-col items-center gap-[10px] ${
                currentSection === 2 ? "active block" : "hidden"
              }`}
            >
              {/* check npm intl-tel-input for more explanation */}
              <IntlTelInput
                initOptions={{
                  initialCountry: "auto",
                  geoIpLookup: (success, failure) => {
                    fetch("https://ipapi.co/json")
                      .then((res) => res.json())
                      .then((data) => success(data.country_code))
                      .catch(() => failure());
                  },
                  strictMode: true,
                  utilsScript: "path/to/utils.js",
                  containerClass: "w-[100%]",
                }}
              />

              <select
                className={`${state.gender === "" ? "text-gray-400" : ""}`}
                name="gender"
                value={state.gender}
                onChange={handleChange}
              >
                <option value="" hidden>
                  Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>

              <input
                type="text"
                name="dob"
                value={state.dob}
                onChange={handleChange}
                placeholder={`Date of Birth e.g ${maxDate}`}
                onKeyDown={handleKeyPress}
              />
            </fieldset>

            <fieldset
              className={`flex w-full flex-col items-center gap-[10px] ${
                currentSection === 3 ? "active block" : "hidden"
              }`}
            >
              <input
                type="password"
                placeholder="Enter password"
                onChange={handleChange}
                onKeyDown={handleKeyPress}
              />

              <input
                type="password"
                placeholder="Confirm password"
                onChange={handleChange}
                onKeyDown={handleKeyPress}
              />
            </fieldset>

            <div className="flex justify-between">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  prevSection();
                }}
                className={`shad w-[40%] text-[15px] text-white ${currentSection === 1 && "hidden"}`}
              >
                Previous
              </button>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  nextSection();
                }}
                className="shad ml-auto w-[40%] text-[15px] text-white"
              >
                {currentSection === 3 ? "Submit" : "Next"}
              </button>
            </div>
          </form>

          <Link to="/login" className="text-[12px] text-green-600">
            Already have an account? <span className="underline"> SignIn</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default SignUp;

//Damdave '24
