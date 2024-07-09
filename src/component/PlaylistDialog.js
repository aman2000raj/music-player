import React from "react";
import {
  Dialog,
  Button,
  DialogTitle,
  DialogContent,
  IconButton,
} from "@mui/material";

import ClearIcon from "@mui/icons-material/Clear";

function PlaylistDialog({
  open,
  onClose,
  playlists,
  onAddToPlaylist,
}) {
  const handleAddToSelectedPlaylist = (playlistId) => {
    onAddToPlaylist(playlistId);
    onClose();
  };
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        Select Playlist{" "}
        <IconButton aria-label="close" onClick={onClose} data-testid="close">
          <ClearIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        {playlists.map((playlist) => (
          <div
            key={playlist.id}
            style={{ display: "flex", alignItems: "center" }}
          >
            <Button
              onClick={() => handleAddToSelectedPlaylist(playlist.id)}
              fullWidth
              variant="outlined"
              sx={{ my: 1 }}
            >
              {playlist.name}
            </Button>
          </div>
        ))}
      </DialogContent>
    </Dialog>
  );
}

export default PlaylistDialog;
