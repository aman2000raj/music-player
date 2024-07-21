import { Dialog, DialogContent, Typography } from '@mui/material'
import React from 'react'

function SongsDailog({open, onClose, addedPlaylistSong}) {
  return (
   <Dialog open={open} onClose={onClose}>
    <DialogContent>
        {addedPlaylistSong.map((song) => (
            <Typography key={song.id} >{song.name}</Typography>
        ))}
        
    </DialogContent>

   </Dialog>
  )
}

export default SongsDailog
