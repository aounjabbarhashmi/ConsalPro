import DropdownMenu from "./component/DropdownMenu";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";

function NavbarComp() {
  const menu = [
    {
      label: "home",
      type: "simple",
    },
    {
      label: "about",
      type: "simple",
    },
    {
      label: "pages",
      type: "dropdown",
      submenu: ["option 1", "option 2"],
    },
    {
      label: "services",
      type: "dropdown",
      submenu: ["option 1", "option 2"],
    },
    {
      label: "projects",
      type: "simple",
    },
    {
      label: "blog",
      type: "dropdown",
      submenu: ["option 1", "option 2"],
    },
  ];
  const [navPosition, setNavPosition] = useState(false);
  const [sideMenu, setSideMenu] = useState(false);
  const sideMenuHandler = () => {
    setSideMenu(!sideMenu);
  };
  const scrollHandler = () => {
    if (window.scrollY > 100) {
      setNavPosition(true);
    } else {
      setNavPosition(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
  }, []);
  return (
    <>
      <div
        className={`w-full flex px-12 z-[100] py-4  justify-between items-center pt-20  h-[70px] ${
          navPosition
            ? ` ${
                sideMenu ? "" : "bounce-once"
              }  fixed bg-black z-[100] top-0 shadow-lg pb-10 h-[80px]"`
            : " relative"
        }`}
      >
        <img
          src="./images/Logo.png"
          className=" w-[15%] min-w-[120px] "
          alt="logo"
        />
        <ul
          className={`text-white  flex w-[50%] font-[400] text-[1.8rem] capitalize justify-evenly items-center gap-2 max-md:w-[100vw] transition-all duration-500 ease-in-out max-md:h-[100vh] max-md:bg-black max-md:z-50 max-md:animate-none max-md:fixed max-md:top-0 max-md:flex-col ${
            !sideMenu ? " right-[-100%]" : "right-0"
          } `}
        >
          <h6
            className="absolute top-20 md:hidden cursor-pointer left-32 text-[20px]"
            onClick={sideMenuHandler}
          >
            x
          </h6>
          {menu.map((item) => {
            return (
              <>
                {item.type == "dropdown" ? (
                  <DropdownMenu data={item} />
                ) : (
                  <Button
                    onClick={sideMenuHandler}
                    style={{
                      backgroundColor: "transparent",
                      fontWeight: "400",
                      fontSize: "1.8rem",
                      textTransform: "capitalize",
                      color: "white",
                      padding: "0px",
                    }}
                    key={item.label}
                  >
                    {item.label}
                  </Button>
                )}
              </>
            );
          })}
        </ul>
        <img
          width={16}
          src="./icons/Menu.svg"
          className="mr-20 cursor-pointer"
          alt=""
          onClick={() => {
            sideMenuHandler();
          }}
        />
      </div>
    </>
  );
}

export default NavbarComp;
