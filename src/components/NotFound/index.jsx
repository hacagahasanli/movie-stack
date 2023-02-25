import React from "react";
import notfound from "../../assets/svgs/pixeltrue-error.svg";
import styled from "styled-components";
import { Container } from "@mui/material";

const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  marginTop: "2rem",
};

export const NotFound = ({ error }) => {
  return (
    <Container maxWidth="sm" style={style}>
      <NotFoundHeader>{error}</NotFoundHeader>
      <img style={{ maxWidth: "100%" }} src={notfound} alt="not found" />
    </Container>
  );
};

const NotFoundHeader = styled.span`
  color: #c1c1c1;
  font-size: 1.5rem;
  letter-spacing: 0.2rem;
`;
