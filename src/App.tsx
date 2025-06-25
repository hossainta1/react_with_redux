
import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";


function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);

  const handelIncrement = (amount: number) => {
    dispatch(increment(amount))
  };

  const handelDecrement = () => {
    dispatch(decrement())
  }

  return (
    <div>
      <h1>Counter With Redux</h1>
      <button onClick={() => handelIncrement(5)}>Increment By 5 </button>
      <button onClick={() => handelIncrement(1)}>Increment By 1 </button>
      <div>{count}</div>
      <button onClick={handelDecrement}>Decrement</button>
    </div>
  )
}

export default App
