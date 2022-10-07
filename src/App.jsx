import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AnimeCards from "./components/AnimeCards/SearchAnimeCards";
import "./components/AnimeCards/styles.Cards.css";
import Carousel from "./components/Carousels/Carousel";
import { RelatedTxt } from "./components/Carousels/Slideshow";
import SlideshowGenres from "./components/Carousels/SlideshowGenres";
import CharactersCards from "./components/CharactersCards/CharactersCards";
import Footer from "./components/FooterBar/Footer";
import MangaCards from "./components/MangaCards/MangaCards";
import NavbarAP from "./components/Navbar/Navbar";

function App() {
  const [searching, setSearching] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/home/manga"
            element={
              <>
                <NavbarAP
                  searchValue={setSearchValue}
                  searching={setSearching}
                />
                {searching ? (
                  <AnimeCards searchValue={searchValue}></AnimeCards>
                ) : (
                  <>
                    <MangaCards></MangaCards>
                  </>
                )}

                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/home"
            element={
              <>
                <NavbarAP
                  searchValue={setSearchValue}
                  searching={setSearching}
                />
                {searching ? (
                  <AnimeCards searchValue={searchValue}></AnimeCards>
                ) : (
                  <>
                    <div className="carouselContainer">
                      <RelatedTxt>Most viewed content</RelatedTxt>
                      <Carousel />
                    </div>
                    <br />
                    <RelatedTxt>Anime Picks</RelatedTxt>
                    <SlideshowGenres />
                  </>
                )}

                <Footer />
              </>
            }
          ></Route>
           <Route
            path="/"
            element={
              <>
                <NavbarAP
                  searchValue={setSearchValue}
                  searching={setSearching}
                />
                {searching ? (
                  <AnimeCards searchValue={searchValue}></AnimeCards>
                ) : (
                  <>
                    <div className="carouselContainer">
                      <RelatedTxt>Most viewed content</RelatedTxt>
                      <Carousel />
                    </div>
                    <br />
                    <RelatedTxt>Anime Picks</RelatedTxt>
                    <SlideshowGenres />
                  </>
                )}

                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/home/characters"
            element={
              <>
                <NavbarAP
                  searchValue={setSearchValue}
                  searching={setSearching}
                />

                {searching ? (
                  <AnimeCards searchValue={searchValue}></AnimeCards>
                ) : (
                  <>
                    <CharactersCards></CharactersCards>
                  </>
                )}

                <Footer />
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
