import React from "react";
import Box from "@mui/material/Box";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
} from "@mui/material";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import { NavLink } from "react-router-dom";

function Navbar({ playlistCount }) {


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "left", marginLeft: "4vh" }}
          >
            <NavLink
              to="/"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Music Playlist{" "}
            </NavLink>
          </Typography>
          <NavLink
            to="/playlist"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Box sx={{ marginRight: "4vh" }}>
              <IconButton color="inherit" data-testid="playlist-icon">
                <LibraryMusicIcon data-testid="music-icon" />
                <Badge badgeContent={playlistCount} color="secondary">
                  <PlaylistPlayIcon />
                </Badge>
              </IconButton>
            </Box>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
