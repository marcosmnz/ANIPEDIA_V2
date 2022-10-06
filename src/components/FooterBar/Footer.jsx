import * as React from "react";
import styled from "styled-components";
import "./styles.Footer.css";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TempleBuddhistRoundedIcon from "@mui/icons-material/TempleBuddhistRounded";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerIcons">
        <a className="footerItem" target="_blank" href="https://www.instagram.com/marco.mnz/">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a className="footerItem" target="_blank" href="https://www.facebook.com/MarcoMunoz2401/">
          <i className="fa-brands fa-square-facebook"></i>
        </a>
        <a className="footerItem" target="_blank" href="https://www.linkedin.com/in/marcosmu%C3%B1oz1/">
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
      <div className="footerText">
        <TextFooter>All Copyrights reserved © 2022</TextFooter>
        <Container>
          <Typography
            className="anipediaTextFooter"
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "white",
              textDecoration: "none",
            }}
          >
            <TempleBuddhistRoundedIcon
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
                color: "white",
              }}
            />
            ANIPEDIA
          </Typography>
        </Container>
      </div>
    </div>
  );
};

export default Footer;

const TextFooter = styled.p`
  display: flex;
  font-family: "Gemunu Libre", sans-serif;
  font-weight: 500;
  font-size: 1.1em;
  color: white;
  justify-content: center;
`;
