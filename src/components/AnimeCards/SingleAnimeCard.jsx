import * as React from "react";
import div from "@mui/material/Card";
import "./styles.Cards.css";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardMedia } from '@mui/material';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const SingleAnimeCard = ({ title, img, url }) => {

  return (
    <div>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea className="singleCard" href={url} target="_blank">
        <div className="figure">
        <CardMedia
          component="img"
          height="380"
          image={img}
          alt={title}
        />
        <div className="capa">
          <h3>
        <Typography>{title}</Typography>
          </h3>
        </div>
        </div>
      </CardActionArea>
    </Card>
    </div>
  );
};
export default SingleAnimeCard;
