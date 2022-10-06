import React, { useRef, useEffect } from "react";
import { ReactComponent as LeftArrow } from "../../assets/LeftArrow.svg";
import { ReactComponent as RightArrow } from "../../assets/RightArrow.svg";
import styled from "styled-components";
import "./styles.Carousel.css";

const Slideshow = ({
  children,
  controls = true,
  autoplay = true,
  speed = "500",
  interval = "5000",
}) => {
  const slideshow = useRef(null);
  const intervalSlideshow = useRef(null);

  const nextPic = () => {
    if (slideshow.current.children.length > 0) {
      const firstElement = slideshow.current.children[0];

      slideshow.current.style.transition = `${speed}ms ease-out all`;

      const slideSize = slideshow.current.children[0].offsetWidth;

      slideshow.current.style.transform = `translateX(-${slideSize}px)`;

      const transition = () => {
        slideshow.current.style.transition = "none";
        slideshow.current.style.transform = `translateX(0)`;

        slideshow.current.appendChild(firstElement);

        slideshow.current.removeEventListener("transitionend", transition);
      };

      slideshow.current.addEventListener("transitionend", transition);
    }
  };

  const previousPic = () => {
    if (slideshow.current.children.length > 0) {
      const index = slideshow.current.children.length - 1;
      const lastElement = slideshow.current.children[index];

      slideshow.current.insertBefore(lastElement, slideshow.current.firstChild);

      slideshow.current.style.transition = "none";

      const slideSize = slideshow.current.children[0].offsetWidth;

      slideshow.current.style.transform = `translateX(-${slideSize}px)`;

      setTimeout(() => {
        slideshow.current.style.transition = `${speed}ms ease-out all`;

        slideshow.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };

  useEffect(() => {
    if (autoplay) {intervalSlideshow.current = setInterval(() => {
      nextPic();
    }, interval);

    // slideshow.current.addEventListener("mouseenter", () => {
    //   clearInterval(intervalSlideshow.current);
    //   console.log(intervalSlideshow.current);
    // })

    // slideshow.current.addEventListener("mouseleave", () => {
    //   intervalSlideshow.current = setInterval(() => {
    //     nextPic();
    //   })
    // });
  }}, [autoplay, interval, nextPic]);

  return (
    <main>
      <MainContainer>
        <SlideshowContainer ref={slideshow}>{children}</SlideshowContainer>
        {controls && <Controls>
          <ArrowButton onClick={previousPic}>
            <LeftArrow />
          </ArrowButton>
          <ArrowButton onClick={nextPic} right>
            <RightArrow />
          </ArrowButton>
        </Controls>}
      </MainContainer>
    </main>
  );
};

const RelatedTxt = styled.div`
display: flex;
font-size: 24px;
margin-top: 10px;
font-family: 'Poppins', sans-serif;
font-weight: 700;
text-transform: uppercase;
color: white;
align-items: center;
justify-content: center;
`

const MainContainer = styled.div`
  position: relative;
`;
const SlideshowContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;
const Slide = styled.div`
  min-width: 100%;
  overflow: hidden;
  transition: all ease 0.3s;
  z-index: 10;
  max-height: 480px;
  position: relative;

  img {
    width: 100%;
    vertical-align: top;
  }
`;
const SlideText = styled.div`
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    width: 100%;
    padding: 10px 0px;
    text-align: center;
    position: absolute;
    bottom: 0;

    @media screen and (max-width: 700px) {
        position: relative;
`;

const Controls = styled.div`
  position: absolute;
  top: 0;
  z-index: 20;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;
const ArrowButton = styled.button`
  pointer-events: all;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  width: 50px;
  height: 100%;
  text-align: center;
  position: absolute;
  transition: all 0.3s ease;
  // &:hover {
  //     background: rgba(0,0,0,0.3);
  //     path {
  //         fill: #fff;
  //     }
  // }

  path {
    filter: ${(props) =>
      props.right
        ? "drop-shadow(-2px 0px 0px #fff)"
        : "drop-shadow(2px 0px 0px #fff)"};
  }

  ${(props) => (props.right ? "right: 0" : "left: 0")}
`;

export { Slideshow, SlideText, Slide, RelatedTxt };
