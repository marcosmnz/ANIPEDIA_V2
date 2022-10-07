import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { experimentalStyled as styled } from "@mui/material/styles";
import axios from "axios";
import * as React from "react";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import SingleMangaCards from "./SingleMangaCards";
import "../AnimeCards/styles.Cards.css";
import NoResults from "../NoResults/NoResults";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const MangaCards = ({ searchValue }) => {
  const [mangaInfo, setMangaInfo] = useState([]);
  const [mangaPagination, setMangaPagination] = useState([]);
  const [mangaPage, setMangaPage] = React.useState(1);
  const handleChange = (event, value) => {
    setMangaPage(value);
  };


  useEffect(() => {
    axios
      .get(`https://api.jikan.moe/v4/manga?page=${mangaPage}`)
      .then(function (response) {
        const MangaData = response.data;
        // handle success
        setMangaInfo(MangaData.data);
        setMangaPagination(MangaData.pagination);
        console.log(page);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [mangaPage]);

  return (
    <>
      {mangaInfo.length == "0" ? (
        <NoResults />
      ) : (
        <>
          <Box className="cardBox" sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 2 }}
              columns={{ xs: 2, sm: 6, md: 12 }}
            >
              {mangaInfo.map((manga) => {
                return (
                  <Grid key={manga.mal_id} item xs={2} sm={2} md={3}>
                    <Item>
                      <SingleMangaCards
                        url={manga.url}
                        title={manga.title}
                        img={manga.images.jpg.image_url}
                      ></SingleMangaCards>
                    </Item>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
            <Stack className="paginationButtons" spacing={2}>
              <Pagination onChange={handleChange} page={mangaPage} count={mangaPagination.last_visible_page} showFirstButton showLastButton />
            </Stack>
        </>
      )}
    </>
  );
};
export default MangaCards;
