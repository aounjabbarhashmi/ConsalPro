import { useEffect, useState } from "react";
import CarousalCard from "./component/CarousalCard";
const data = [
  {
    img: "./images/Rectangle.png",
    heading: "Creative Design ",
    subheading: "induction",
  },
  {
    img: "./images/Rectangle.png",
    heading: "App Development",
    subheading: "induction",
  },
  {
    img: "./images/Rectangle.png",
    heading: "Web Development",
    subheading: "induction",
  },
];
function HeroSection() {
  const [cardNum, setCardNum] = useState(0);
  const [arrowState, setArrowState] = useState("next");
  const CardNumHandler = (param) => {
    setCardNum(param);
  };
  useEffect(() => {
    if (cardNum == data.length - 1) {
      setArrowState("pre");
    }
    if (cardNum < data.length - 1 && cardNum > 0) {
      setArrowState("both");
    }
    if (cardNum == 0) {
      setArrowState("next");
    }
  }, [cardNum]);
  return (
    <header className="text-white w-[70%] mx-auto   py-[40px] ">
      {/* main hero section title  */}
      <h1 className="text-left  text-[14rem]  max-sm:text-[8rem] font-bold uppercase leading-[15rem]">
        <span className="flex  gap-12">
          {" "}
          We are{" "}
          <img
            src="./images/SuperToroid-Black-Matte.png"
            className="w-[10%] animate-move "
            alt=""
          />
        </span>
        <span className=" stroke-text relative ">
          WEb Design
          <img
            src="./images/element.svg"
            className="absolute top-[-40%] right-[-12%] w-[20%] min-w-[20px]"
            alt=""
          />
        </span>
        <br />
        <span className="text-[10rem] font-[400] word max-sm:tracking-normal tracking-[0.7em]">
          {" "}
          agency
        </span>
      </h1>
      {/* background svg images  */}
      <img
        src="./images/Dawn.png"
        className="absolute left-0 top-[15%]  w-[15%]"
        alt="down"
      />
      {/* blur bg sun div */}
      <div className=" z-[0] max-w-[500px] w-full aspect-square flex  items-center justify-evenly text-[#edbc5a41] bg-radial-gradient  absolute top-[0%] right-[0%]">
        <img
          src="./images/Spiral.png"
          className="w-[20vw] absolute right-[10%] top-[20%] animate-spin2"
          alt="spiral"
        />
      </div>
      {/* carousal card section  */}
      <CarousalCard key={cardNum} data={data[cardNum]} />
      <div className="flex gap-2">
        <button
          className={`${
            arrowState == "pre" || arrowState == "both"
              ? "bg-[#EDBC5A] cursor-pointer active:scale-95"
              : "bg-[#131313] cursor-default"
          }   p-6 w-24 transition-all duration-300 ease-linear `}
          onClick={() => {
            if (arrowState == "pre" || arrowState == "both") {
              CardNumHandler(cardNum - 1);
            }
          }}
        >
          <img src="./images/Arrow.png" className="rotate-[212deg]" alt="" />
        </button>
        <div
          className={`${
            arrowState == "next" || arrowState == "both"
              ? "bg-[#EDBC5A] cursor-pointer active:scale-95"
              : "bg-[#131313] cursor-default"
          }  p-6 w-24 transition-all duration-300 ease-linear `}
          onClick={() => {
            if (arrowState == "next" || arrowState == "both") {
              CardNumHandler(cardNum + 1);
            }
          }}
        >
          <img src="./images/Arrow.png" className="rotate-[35deg]" alt="" />
        </div>
      </div>
      {/* signature section  */}
      <div className="flex max-xl:mt-[80px] justify-end mt-[-130px]">
        <div className=" max-w-[300px] w-full">
          <p className="italic text-[1.6rem] font-[500]  text-left text-[#B0B0B0] ">
            Proin efficitur, mauris vel condimentum pulvinar, velit orci
            consectetur ligula, eget egestas magna mi ut arcu. Phasellus nec
            odio orci.
          </p>
          <div
            className="w-full h-[1px] my-3 "
            style={{
              background:
                "linear-gradient(90deg, #D2A751 0%, rgba(255, 255, 255, 0) 92.24%)",
            }}
          ></div>
          <div className="flex  items-center  gap-4">
            <div className=" w-[80px] aspect-square bg-[#D9D9D9] rounded-full"></div>
            <div className="  ">
              <h1 className="text-[1.6rem] text-left font-[500]">
                Eleanor Pena
              </h1>
              <p className="text-[1.2rem] font-[300] text-left">Eleanor Pena</p>
            </div>
            <img src="./images/Signature.png" alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeroSection;
