import React from "react";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./styles.Carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.Carousel.css";
import styled from "styled-components";
import { Pagination, Navigation } from "swiper";

const SlideshowGenres = () => {
  const [animeGenre1, setAnimeGenre1] = useState([]);
  const [animeGenre2, setAnimeGenre2] = useState([]);
  const [animeGenre3, setAnimeGenre3] = useState([]);
  const [animeGenre4, setAnimeGenre4] = useState([]);
  const [animeGenre5, setAnimeGenre5] = useState([]);
  const [animeGenre6, setAnimeGenre6] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get("https://api.jikan.moe/v4/anime?genres=1&limit=21")
        .then(function (response) {
          const AnimeData = response.data.data;
          // const AnimeData = Object.entries(response.data.data);
          // handle success
          setAnimeGenre1(AnimeData);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });

      axios
        .get("https://api.jikan.moe/v4/anime?genres=4&limit=21")
        .then(function (response) {
          const AnimeData = response.data.data;
          // const AnimeData = Object.entries(response.data.data);
          // handle success
          setAnimeGenre2(AnimeData);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });

      axios
        .get("https://api.jikan.moe/v4/anime?genres=14&limit=21")
        .then(function (response) {
          const AnimeData = response.data.data;
          // const AnimeData = Object.entries(response.data.data);
          // handle success
          setAnimeGenre3(AnimeData);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }, [1500]);

    setTimeout(() => {
      axios
        .get("https://api.jikan.moe/v4/anime?genres=30&limit=21")
        .then(function (response) {
          const AnimeData = response.data.data;
          // const AnimeData = Object.entries(response.data.data);
          // handle success
          setAnimeGenre4(AnimeData);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
      axios
        .get("https://api.jikan.moe/v4/anime?genres=22&limit=21")
        .then(function (response) {
          const AnimeData = response.data.data;
          // const AnimeData = Object.entries(response.data.data);
          // handle success
          setAnimeGenre5(AnimeData);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
      axios
        .get("https://api.jikan.moe/v4/anime?genres=24&limit=21")
        .then(function (response) {
          const AnimeData = response.data.data;
          // const AnimeData = Object.entries(response.data.data);
          // handle success
          setAnimeGenre6(AnimeData);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }, [4500]);
  }, []);

  return (
    <>
      <TitleGenreText>Action</TitleGenreText>
      <Swiper
        slidesPerView={7}
        spaceBetween={5}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        breakpoints={{
          390: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          820: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 0,
          },
          1280: {
            slidesPerView: 7,
            spaceBetween: 0,
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {animeGenre1.map((anime) => {
          return (
            <>
              <a href="#">
                <SwiperSlide key={anime.mal_id} className="carousel__item">
                  <img src={anime.images.jpg.image_url}></img>
                </SwiperSlide>
              </a>
            </>
          );
        })}
      </Swiper>
      <br />
      <TitleGenreText>Comedy</TitleGenreText>
      <Swiper
        slidesPerView={7}
        spaceBetween={5}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        breakpoints={{
          390: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          820: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 0,
          },
          1280: {
            slidesPerView: 7,
            spaceBetween: 0,
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {animeGenre2.map((anime) => {
          return (
            <SwiperSlide key={anime.mal_id} className="carousel__item">
              <img src={anime.images.jpg.image_url}></img>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <br />
      <TitleGenreText>Horror</TitleGenreText>
      <Swiper
        slidesPerView={7}
        spaceBetween={5}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        breakpoints={{
          390: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          820: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 0,
          },
          1280: {
            slidesPerView: 7,
            spaceBetween: 0,
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {animeGenre3.map((anime) => {
          return (
            <SwiperSlide key={anime.mal_id} className="carousel__item">
              <img src={anime.images.jpg.image_url}></img>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <br />
      <TitleGenreText>Sports</TitleGenreText>
      <Swiper
        slidesPerView={7}
        spaceBetween={5}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        breakpoints={{
          390: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          820: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 0,
          },
          1280: {
            slidesPerView: 7,
            spaceBetween: 0,
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {animeGenre4.map((anime) => {
          return (
            <SwiperSlide key={anime.mal_id} className="carousel__item">
              <img src={anime.images.jpg.image_url}></img>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <br />
      <TitleGenreText>Romance</TitleGenreText>
      <Swiper
        slidesPerView={7}
        spaceBetween={5}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        breakpoints={{
          390: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          820: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 0,
          },
          1280: {
            slidesPerView: 7,
            spaceBetween: 0,
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {animeGenre5.map((anime) => {
          return (
            <SwiperSlide key={anime.mal_id} className="carousel__item">
              <img src={anime.images.jpg.image_url}></img>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <br />
      <TitleGenreText>Sci-Fi</TitleGenreText>
      <Swiper
        slidesPerView={7}
        spaceBetween={5}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        breakpoints={{
          390: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          820: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 0,
          },
          1280: {
            slidesPerView: 7,
            spaceBetween: 0,
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {animeGenre6.map((anime) => {
          return (
            <SwiperSlide key={anime.mal_id} className="carousel__item">
              <img src={anime.images.jpg.image_url}></img>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default SlideshowGenres;

const TitleGenreText = styled.h3`
  display: flex;
  font-size: 22px;
  margin-top: 10px;
  margin-left: 80px;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  color: white;
`;
