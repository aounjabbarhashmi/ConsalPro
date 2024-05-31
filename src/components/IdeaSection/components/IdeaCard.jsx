import PropTypes from "prop-types";
function IdeaCard(props) {

  return (
    <>
      {" "}
      <div className="min-h-[300px] cursor-pointer p-10 border-r-[1px] border-[#262626] flex flex-col justify-between max-w-[210px] w-full">
        <h1 className="text-[1.8rem] text-left text-[400] text-white ">
          {props.item.heading}
        </h1>
        <p className="text-[1.6rem] text-left text-[#B0B0B0] text-[400]">
          {props.item.Description}
        </p>
        <div className="w-full flex justify-between items-center">
          <div className="w-[40px] aspect-square bg-[#333333] rounded-full p-7 flex justify-center items-center ">
            <img src="./images/Arrow.png" alt="" />
          </div>
          <p className=" text-[5rem] font-[400] stroke-text2  ">
            0{props.index + 1}
          </p>
        </div>
      </div>
    </>
  );
}

export default IdeaCard;
IdeaCard.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
};
