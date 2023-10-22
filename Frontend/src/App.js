import "./App.css";
import { Route, Routes } from "react-router-dom";
import LeetcodeRouters from "./Routers/LeetcodeRouters";
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/*" element={<LeetcodeRouters />}></Route>
      </Routes>
    </div>
  );
}

export default App;
