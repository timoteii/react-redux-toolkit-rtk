import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import FavoutitePages from "./pages/FavouritesPages";
import HomePage from "./pages/HomePage";


function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favourites" element={<FavoutitePages />} />
      </Routes>
    </>
  );
}

export default App;
