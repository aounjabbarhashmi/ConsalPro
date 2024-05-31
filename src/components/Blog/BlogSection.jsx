function BlogSection() {
  const data = [
    {
      date: "February - 22th 2024",
      heading: "Will you be attending Affiliate Summit Europe?",
      content: "",
      img: "./images/img1.png",
    },
    {
      date: "February - 22th 2024",
      heading: "Will you be attending Affiliate Summit Europe?",
      content:
        "I have been a loyal customer of this auto parts company for years and I cannot recommend them enough. Their extensive selection.",
      img: "./images/img2.png",
    },
    {
      date: "February - 22th 2024",
      heading: "Will you be attending Affiliate Summit Europe?",
      content: "",
      img: "./images/img3.png",
    },
  ];
  return (
    <>
      <div className="text-white mt-[280px]">
        <div>
          <p className="text-[1.6rem] text-[#EDBC5A] font-[300] tracking-wider">
            Blog & News
          </p>
          <h1 className="text-[5rem] text-[white] font-[400]">
            Our Latest News & Blog Get Every Updates
          </h1>
        </div>

        <div className="flex justify-between  p-12 items-center gap-6">
          <img src="./images/Chevron--left.png" alt="" />
          <div className="flex justify-center text-left  items-start gap-6">
            {" "}
            {data.map((item) => {
              return (
                <>
                  <div className="w-[300px]  flex-col flex p-4  gap-8 scale-90 transition-all duration-500 ease-in-out ">
                    <time
                      dateTime="January - 06th 2024 "
                      className="text-[1.6rem] text-[#B0B0B0] font-[400]"
                    >
                      {item.date}
                    </time>
                    <h1 className="text-[2.2rem] text-bold ">{item.heading}</h1>
                    <p className="text-[1.6rem] text-[#B0B0B0] leading-[2.9rem] font-[400]">
                      {item.content}
                    </p>
                    <img src={item.img} alt="" className="mt-4" />
                  </div>
                </>
              );
            })}
          </div>
          <img src="./images/Chevron--left.png" className="rotate-180" alt="" />
        </div>
      </div>
    </>
  );
}

export default BlogSection;
