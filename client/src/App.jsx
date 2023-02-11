import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PublicRoute, PrivateRoute } from "./routes";

import {
  Home,
  Register,
  Login,
  TrendingGifs,
  Profile,
  CategoryAnimes,
  RandomGifs,
  UploadGifs,
} from "./pages";
import { EditProfile } from "./components";

import { Toaster } from "react-hot-toast";
import { Form } from "./pages/Form";

function App() {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        {/* Home */}
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />

          {/* Prueba */}
          <Route
            path="/form"
            element={
              <PrivateRoute>
                <Form />
              </PrivateRoute>
            }
          />

          <Route
            path="/upload/:idUser"
            element={
              <PrivateRoute>
                <UploadGifs />
              </PrivateRoute>
            }
          />

          {/* Profile */}
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          {/* EditProfile */}
          <Route
            path="/edit-profile/:userId"
            element={
              <PrivateRoute>
                <EditProfile />
              </PrivateRoute>
            }
          />
          {/* Trending */}
          <Route
            path="/trend"
            element={
              <PrivateRoute>
                <TrendingGifs />
              </PrivateRoute>
            }
          />

          {/* Random */}
          <Route
            path="/random"
            element={
              <PrivateRoute>
                <RandomGifs />
              </PrivateRoute>
            }
          />

          {/* Categories */}
          <Route
            path="/categories/animes"
            element={
              <PrivateRoute>
                <CategoryAnimes />
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
