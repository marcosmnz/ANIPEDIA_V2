import { CardActionArea, CardMedia } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import * as React from "react";
import "../AnimeCards/styles.Cards.css";

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

const SingleCharacterCards = ({ title, img, about, url }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Dialog
        key={title}
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle className="modalContainer" id="scroll-dialog-title">
          {title}
        </DialogTitle>
        <DialogContent className="modalContainer" dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {about}
          </DialogContentText>
        </DialogContent>
        <DialogActions className="modalContainer">
          <Button target="_blank" href={url}>Wiki Link</Button> 
          <Button onClick={handleClose}>Close</Button>

        </DialogActions>
      </Dialog>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea className="singleCard">
          <div className="figure">
            <CardMedia component="img" height="380" image={img} alt={title} />
            <div className="capa">
              <h3>
                <Typography>{title}</Typography>
                <Button variant="text" onClick={handleOpen}>
                  Learn More
                </Button>
              </h3>
            </div>
          </div>
        </CardActionArea>
      </Card>
    </div>
  );
};
export default SingleCharacterCards;
