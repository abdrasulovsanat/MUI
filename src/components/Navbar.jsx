import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { createTheme } from "@mui/material/styles";
import { Button } from "@mui/material";
import { useContext } from "react";
import { productContext } from "../ProductContext";

const indigoTheme = createTheme({
  palette: {
    primary: {
      main: "#800080",
    },
    secondary: {
      main: "#808000",
    },
  },
});

export default function Navbar() {
  const { handleTop } = useContext(productContext);

  return (
    <Box sx={{ flexGrow: 1 }} id="nav">
      <AppBar position="fixed" theme={indigoTheme}>
        <Toolbar>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Link>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Content
            </Link>
          </Typography>
          <Link to="/add" style={{ textDecoration: "none", color: "inherit" }}>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleTop}
            >
              Add
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}