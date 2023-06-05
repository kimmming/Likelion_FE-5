import { useSelector,useDispatch } from "react-redux";
import { changeAge, changeName } from "./store.js";

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
      <button onClick={()=>{
          dispatch(changeAge())
      }}>나이올려</button>
    </div>
  );
}
export default App;
