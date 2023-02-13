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
  CategoryAnimals,
} from "./pages";
import { EditProfile, GifInfo, UserGifs } from "./components";

import { Toaster } from "react-hot-toast";
import { Form } from "./pages/Form";
import { CategoryCelebrities } from "./pages/categories/CategoryCelebrities";

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
            path="/upload/:userId"
            element={
              <PrivateRoute>
                <UploadGifs />
              </PrivateRoute>
            }
          />
          <Route
            path="/list"
            element={
              <PrivateRoute>
                <UserGifs />
              </PrivateRoute>
            }
          />
          <Route
            path="/gif-info/:id"
            element={
              <PrivateRoute>
                <GifInfo />
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
            path="/categories/animals"
            element={
              <PrivateRoute>
                <CategoryAnimals />
              </PrivateRoute>
            }
          />
          <Route
            path="/categories/celebrities"
            element={
              <PrivateRoute>
                <CategoryCelebrities />
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
