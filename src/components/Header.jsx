import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircleOutlined";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotificationsOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import SideNav from "./SideNav";
import Button from "@mui/material/Button";
const Header = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <header className="px-7 grid grid-cols-2 gap-4 items-center p-5 bg-slate-200/50">
      {/* left */}
      <section className="">
        <h1 class="text-2xl text-[--primary-text-color]">Name</h1>
      </section>
      {/* right */}
      <section className="grid grid-cols-4 w-full gap-4 content-end items-center">
        
        {/* profile */}
        <div className="justify-self-end space-x-5  col-span-4 text-[--primary-font-color]">
          <AccountCircleIcon fontSize="large" className="cursor-pointer" />
          <CircleNotificationsIcon
            fontSize="large"
            className="cursor-pointer"
          />
          <ShoppingCartIcon
            fontSize="large"
            className="cursor-pointer"
            onClick={toggleDrawer("right", true)}
          />
        </div>
      </section>
      <SideNav state={state} setState={setState} toggleDrawer={toggleDrawer} />
    </header>
  );
};

export default Header;
