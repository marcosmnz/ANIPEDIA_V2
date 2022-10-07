import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { experimentalStyled as styled } from "@mui/material/styles";
import axios from "axios";
import * as React from "react";
import { useEffect, useState } from "react";
import "../AnimeCards/styles.Cards.css";
import NoResults from "../NoResults/NoResults";
import SingleCharacterCards from "./SingleCharacterCards";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const CharactersCards = ({ searchValue }) => {
  const [characterInfo, setCharacterInfo] = useState([]);
  const [characterPagination, setCharacterPagination] = useState([]);
  const [characterPage, setCharacterPage] = React.useState(1);
  const handleChange = (event, value) => {
    setCharacterPage(value);
  };

  useEffect(() => {
    axios
      .get(`https://api.jikan.moe/v4/top/characters?page=${characterPage}`)
      .then(function (response) {
        const CharactersData = response.data;
        // handle success
        setCharacterInfo(CharactersData.data);
        setCharacterPagination(CharactersData.pagination);
        console.log(characterPage);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [characterPage]);

  return (
    <>
      {characterInfo.length == "0" ? (
        <NoResults />
      ) : (
        <>
          <Box className="cardBox" sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 2 }}
              columns={{ xs: 2, sm: 6, md: 12 }}
            >
              {characterInfo.map((character) => {
                return (
                  <>
                    <Grid key={character.mal_id} item xs={2} sm={2} md={3}>
                      <Item>
                        <SingleCharacterCards
                          url={character.url}
                          title={character.name}
                          img={character.images.jpg.image_url}
                          about={character.about}
                        ></SingleCharacterCards>
                      </Item>
                    </Grid>
                  </>
                );
              })}
            </Grid>
          </Box>
          <Stack color="primary" className="paginationButtons" spacing={2}>
            <Pagination color="primary"
            size="large"
              onChange={handleChange}
              page={characterPage}
              count={characterPagination.last_visible_page}
              showFirstButton
              showLastButton
            />
          </Stack>
        </>
      )}
    </>
  );
};
export default CharactersCards;
