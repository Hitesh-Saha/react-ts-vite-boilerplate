import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../store/slices/CounterSlice";
import { RootState } from "../../store/store";
const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex flex-col p-4 gap-4">
        <div>
          <h1 className="text-center text-blue-700 text-2xl">Count is { count }</h1>
        </div>
        <div className="flex flex-row gap-4 justify-center items-center">
          <button
            onClick={() => dispatch(increment())}
            className="border border-blue-700 rounded-xl p-2 text-sm uppercase font-semibold w-36 h-12"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch(decrement())}
            className="border border-blue-700 rounded-xl p-2 text-sm uppercase font-semibold w-36 h-12"
          >
            Decrement
          </button>
        </div>

        <p>
          Edit <code>src/pages/HomePage/Homepage.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
};

export default Counter;
