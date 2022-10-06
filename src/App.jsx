import "./App.css";
import AnimeCards from "./components/AnimeCards/SearchAnimeCards";
import NavbarAP from "./components/Navbar/Navbar";
import "./components/AnimeCards/styles.Cards.css";
import { RelatedTxt } from "./components/Carousels/Slideshow";
import Carousel from "./components/Carousels/Carousel";
import SlideshowGenres from "./components/Carousels/SlideshowGenres";
import Footer from "./components/FooterBar/Footer";
import {useEffect, useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
const [searching, setSearching] = useState(false);
const [searchValue, setSearchValue] = useState('');


  return (
    <>
      <NavbarAP searchValue={setSearchValue} searching={setSearching}/>

     {
         searching ? (
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
         )
     }
      

      
      <Footer/>
    </>
  );
}

export default App;
