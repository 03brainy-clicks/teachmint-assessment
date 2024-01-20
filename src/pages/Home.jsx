import { useState } from "react";
import Dropdown from "../components/utils/DropDown";
import Pizza from "./../assets/pizza-small.png";
import { addOrder } from "../store/slices/orderSlice";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  // State for pizza type, size, base, and error handling
  const [pizzaType, setPizzaType] = useState("");
  const [pizzaSize, setPizzaSize] = useState("");
  const [pizzaBase, setPizzaBase] = useState("");
  const [error, setError] = useState(false);

  // Options for dropdowns
  const type = ["Veg", "Non-veg"];
  const size = ["Small", "Medium", "Large"];
  const base = ["Thin", "Thick"];

  // Redux dispatch function
  const dispatch = useDispatch();

  // Function to reset pizza options
  const handleReset = () => {
    setPizzaBase("");
    setPizzaSize("");
    setPizzaType("");
  };

  // Function to handle pizza order
  const handleOrder = (e) => {
    e.preventDefault();
    setError(false);

    // Check if all pizza options are selected
    if (pizzaBase && pizzaSize && pizzaType) {
      const newOrder = {
        type: pizzaType,
        size: pizzaSize,
        base: pizzaBase,
        startTime: new Date().getTime(),
        endTime: "",
        status: "order",
        id: uuidv4(),
      };

      dispatch(addOrder(newOrder));
      handleReset();
    } else {
      setError(true);
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center overflow-hidden p-5">
      <div className="text-center mx-auto space-y-5 pb-7">
        <h1 className="text-4xl text-pizza-600 font-bold">
          A pizza a day, keeps the sadness away.
        </h1>
        <div>
          <img src={Pizza} alt="" className="w-64 mx-auto" />
        </div>
        <div className="space-y-4">
          <p className="text-lg text-pizza-600 font-medium">
            Select a perfect pizza by adding to cart
          </p>
          {/* Dropdowns for selecting pizza options */}
          <div className="flex flex-col sm:flex-row items-center gap-5 justify-center">
            <div className="w-40">
              <Dropdown
                options={type}
                onSelect={setPizzaType}
                select={pizzaType}
                placeholder={"Select Pizza Type"}
              />
            </div>
            <div className="w-40">
              <Dropdown
                options={size}
                onSelect={setPizzaSize}
                select={pizzaSize}
                placeholder={"Select Pizza Size"}
              />
            </div>
            <div className="w-40">
              <Dropdown
                options={base}
                onSelect={setPizzaBase}
                select={pizzaBase}
                placeholder={"Select Pizza Base"}
              />
            </div>
          </div>
          {/* Error message if pizza options are not selected */}
          {error && (
            <p className="text-red-500 text-xs font-medium">
              Invalid input please configure your pizza
            </p>
          )}
          {/* Button to place the pizza order */}
          <div className="flex items-center gap-5 justify-center pt-2">
            <div className="w-40">
              <button
                onClick={handleOrder}
                className="bg-pizza-600 hover:bg-pizza-500 p-3 w-full text-sm text-white rounded-sm outline-none transition-colors duration-300"
              >
                Order now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
