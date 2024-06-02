function PlaySection() {
  return (
    <>
      {" "}
      <div
        style={{ backgroundImage: "url(./images/backgroundimg.png)" }}
        className="relative flex justify-center items-center  w-full bg-no-repeat bg-cover p-12 py-96 bg-center"
      >
        <div
          style={{ backgroundImage: "url(./images/wavyFlower.png)" }}
          className="max-w-[200px] w-full max-md:max-w-[80px] max-lg:max-w-[100px] animate-pulse text-[2.8rem] flex justify-center items-center  text-white text-center bg-no-repeat bg-contain bg-center aspect-square "
        >
          Play
        </div>
        <div className="flex min-h-[100px] max-[500px]:flex-wrap  absolute top-[80%] items-start w-full pl-28 gap-3 justify-between">
          <img
            src="./images/img.png"
            className=" max-w-[300px] self-end   max-md:max-w-[150px]  w-full "
            alt=""
          />
          <div className=" max-w-[600px] max-md:max-w-[350px] max-lg:max-w-[450px] flex items-center gap-20 py-24 px-16 rounded-md w-[100vw] top-[70%] right-0 bg-[#1A1717] ">
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
                I have been a loyal customer of this auto parts company for
                years and I cannot recommend them enough. Their extensive
                selection of high-quality parts and accessories, combined with
                their competitive prices.
              </p>

              <h1 className="text-[2.2rem] text-white font-bold">
                Marvin McKinney
                <h6 className="text-[1.4rem] text-[#B0B0B0]">Web designer</h6>
              </h1>
              <div className="flex justify-between relative   items-start">
                {" "}
                <div className="flex ">
                  <img
                    src="./images/icon.png"
                    width={50}
                    className="aspect-square max-md:w-[20px]"
                    alt=""
                  />
                  <img
                    src="./images/icon.png"
                    width={50}
                    className="aspect-square rotate-180 max-md:w-[20px]"
                    alt=""
                  />
                </div>
                <img
                  width={100}
                  className=" absolute  top-0 right-0 max-md:w-[70px]"
                  src="./images/017-quote.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlaySection;
