import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { MdGroup } from "react-icons/md";
import "./App.css";
import Movie from "./pages/Movie";
import Profile from "./pages/Profile";
import Book from "./pages/Book";
import Game from "./pages/Game";
import Movie1 from "./details/Movie1";
import Book1 from "./details/Book1";
import Game1 from "./details/Game1";

import { Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <header>
        <p id="titleGroup">Tugas - Kelompok 19</p>
      </header>
      <Routes>
        <Route path="/Book" element={<Book />} />
        <Route path="/Game" element={<Game />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Movie1" element={<Movie1 />} />
        <Route path="/Book1" element={<Book1 />} />
        <Route path="/Game1" element={<Game1 />} />
        <Route path="/" element={<Navigate to="/movie" replace={true} />} /> {/*arahkan path "/" ke /movie*/}
      </Routes>
      <footer>
        <NavLink to="/movie" className="iconWrapper">
          <HiHome className="icon" /> Movie
        </NavLink>

        <NavLink to="/Book" className="iconWrapper">
          <MdGroup className="icon" /> Book
        </NavLink>
        <NavLink to="/Game" className="iconWrapper">
          <MdGroup className="icon" /> Game
        </NavLink>
        <NavLink to="/Movie1" className="iconWrapper">
          <MdGroup className="icon" /> Detail Movie
        </NavLink>
        <NavLink to="/Book1" className="iconWrapper">
          <MdGroup className="icon" /> Detail Book
        </NavLink>
        <NavLink to="/Game1" className="iconWrapper">
          <MdGroup className="icon" /> Detail Game
        </NavLink>
        <NavLink to="/profile" className="iconWrapper">
          <MdGroup className="icon" /> Profile
        </NavLink>
      </footer>
    </BrowserRouter>
  );
}

export default App;
