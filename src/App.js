import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";

import ListTour from "./pages/Tour/ListTour";
import AddTour from "./pages/Tour/AddTour";
import EditTour from "./pages/Tour/EditTour";

function App() {
  return (
    <>
      <div className="container-fluid">
        <Routes>
          <Route path={"home"} element={<Home></Home>}>
            <Route path={""} element={<ListTour />}></Route>
            <Route path={"add-tour"} element={<AddTour />}></Route>
            <Route path={"edit-tour/:id"} element={<EditTour />}></Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
