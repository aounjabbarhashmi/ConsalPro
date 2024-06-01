function HeroSection() {
  return (
    <header className="text-white w-[70%] mx-auto   py-[40px] ">
      {/* main hero section title  */}
      <h1 className="text-left  text-[14rem]  max-sm:text-[8rem] font-bold uppercase leading-[15rem]">
        <span className="flex  gap-12">
          {" "}
          We are{" "}
          <img
            src="./images/SuperToroid-Black-Matte.png"
            className="w-[10%] "
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
          className="w-[20vw] absolute right-[10%] top-[20%]"
          alt="spiral"
        />
      </div>
      {/* carousal card section  */}
      <div className="relative mt-28">
        <div className="relative bg-[url(./images/Rectangle.png)]   z-1 bg-contain bg-no-repeat w-full max-w-[600px] aspect-video">
          <div className=" flex-col absolute bottom-[10%] right-[10%] bg-center justify-center items-center inline-flex p-8 px-16 aspect-square rounded-full bg-[#EDBC5A]">
            <img src="./icons/send.svg" alt="" width="30%" />
            <h1 className="capitalize text-[2rem] text-black text-[400]">
              explore <br /> more{" "}
            </h1>
          </div>
        </div>
        <div
          className="text-white absolute left-[-10%] top-[45%]  z-[0]  inline-flex flex-col items-start p-4 border-b-2 "
          style={{
            borderColor:
              "linear-gradient(top right 120deg, rgba(255, 255, 255, 0) 1.51%, #EDBC5A 105.37%))",
          }}
        >
          <h5 className="text-[1.6rem] uppercase text-[#B0B0B0]">induction</h5>
          <h1 className=" text-[3.8rem] ">Creative Design </h1>
        </div>
      </div>

      {/* signature section  */}
      <div className="flex justify-end mt-[-130px]">
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
