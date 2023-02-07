import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardGifs, Register, Login } from "./pages";
import { NavBar } from "./components";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<DashboardGifs />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
