import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  updateOrderEndTime,
  updateOrderStatus,
  updateOrderElapsedTime,
} from "../store/slices/orderSlice";
import useStopWatch from "./utils/hooks/useStopWatch";
import StopWatch from "./utils/StopWatch";

const StageCard = ({ order, next }) => {
  const dispatch = useDispatch();
  const { totalTime, stopStopwatch } = useStopWatch(order.elapsedTime);
  const handleNext = useCallback(() => {
    dispatch(updateOrderStatus({ orderId: order.id, newStatus: next }));
    if (next === "ready") {
      dispatch(
        updateOrderEndTime({
          orderId: order.id,
          newEndTime: new Date().getTime(),
        })
      );
    }
    dispatch(
      updateOrderElapsedTime({
        orderId: order.id,
        newElapsedTime: new Date().getTime(),
      })
    );
  }, [dispatch, order.id, next]);

  return (
    <div
      className={`w-full p-3 border ${
        totalTime > 180 && order.status !== "picked"
          ? "bg-red-500 border-red-500 text-white"
          : "border-pizza-500 text-gray-700"
      } text-center space-y-3 rounded-sm `}
    >
      <h4 className="line-clamp-1 text-sm uppercase">
        Order-{order.id.slice(0, 6)}
      </h4>
      <p className="text-xs">
        {order.status === "picked" ? (
          <span> PICKED</span>
        ) : (
          <>
            <StopWatch startTime={order.elapsedTime} status={order.status} />
          </>
        )}
      </p>
      {order.status === "picked" ? (
        ""
      ) : (
        <button
          onClick={handleNext}
          className={`${
            totalTime > 180
              ? "bg-white text-red-600"
              : "bg-pizza-600 hover:bg-pizza-500 text-white"
          }  p-2 px-5 text-xs  rounded-sm outline-none animate`}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default StageCard;
