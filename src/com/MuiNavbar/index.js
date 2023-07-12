import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import LanguageIcon from "@mui/icons-material/Language";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import InfoIcon from "@mui/icons-material/Info";

const pages = [
  { name: "Home", icon: <HomeIcon />, to: "/portfolio/" },
  { name: "Projects", icon: <LanguageIcon />, to: "/portfolio/projects" },
  { name: "About", icon: <InfoIcon />, to: "/portfolio/about" },
  { name: "Todo", icon: <PlaylistAddCheckIcon />, to: "/portfolio/todo" },
];

function ResponsiveAppBar() {
  return (
    <AppBar position="sticky" color="transparent">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />

          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },

              // borderStyle: "solid",
              // borderColor: "red",
              // borderWidth: "2px",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                component={Link}
                to={page.to}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.icon}
                {page.name}
              </Button>
            ))}
          </Box>
          <Button variant="outlined" component={Link} to="/portfolio/contact">
            Connect
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
