import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import ListLaptop from "./pages/Laptop/ListLaptop";
import AddLaptop from "./pages/Laptop/AddLaptop";
import EditLaptop from "./pages/Laptop/EditLaptop";

function App() {
  return (
    <>
      <div className="container-fluid">
        <Routes>
          <Route path={"home"} element={<Home></Home>}>
            <Route path={""} element={<ListLaptop />}></Route>
            <Route path={"add-laptop"} element={<AddLaptop />}></Route>
            <Route path={"edit-laptop/:id"} element={<EditLaptop />}></Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
