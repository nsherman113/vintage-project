import React from "react";
import "../components/navbar";
import "./main.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
const Main = () => {
  return (
    <Container fixed>
      <div>hey</div>
      <Box sx={{ bgcolor: "#EC9E0B", height: "50vh" }} />
    </Container>
  );
};

export default Main;
