import React from 'react'
import img1 from "../../assets/AOT1280X720.jpeg";
import img2 from "../../assets/EVANGELION1280X720.jpeg";
import img3 from "../../assets/NARUTO1280X720.jpeg";
import img4 from "../../assets/OP1280X720.jpeg";
import img5 from "../../assets/MHA1280X720.jpg";
import { Slideshow, SlideText, Slide } from "./Slideshow";

const Carousel = () => {
  return (
    <>
    <Slideshow>
    <Slide>
      <a
        target="_blank"
        href="https://myanimelist.net/anime/16498/Shingeki_no_Kyojin"
      >
        <img src={img1} alt="" />
      </a>
      <SlideText>
        <p>Attack On Titan: Final Battle</p>
      </SlideText>
    </Slide>
    <Slide>
      <a
        target="_blank"
        href="https://myanimelist.net/anime/30/Neon_Genesis_Evangelion?q=neon%20&cat=anime"
      >
        <img src={img2} alt="" />
      </a>
      <SlideText>
        <p>Neon Genesis Evangelion</p>
      </SlideText>
    </Slide>
    <Slide>
      <a target="_blank" href="https://myanimelist.net/anime/20/Naruto">
        <img src={img3} alt="" />
      </a>
      <SlideText>
        <p>Naruto</p>
      </SlideText>
    </Slide>
    <Slide>
      <a
        target="_blank"
        href="https://myanimelist.net/anime/21/One_Piece"
      >
        <img src={img4} alt="" />
      </a>
      <SlideText>
        <p>One Piece</p>
      </SlideText>
    </Slide>
    <Slide>
      <a
        target="_blank"
        href="https://myanimelist.net/anime/31964/Boku_no_Hero_Academia?q=my%20hero%20academia&cat=anime"
      >
        <img src={img5} alt="" />
      </a>
      <SlideText>
        <p>My Hero Academia</p>
      </SlideText>
    </Slide>
  </Slideshow>
    </>
  )
}


export default Carousel