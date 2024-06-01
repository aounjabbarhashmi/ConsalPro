import PropTypes from "prop-types";

function CarousalCard(props) {
  return (
    <>
      {" "}
      <div className="relative mt-28">
        <div
          className={`relative animate-pulse2 bg-[url('./images/Rectangle.png')]   z-1 bg-contain bg-no-repeat w-full max-w-[600px] aspect-video`}
        >
          <div className=" flex-col hover:scale-90 transition-all duration-300 ease-linear cursor-pointer absolute bottom-[10%] right-[10%] bg-center justify-center items-center inline-flex p-8 px-16 aspect-square rounded-full bg-[#EDBC5A]">
            <img src="./icons/send.svg" alt="" width="30%" />
            <h1 className="capitalize text-[2rem] text-black text-[400]">
              explore <br /> more
            </h1>
          </div>
        </div>
        <div
          className="text-white animate-horizontal absolute left-[-10%] top-[45%]  z-[0]  inline-flex flex-col items-start p-4 border-b-2 "
          style={{
            borderColor:
              "linear-gradient(top right 120deg, rgba(255, 255, 255, 0) 1.51%, #EDBC5A 105.37%))",
          }}
        >
          <h5 className="text-[1.6rem] uppercase text-[#B0B0B0]">
            {props.data.subheading}
          </h5>
          <h1 className=" text-[3.8rem] ">{props.data.heading}</h1>
        </div>
      </div>
    </>
  );
}

export default CarousalCard;
CarousalCard.propTypes = {
  data: PropTypes.object,
};
