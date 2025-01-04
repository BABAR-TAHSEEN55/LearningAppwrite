import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notes from "./Pages/Notes";
import Login from "./Pages/Login";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Notes />} path="/"></Route>
          <Route element={<Login />} path="/Login"></Route>
        </Routes>
      </BrowserRouter>
      )
    </>
  );
};

export default App;
