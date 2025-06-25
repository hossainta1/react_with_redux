import { useDispatch } from "react-redux"
import { decrement, increment } from "./redux/features/counter/counterSlice";


function App() {
  const dispatch = useDispatch();

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
      <div>0</div>
      <button onClick={handelDecrement}>Decrement</button>
      <div>0</div>
    </div>
  )
}

export default App
