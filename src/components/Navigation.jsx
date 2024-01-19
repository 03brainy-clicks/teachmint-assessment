import {
  ShoppingCartIcon,
  Bars3BottomLeftIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  const menuItems = ["home", "orders", "stage"];

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className=" w-screen ">
      <div className="w-11/12  py-5 mx-auto flex  items-center justify-between">
        <div className="logo flex-1">
          <h2 className="text-3xl text-pizza-600 font-bold">PizzaPapa</h2>
        </div>

        <ul className=" flex-1 text-sm text-gray-600 md:flex gap-5 items-center justify-center hidden">
          {menuItems.map((item) => (
            <li
              key={item}
              onClick={() => setActive(item)}
              className={`menu ${
                active === item
                  ? "text-pizza-600 border-pizza-600"
                  : "border-transparent"
              }`}
            >
              <Link to={`/${item}`}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        <div className="md:flex flex-1 items-center gap-5 justify-end hidden">
          <Link to={"/orders"}>
            <ShoppingCartIcon
              onClick={() => setActive("orders")}
              className="text-pizza-600 w-6 h-6 cursor-pointer"
            />
          </Link>
        </div>

        <div className="flex flex-1 items-center gap-5 justify-end md:hidden">
          <Bars3BottomLeftIcon
            onClick={handleOpen}
            className="text-pizza-600 w-6 h-6 cursor-pointer"
          />
        </div>

        {open && (
          <div className="fixed top-0 left-0 w-screen p-7 bg-white h-screen animate flex items-center justify-center z-50">
            <XMarkIcon
              onClick={handleOpen}
              className="hover:text-red-600 text-gray-500 w-6 h-6 cursor-pointer ml-auto absolute top-7 right-7"
            />

            <ul className=" flex-1 text-sm text-gray-600 flex flex-col gap-5 items-center justify-center ">
              {menuItems.map((item) => (
                <li
                  key={item}
                  onClick={() => {
                    setActive(item);
                    handleOpen();
                  }}
                  className={`menu ${
                    active === item
                      ? "text-pizza-600 border-pizza-600"
                      : "border-transparent"
                  }`}
                >
                  <Link to={`/${item}`}>
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navigation;
