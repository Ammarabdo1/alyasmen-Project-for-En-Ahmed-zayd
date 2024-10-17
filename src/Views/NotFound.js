import React from "react";
import { Typography, Button } from "@mui/material";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const NotFound = ({ setCheckClickLink }) => {
  return (
    <div style={{ height: "100vh", background: "#585858" }}>
      <NotFoundPage>
        <Typography variant="h1">Page not found </Typography>
        <Link to="/">
          <Button
            variant="outlined"
            color="warning"
            onClick={() => setCheckClickLink("Home")}
          >
            <span>
              <ArrowBackIcon />
              back to home page
            </span>
          </Button>
        </Link>
      </NotFoundPage>
    </div>
  );
};

const NotFoundPage = styled.div`
  direction: ltr;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  h1 {
    color: #e5e5e5;
    margin-bottom: 30px;
  }

  Button {
    box-shadow: 0 0 10px 2px silver;
    span {
      display: flex;
      color: #eece95;
      text-decoration: none;
    }
  }

  @media (max-width: 1000px) {
    h1 {
      margin-bottom: 30px;
      font-size: 2.5rem;
    }
  }
`;

export default NotFound;
