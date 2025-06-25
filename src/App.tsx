import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./redux/features/counter/counterSlice";


function App() {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);

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
