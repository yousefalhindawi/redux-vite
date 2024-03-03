import { useDispatch, useSelector } from "react-redux";
import { addCount, removeCount } from "../redux/count/count.actions";
const Home = () => {
  const countState = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const addHandler = () => dispatch(addCount());
  const removeHandler = () => dispatch(removeCount());
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={addHandler}>Add</button>
        <button onClick={removeHandler}>Remove</button>
        count is {countState.count}
      </div>
    </>
  );
};

export default Home;
