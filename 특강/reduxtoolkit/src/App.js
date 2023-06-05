import { useSelector,useDispatch } from "react-redux";
import { addCount, changeName, subCount } from "./store/userSlice.js";

function App() {

  let state = useSelector((state)=>{
    return state
  })
  console.log(state.user)
  console.log(state.user2);
  let dispatch =  useDispatch();

  return (
    <div>
      <button onClick={()=>{
          dispatch(changeName())
      }}>이름바꿔</button>

      <h1>{state.user2[0].count}</h1>

      <button onClick={()=>{
          dispatch(addCount(0))
      }}>++</button>
      <button onClick={()=>{
          dispatch(subCount(0))
      }}>--</button>
    </div>
  );
}
export default App;
