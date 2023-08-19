import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { getUser, selectUsers } from "./usersSlice";

function App() {
  const [text, setText] = useState("");
  const users = useSelector(selectUsers);
  const error = useSelector((state) => state.users.isError);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Title</h1>

      <button onClick={() => dispatch(getUser())}>Fetch data</button>

      <div>
        <h2>Value</h2>
        <div>Error: {JSON.stringify(error)}</div>
        {JSON.stringify(users)}
      </div>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => dispatch(getUser())}>Add user</button>
    </>
  );
}

export default App;
