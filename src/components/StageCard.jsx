import { useDispatch } from "react-redux";
import {
  updateOrderEndTime,
  updateOrderStatus,
} from "../store/slices/orderSlice";

const StageCard = ({ order, next }) => {
  const dispatch = useDispatch();
  const handleNext = () => {
    dispatch(updateOrderStatus({ orderId: order.id, newStatus: next }));
    if (next === "ready") {
      dispatch(
        updateOrderEndTime({
          orderId: order.id,
          newEndTime: new Date().getTime(),
        })
      );
    }
  };

  return (
    <div className="w-full p-3 border border-pizza-500 text-center space-y-3 rounded-sm">
      <h4 className="line-clamp-1 text-sm uppercase">
        Order-{order.id.slice(0, 6)}
      </h4>
      <p className="text-xs "> Time</p>
      {order.status === "picked" ? (
        ""
      ) : (
        <button
          onClick={handleNext}
          className="bg-pizza-600 hover:bg-pizza-500 p-2 px-5  text-xs text-white rounded-sm outline-none animate"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default StageCard;
