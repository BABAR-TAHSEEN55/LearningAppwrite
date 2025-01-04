import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notes from "./Pages/Notes";
import Login from "./Pages/Login";

const App = () => {
  return (
    <div id="app" data-theme="dark">
      <div id="container">
        <BrowserRouter>
          <Routes>
            <Route element={<Notes />} path="/"></Route>
            <Route element={<Login />} path="/Login"></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
