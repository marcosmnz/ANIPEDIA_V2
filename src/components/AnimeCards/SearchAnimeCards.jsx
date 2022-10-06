import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { experimentalStyled as styled } from "@mui/material/styles";
import axios from "axios";
import * as React from "react";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import SingleAnimeCard from "./SingleAnimeCard";
import "./styles.Cards.css";
import NoResults from "../NoResults/NoResults";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const AnimeCards = ({searchValue}) => {
  const [animeSearch, setAnimeSearch] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.jikan.moe/v4/anime?letter=${searchValue}`)
      .then(function (response) {
        const AnimeData = response.data.data;
        // const AnimeData = Object.entries(response.data.data);
        // handle success
        setAnimeSearch(AnimeData);
        console.log(animeSearch);

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [searchValue]);

  return (
    <>
    { animeSearch.length == '0' ? (<NoResults/>) : (

      <Box className="cardBox" sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 2 }}
          columns={{ xs: 2, sm: 6, md: 12 }}
        >
          {animeSearch.map((anime) => {
             return (<Grid key={anime.mal_id} item xs={2} sm={2} md={3}>
              <Item>
              <SingleAnimeCard url={anime.url} title={anime.title} img={anime.images.jpg.image_url}></SingleAnimeCard>
              </Item>

           </Grid>)

          })}
        </Grid>
      </Box>

    )}
    </>
  );
};
export default AnimeCards;
