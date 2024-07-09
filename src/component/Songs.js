import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import PlaylistDialog from "./PlaylistDialog";

function Songs({ songs, playlists, handleAddSongToPlaylist }) {

  const [openDialog, setOpenDialog] = useState(false);
  const [selectedSongId, setSelectedSongId] = useState(null);

  const handleAddPlaylist = (songId) => {
    setSelectedSongId(songId);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedSongId(null);
  };

  const handleAddToSelectedPlaylist = (playlistId) => {
    handleAddSongToPlaylist(playlistId);
    handleCloseDialog();
  };

  return (
    <div style={{ marginTop: "15vh" }}>
      {songs.map((song) => (
        <Box
          key={song.id}
          component="span"
          sx={{
            display: "block",
            p: 1,
            m: 1,
            bgcolor: (theme) =>
              theme.palette.mode === "dark" ? "#101010" : "#fff",
            color: (theme) =>
              theme.palette.mode === "dark" ? "grey.300" : "grey.800",
            width: "100%",
            minHeight: "48px",
          }}
        >
          {song.title}{" "}
          <Button
            variant="contained"
            size="small"
            sx={{ marginLeft: "10px" }}
            onClick={() => handleAddPlaylist(song.id)}
          >
            Add to playlist
          </Button>
        </Box>
      ))}

      <PlaylistDialog
        open={openDialog}
        onClose={handleCloseDialog}
        playlists={playlists}
        onAddToPlaylist={handleAddToSelectedPlaylist}
      />
    </div>
  );
}

export default Songs;
