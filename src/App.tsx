import { useDispatch } from "react-redux"
import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";


function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);

  const handelIncrement = () => {
    dispatch(increment())
  };

  const handelDecrement = () => {
    dispatch(decrement())
  }

  return (
    <div>
      <h1>Counter With Redux</h1>
      <button onClick={handelIncrement}>Increment </button>
      <div>{count}</div>
      <button onClick={handelDecrement}>Decrement</button>
    </div>
  )
}

export default App
