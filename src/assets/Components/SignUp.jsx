import { useState, useEffect } from "react";
import jdbIcon from "../Images/jdb-icon.png";
import IntlTelInput from "intl-tel-input/reactWithUtils";
import "intl-tel-input/styles";

function SignUp() {
  const [currentSection, setCurrentSection] = useState(1);
  const [maxDate, setMaxDate] = useState("");
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

  const nextSection = () => {
    setCurrentSection((prev) => Math.min(prev + 1, 3));
  };

  const prevSection = () => {
    setCurrentSection((prev) => Math.max(prev - 1, 0));
  };

  useEffect(() => {
    const today = new Date();
    const maxDate = new Date();
    maxDate.setFullYear(today.getFullYear() - 18);
    const formatDate = (date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    };

    setMaxDate(formatDate(maxDate));
  }, []);

  return (
    <div className="SignUp flex h-[100vh] w-[100vw] flex-col items-center justify-center">
      <div className="flex h-[100vh] w-[100vw] items-center overflow-clip [box-shadow:0px_0px_10px_2px_#00000050] sm:h-[90vh] sm:w-[90vw] sm:rounded-[10px]">
        <div className="flex h-[100%] w-[50%] bg-green-900"></div>
        <div className="flex h-[100%] w-[50%] flex-col items-center justify-center gap-[30px]">
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
              />
              <input
                name="lastname"
                type="text"
                placeholder="Last Name"
                value={state.lastname}
                onChange={handleChange}
              />
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                value={state.email}
                onChange={handleChange}
              />
            </fieldset>
            <fieldset
              className={`flex w-full flex-col items-center gap-[10px] ${
                currentSection === 2 ? "active block" : "hidden"
              }`}
            >
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

              <div className="relative flex w-full justify-evenly p-[10px_10px] [border:solid_2px_#14532d80]">
                <span className="ubuntu absolute left-[10px] top-[-10px] h-[10px] bg-white px-[5px] text-[12px] font-[100]">
                  Gender
                </span>
                <div className="flex items-center gap-[5px]">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={state.gender === "Male"}
                    onChange={handleChange}
                  />
                  <label>Male</label>
                </div>
                <div className="flex items-center gap-[5px]">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={state.gender === "Female"}
                    onChange={handleChange}
                  />
                  <label>Female</label>
                </div>
              </div>
              <input
                type="date"
                name="dob"
                max={maxDate}
                value={state.dob}
                onChange={handleChange}
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
              />
              <input
                type="password"
                placeholder="Confirm password"
                onChange={handleChange}
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
        </div>
      </div>
    </div>
  );
}
export default SignUp;
