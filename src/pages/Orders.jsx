import { useSelector, useDispatch } from "react-redux";
import { cancelOrder } from "../store/slices/orderSlice";
import TimeDifference from "../components/utils/TimeDifference";

const Orders = () => {
  const orders = useSelector((state) => state.orders.orders);
  const dispatch = useDispatch();

  const handleCancelOrder = (orderId) => {
    dispatch(cancelOrder(orderId));
  };

  return (
    <div className="w-full h-screen overflow-hidden py-5">
      <div className="sm:w-11/12 mx-auto h-full overflow-hidden overflow-y-scroll sm:p-0 px-5">
        <span className="font-medium text-sm">
          Total order delivered - &nbsp;
          <span className="text-pizza-600">
            0{orders.filter((item) => item.status === "picked").length}
          </span>
        </span>
        <div className="overflow-x-auto  py-3 ">
          <table className="w-full table-fixed border border-pizza-600 h-full rounded-sm  min-w-[40rem]">
            <thead className="text-left text-sm font-medium text-pizza-600 border border-pizza-600">
              <tr>
                <th className="px-4 py-2">Orders</th>
                <th className="px-4 py-2">Stage</th>
                <th className="px-4 py-2">Total Time</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm space-y-3 text-gray-600">
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="line-clamp-1 px-4 py-2 ">
                    Order-{order.id.slice(0, 6)}
                  </td>
                  <td className="px-4 py-2 uppercase">{order.status}</td>
                  <td className="px-4 py-2">{order.endTime ? <TimeDifference startTimestamp={order.startTime}  endTimestamp={order.endTime}/> : "In progress"}</td>
                  <td className="px-4 py-2">
                    {["ready", "picked"].includes(order.status) ? (
                      ""
                    ) : (
                      <button
                        onClick={() => handleCancelOrder(order.id)}
                        className="bg-red-600 hover:bg-red-500 p-2 px-5 text-xs text-white rounded-sm outline-none animate"
                      >
                        Cancel
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
