function PlaySection() {
  return (
    <>
      {" "}
      <div className="min-h-[600px] relative flex justify-center items-center  w-full bg-no-repeat bg-contain bg-center bg-[url('./images/backgroundimg.png')]">
        <div className="w-[200px] animate-pulse text-[2.8rem] flex justify-center items-center  text-white text-center bg-no-repeat bg-contain bg-center aspect-square bg-[url('./images/wavyFlower.png')]">
          Play
        </div>
        <img
          src="./images/img.png"
          className="absolute max-w-[300px] w-full top-[80%] left-28"
          alt=""
        />
        <div className="absolute max-w-[600px] flex items-center gap-20 py-24 px-16 rounded-md w-full top-[70%] right-0 bg-[#1A1717] ">
          <div className="max-w-[200px] flex flex-col items-end  gap-16">
            <img
              src="./images/Ellipse 29.png"
              className="w-[60%] mr-[-20px]"
              alt=""
            />
            <img src="./images/Ellipse 156.png" alt="" />
            <img
              src="./images/Ellipse 157.png"
              className="w-[60%] mr-[-20px]"
              alt=""
            />
          </div>
          <div className=" flex flex-col gap-4  text-left">
            <p className="text-[1.8rem] text-[#B0B0B0] max-w-[350px]">
              I have been a loyal customer of this auto parts company for years
              and I cannot recommend them enough. Their extensive selection of
              high-quality parts and accessories, combined with their
              competitive prices.
            </p>

            <h1 className="text-[2.2rem] text-white font-bold">
              Marvin McKinney
              <h6 className="text-[1.4rem] text-[#B0B0B0]">Web designer</h6>
            </h1>
            <div className="flex justify-between items-start">
              {" "}
              <div className="flex ">
                <img
                  src="./images/icon.png"
                  width={50}
                  className="aspect-square"
                  alt=""
                />
                <img
                  src="./images/icon.png"
                  width={50}
                  className="aspect-square rotate-180"
                  alt=""
                />
              </div>
              <img
                width={100}
                className="self-end"
                src="./images/017-quote.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlaySection;
