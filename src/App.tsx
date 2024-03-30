import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Login, Home, SignUp } from "./pages";
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
          </Routes>
        </BrowserRouter>
      </SidebarProvider>
    </>
  );
}

export default App;
