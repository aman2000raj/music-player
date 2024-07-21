import {
  Button,
  Dialog,
  DialogContent,
  TextField,
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Badge,
} from "@mui/material";
import React, { useState } from "react";
import { lighten } from "@mui/system";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import SongsDailog from "./songsDailog";

function Playlist({ songs, playlists, handleCreatePlaylist, deletePlaylist }) {
  const [openSongDailogbox, setOpenSongDialogbox] = useState(false);
  const [openPlaylistDialog, setOpenDialogPlaylist] = useState(false);
  const [newPlaylistName, setNewPlaylistName] = useState("");
  const [playlistSong, setPlaylistSong] = useState([]);

  const handleCreatePlaylistButton = () => {
    setOpenDialogPlaylist(true);
  };
  const handleClose = () => {
    setOpenDialogPlaylist(false);
  };

  const handleCreate = () => {
    handleCreatePlaylist(newPlaylistName);
    setOpenDialogPlaylist(false);
    setNewPlaylistName("");
  };

  const handleDeletePlaylist = (playlistId) => {
    deletePlaylist(playlistId)
  }

  const handleMusicIcon = (addedSong) => {
    setPlaylistSong(addedSong)
    setOpenSongDialogbox(true);
  }

  const buttonColor = "#1976d2";
  const cardBackgroundColor = lighten(buttonColor, 0.6);
  return (
    <div style={{ marginTop: "10vh", marginLeft: "5vh",  marginRight: "5vh"}}>
      <Button variant="contained" onClick={handleCreatePlaylistButton}>
        Create Playlist
      </Button>
      <Grid container spacing={2} style={{ marginTop: "20px" }}>
        {playlists.map((playlist) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={playlist.id}>
            <Card style={{ backgroundColor: cardBackgroundColor }}>
              <CardContent  >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, textAlign: "center"  }}
                  >
                    {playlist.playlistName}
                  </Typography>
                  <Badge badgeContent={playlist.songs.length} color="secondary">
                    <MusicNoteIcon style={{cursor: "pointer"}} onClick={ () => handleMusicIcon(playlist.songs)}/>
                  </Badge>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: "10px",
                  }}
                >
                  <DeleteForeverIcon onClick={() => handleDeletePlaylist(playlist.id)} />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Dialog open={openPlaylistDialog} onClose={handleClose}>
        <DialogContent>
          <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
            <TextField
              label="New Playlist Name"
              value={newPlaylistName}
              onChange={(e) => setNewPlaylistName(e.target.value)}
              fullWidth
              variant="outlined"
              size="small"
            />
            <Button onClick={handleCreate} variant="contained" sx={{ ml: 1 }}>
              create
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
      <SongsDailog open={openSongDailogbox} onClose = {() => setOpenSongDialogbox(false)} addedPlaylistSong={playlistSong}/>
    </div>
  );
}

export default Playlist;
