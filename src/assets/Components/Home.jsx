import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect"; //npm package for typewriting animation
import jdbIcon from "../Images/jdb-icon.png";
import slide1 from "../Images/slide1.jpg";
import slide2 from "../Images/slide2.jpg";
import slide3 from "../Images/slide3.jpg";
import slide4 from "../Images/slide4.jpg";
import slide5 from "../Images/slide5.jpg";

function Home() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [butFocused, setButFocused] = useState(false);
  const imgUrl = [slide1, slide2, slide3, slide4, slide5];

  //sliding animation syntax
  useEffect(() => {
    if (butFocused) return;//stops animation when button is pressed
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imgUrl.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [imgUrl.length, butFocused]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imgUrl.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imgUrl.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div className="Home flex h-[100vh] w-[100vw] flex-col items-center justify-center">
      <div className="flex h-[100vh] w-[100vw] flex-col items-center bg-green-900 [box-shadow:0px_0px_10px_2px_#00000050] sm:h-[90vh] sm:w-[90vw] sm:rounded-[10px]">
        <header className="flex h-fit w-4/5 items-center justify-between py-[30px]">
          <div className="flex items-center gap-[5px]">
            <img src={jdbIcon} alt="" className="h-[50px] w-[50px]" />
            <h1 className="ubuntu text-[30px] font-[700] italic text-green-400 [text-shadow:2px_5px_10px_#000]">
              JAFDABILS
            </h1>
          </div>

          <div className="montserrat hidden items-center gap-[20px] text-[15px] font-[400] text-green-200 sm:flex">
            <Link to="/SignUp" className="hover:scale-110">
              SignUp
            </Link>
            <Link to="/Login" className="hover:scale-110">
              Login
            </Link>

            <Link>About</Link>
          </div>
        </header>

        <main className="flex w-4/5 grow flex-col justify-center gap-[20px] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-[10px] md:w-1/2">
            <h1 className="poppins text-[25px] font-[400] text-green-200">
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

            <p className="ubuntu text-[12px] text-white">
              That's right! You found the platform
            </p>

            <button
              className="montserrat w-fit rounded-[3px] bg-[linear-gradient(to_right,_#b8ebbf10,_#b8ebbf)] px-[10px] py-[5px] font-[500] text-[#031305] shadow-2xl"
              onClick={() => {
                navigate("/SignUp");
              }}
            >
              <i className="fa-solid fa-angles-right"></i> Get Started
            </button>
          </div>

          <div className="relative flex h-1/2 min-h-[200px] w-full max-w-[250px] self-center sm:max-w-[200px] md:w-[45%]">
            <div className="flex h-full w-full flex-col gap-2">
              <div className="relative flex h-[90%] w-full overflow-hidden">
                {imgUrl.map((image, index) => (
                  <div
                    className={`absolute inset-0 top-0 h-full w-full transition-transform duration-500 ease-in-out ${
                      index === currentIndex
                        ? "translate-x-0"
                        : "-translate-x-full"
                    }`}
                    key={index}
                  >
                    <img src={image} className="h-full w-full object-cover" />
                  </div>
                ))}
              </div>

              <div className="flex h-[10%] items-center justify-center gap-[3px]">
                {imgUrl.map((_, index) => (
                  <div
                    key={index}
                    className={`h-[7px] w-[7px] rounded-[50%] ${
                      index === currentIndex ? "bg-green-400" : "bg-gray-300"
                    }`}
                  ></div>
                ))}
              </div>

              <button
                className="slidebut -left-[25px] text-left"
                onClick={prevSlide}
                onMouseDown={() => setButFocused(true)}
                onMouseUp={() => setTimeout(() => setButFocused(false), 2000)}
              >
                <i className="fa-solid fa-circle-arrow-left"></i>
              </button>
              <button
                className="slidebut -right-[25px] text-right"
                onClick={nextSlide}
                onMouseDown={() => setButFocused(true)}
                onMouseUp={() => setTimeout(() => setButFocused(false), 2000)}
              >
                <i className="fa-solid fa-circle-arrow-right"></i>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;


//Damdave '24
