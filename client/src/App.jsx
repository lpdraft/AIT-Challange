import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import { Home, Register, Login, TrendingGifs } from "./pages";
import { Toaster } from "react-hot-toast";
=======
import { Home, Register, Login, Profile } from "./pages";
import { EditProfile } from "./components";
>>>>>>> testing

import { PublicRoute, PrivateRoute } from "./routes";
import { Toaster } from "react-hot-toast";

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
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />

          <Route
            path="/edit-profile/:userId"
            element={
              <PrivateRoute>
                <EditProfile />
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

<<<<<<< HEAD
          <Route
            path="/trend"
            element={
              <PrivateRoute>
                <TrendingGifs />
              </PrivateRoute>
            }
          />
=======
>>>>>>> testing
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
