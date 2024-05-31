import IdeaCard from "./components/IdeaCard";

function IdeaSection() {
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
  return (
    <>
      <div className="flex relative justify-center items-center min-h-[700px]">
        <img
          src="./images/Ornament.png"
          alt="Ornament"
          className=" absolute top-0  right-0 "
        />
        <div className=" z-[0] max-w-[500px] w-full aspect-square flex  items-center justify-evenly text-[#edbc5a41] bg-radial-gradient  absolute bottom-[0%] right-[0%]"></div>
        <div
          className="w-full bg-[#1A1717] p-20 max-w-[800px]  bg-no-repeat bg-right-top flex flex-col gap-14  z-10 rounded-md"
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
              <div className="w-[70px] aspect-square bg-[#EDBC5A] rounded-full p-10 flex justify-center items-center ">
                <img src="./images/Arrow.png" alt="" />
              </div>
              <h1 className="tracking-widest">
                <span className="font-[600]"> For Your </span> Business.
              </h1>
            </div>
          </div>
          <div className="flex border-y-[1px] border-l-[1px]  rounded-md border-[#262626]">
            {cardData.map((item, index) => {
              return (
                <>
                  <IdeaCard item={item} index={index} />
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
