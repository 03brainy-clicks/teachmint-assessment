import { useSelector } from "react-redux";
import StageCard from "../components/StageCard";

const Stage = () => {
  const orders = useSelector((state) => state.orders.orders);
  return (
    <div className="w-full h-screen overflow-hidden py-5">
      <div className="sm:w-11/12 sm:mx-auto flex gap-4  h-full  overflow-x-auto mx-5">
        <div className="flex-1 h-full overflow-hidden min-w-60">
          <h3 className="font-bold text-sm text-center text-pizza-600">Order Placed</h3>
          <div className="pb-12 mt-5 space-y-4 h-full  overflow-hidden overflow-y-auto ">
            {orders.map((order) => {
              if (order.status === "order") {
                return (
                  <StageCard order={order} key={order.id} next={"making"} />
                );
              }
            })}
          </div>
        </div>{" "}
        <div className="flex-1 h-full overflow-hidden min-w-60">
          <h3 className="font-bold text-sm text-center text-pizza-600">Order Making</h3>
          <div className="pb-12 mt-5 space-y-4 h-full  overflow-hidden overflow-y-auto ">
            {orders.map((order) => {
              if (order.status === "making") {
                return (
                  <StageCard order={order} key={order.id} next={"ready"} />
                );
              }
            })}
          </div>
        </div>{" "}
        <div className=" flex-1 h-full overflow-hidden min-w-60">
          <h3 className="font-bold text-sm text-center text-pizza-600">Order Ready</h3>
          <div className="pb-12 mt-5 space-y-4 h-full  overflow-hidden overflow-y-auto ">
            {orders.map((order) => {
              if (order.status === "ready") {
                return (
                  <StageCard order={order} key={order.id} next={"picked"} />
                );
              }
            })}
          </div>
        </div>{" "}
        <div className=" flex-1 h-full overflow-hidden min-w-60">
          <h3 className="font-bold text-sm text-center text-pizza-600">Order Picked</h3>
          <div className="pb-12 mt-5 space-y-4 h-full  overflow-hidden overflow-y-auto ">
            {orders.map((order) => {
              if (order.status === "picked") {
                return <StageCard order={order} key={order.id} next={""} />;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stage;
