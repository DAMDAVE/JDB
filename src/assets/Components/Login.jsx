import { useState } from "react";
import { Link } from "react-router-dom";
import jdbIcon from "../Images/jdb-icon.png";
import loginPic from "../Images/loginPic.jpg";

function Login() {
  const [state, setState] = useState({
    emailORusername: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="Login flex h-[100vh] w-[100vw] flex-col items-center justify-center bg-green-900">
      <div className="flex h-[100vh] w-[100vw] flex-col items-center overflow-clip bg-white [box-shadow:0px_0px_10px_2px_#00000050] sm:h-[90vh] sm:w-[90vw] sm:flex-row sm:rounded-[10px]">
        <div className="order-2 flex w-[90%] grow flex-col items-center justify-center gap-[30px] bg-white sm:h-[100%] sm:w-[50%]">
          <img src={jdbIcon} alt="" />
          <form className="flex w-[80%] max-w-[300px] flex-col items-center gap-[20px]">
            <fieldset className="flex w-[100%] flex-col items-center">
              <input
                name="emailORusername"
                type="text"
                placeholder="Email or Username"
                value={state.emailORusername}
                onChange={handleChange}
                className="mb-[10px]"
              />

              <input
                name="password"
                type="Password"
                placeholder="Password"
                value={state.password}
                onChange={handleChange}
              />

              <Link
                to="/reset-password"
                className="montserrat ml-auto text-[13px] font-[400] text-red-600 hover:underline"
              >
                Forgot Password ?
              </Link>
            </fieldset>

            <button
              onClick={(e) => e.preventDefault()}
              className="shad w-[40%] text-[15px] text-white"
            >
              Submit
            </button>
          </form>
         
          <Link to="/Signup" className="text-green-600 text-[12px]">Dont have an account? <span className="underline"> SignUp</span></Link>
        </div>
        <div className="flex h-[20vh] sm:h-[100%] sm:w-[50%]">
          <img src={loginPic} alt="" className="object-cover" />
        </div>
      </div>
    </div>
  );
}
export default Login;

//Damdave '24
