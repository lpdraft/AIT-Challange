import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Register, Login, TrendingGifs } from "./pages";
import { Toaster } from "react-hot-toast";

// import { NavBar } from "./components";
import { PublicRoute, PrivateRoute } from "./routes";

function App() {
  // const {loading}
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />

          <Route
            path="/trend"
            element={
              <PrivateRoute>
                <TrendingGifs />
              </PrivateRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
