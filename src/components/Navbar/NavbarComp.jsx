import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import DropdownMenu from "./component/DropdownMenu";
import { Button } from "@mui/material";

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

  return (
    <>
      <div className="w-full flex px-12 z-[1] py-4 sticky justify-between items-center pt-20  h-[70px] ">
        <img src="./images/Logo.png" className=" w-[15%] min-w-[120px] " alt="logo" />
        <ul className="text-white max-md:hidden flex w-[50%] font-[400] text-[1.8rem] capitalize justify-evenly items-center gap-2">
          {menu.map((item) => {
            return (
              <>
                {item.type == "dropdown" ? (
                  <DropdownMenu data={item} />
                ) : (
                  <Button
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
        <AccessAlarmIcon />
      </div>
    </>
  );
}

export default NavbarComp;
