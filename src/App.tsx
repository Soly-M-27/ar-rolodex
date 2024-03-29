import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Login, Home, SignUp, Dashboard } from "./pages";
import { Navbar } from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/*!user && <Sidebar ...>...</Sidebar>*/}
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
