import { useState } from "react";
import IdeaCard from "./components/IdeaCard";

const cardData = [
  {
    heading: "Web Design & Development",
    Description: "",
  },
  {
    heading: "Advertising and Marketing Campaigns",
    Description:
      "Suspendisse sit amet neque euismod, convallis quam eget, dignissim massa. Aliquam.",
  },
  {
    heading: "Creative Consulting and Development",
    Description: "",
  },
  {
    heading: "Branding and Identity Design",
    Description: "",
  },
];
function IdeaSection() {
  const [selectedCard, setSelectedCard] = useState(1);

  return (
    <>
      <div className="flex relative justify-center p-7 items-center min-h-[700px]">
        <img
          src="./images/Ornament.png"
          alt="Ornament"
          className=" absolute top-0 z-0  w-full max-w-[300px] right-0 "
        />
        <div className=" z-[0] max-w-[500px] w-full aspect-square flex  items-center justify-evenly text-[#edbc5a41] bg-radial-gradient  absolute bottom-[0%] right-[0%]"></div>
        <div
          className="w-full bg-[#1A1717] p-20 max-w-[1200px]  bg-no-repeat bg-right-top flex flex-col gap-14  z-[1] rounded-md"
          style={{
            backgroundImage: 'url("./images/Topographic.png")',
          }}
        >
          <div className="text-[5rem] font-[300] text-white ">
            <div className="flex gap-10 justify-center ">
              <h1>
                Unique <span className="font-[600]"> Ideas </span>
              </h1>
              <img src="./images/bg.png" alt="" />
            </div>
            <div className="flex gap-10 justify-center">
              <div className="max-w-[70px] w-full aspect-square bg-[#EDBC5A] rounded-full p-10 flex justify-center items-center ">
                <img src="./images/Arrow.png" alt="" />
              </div>
              <h1 className="tracking-widest text-left">
                <span className="font-[600]"> For Your </span> Business.
              </h1>
            </div>
          </div>
          <div className="flex border-y-[1px]  border-l-[1px] overflow-x-auto  rounded-md border-[#262626]">
            {cardData.map((item, index) => {
              return (
                <>
                  <IdeaCard
                    item={item}
                    selectedCard={selectedCard}
                    setSelectedCard={setSelectedCard}
                    index={index}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default IdeaSection;
