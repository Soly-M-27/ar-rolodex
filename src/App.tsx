import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Login, Home, SignUp, Create, Aframe } from "./pages";
import { Navbar, SidebarNav } from "./components";
import { SidebarProvider } from "./context/SidebarContext";

function App() {
  return (
    <>
      <SidebarProvider>
        <BrowserRouter>
          <Navbar />
          <SidebarNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Create" element={<Create />} />
            <Route path="/Aframe" element={<Aframe />} />
          </Routes>
        </BrowserRouter>
      </SidebarProvider>
    </>
  );
}

export default App;
