import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Login, Home, SignUp } from "./pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes >
          <Route path='/' element={<Home />}/>
          <Route path='/Login' element={<Login />}/>
          <Route path='/SignUp' element={<SignUp />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
