import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { Movie } from "./pages/Movie";
import { HomeLayout } from "./pages/HomeLayout";
import { AccountLayout } from "./pages/AccountLayout";
import { Dashboard } from "./pages/Dashboard";
import { Profile } from "./pages/Profile";
import { State } from "./pages/State";
import { Login } from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:movieID" element={<Movie />} />
        </Route>

        <Route path="/state" element={<State />} />
        <Route path="/login" element={<Login />} />

        <Route path="account" element={<AccountLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
