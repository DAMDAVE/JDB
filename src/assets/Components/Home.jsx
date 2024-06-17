import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import jdbIcon from "../Images/jdb-icon.png";

function Home() {
  return (
    <div className="Home h-[100vh] w-[100vw] flex flex-col items-center justify-center">
      <div className="h-[100vh] w-[100vw] flex flex-col  bg-green-900 items-center [box-shadow:0px_0px_10px_2px_#00000050] sm:rounded-[10px] sm:h-[90vh] sm:w-[90vw]">
        <header className="h-fit w-[80%] flex py-[30px] items-center justify-between">
          <div className="flex gap-[5px] items-center">
            <img src={jdbIcon} alt="" className="w-[50px] h-[50px]" />
            <h1 className="ubuntu font-[700] text-green-400 text-[30px] [text-shadow:2px_5px_10px_#000] italic">
              JAFDABILS
            </h1>
          </div>

          <div className="hidden sm:flex gap-[20px] items-center text-[15px] montserrat font-[400] text-green-200 ">
            <Link to="/home" className="hover:scale-110 ">
              Home
            </Link>
            <Link to="/SignUp" className="hover:scale-110 ">
              SignUp
            </Link>
            <Link to="/Login" className="hover:scale-110 ">
              Login
            </Link>
          </div>
        </header>
        <main className="w-[80%] flex grow items-center">
          <div className="flex flex-col gap-[10px] md:w-[50%] ">
            <h1 className="poppins font-[400] text-[25px] text-green-200">
              <Typewriter
                options={{
                  delay: 50,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Your gateway to earning, learning and sharing")
                    .start();
                }}
              />
            </h1>
            <p className="ubuntu text-white text-[12px]">
              That's right! You found the platform
            </p>
            <button className="bg-[linear-gradient(to_right,_#b8ebbf10,_#b8ebbf)] w-fit py-[5px] px-[10px] rounded-[3px] shadow-2xl text-[#031305] montserrat font-[500]">
              <i className="fa-solid fa-angles-right"></i> Get Started
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
export default Home;
