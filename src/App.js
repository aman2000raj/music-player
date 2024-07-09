import "./App.css";
import Navbar from "./component/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Songs from "./component/Songs";
import Playlist from "./component/Playlist";
import { useState } from "react";

function App() {
  const songs = [
    { id: 1, title: "song1" },
    { id: 2, title: "song2" },
    { id: 3, title: "song3" },
    { id: 4, title: "song4" },
    { id: 5, title: "song5" },
  ];

  const initialPlaylists = [
    { id: 1, name: "My Playlist 1", songCount: 0 },
    { id: 2, name: "My Playlist 2", songCount: 0 },
    { id: 3, name: "My Playlist 3", songCount: 0 },
  ];

  const [playlists, setPlaylists] = useState(initialPlaylists);

  const handleCreatePlaylist = (newPlaylistName) => {
    const newPlaylist = {
      id: playlists.length + 1,
      name: newPlaylistName,
    };
    setPlaylists((prevPlaylists) => [...prevPlaylists, newPlaylist]);
  };

  const handleAddSongToPlaylist = (playlistId) => {
    playlists.map((playlist) => {
      if (playlist.id === playlistId) {
        playlist.songCount = playlist.songCount+1;
      }
    });
    setPlaylists(playlists);
  };

  return (
    <BrowserRouter>
      <Navbar playlistCount={playlists.length} />
      <Routes>
        <Route
          path="/"
          element={
            <Songs
              songs={songs}
              playlists={playlists}
              handleAddSongToPlaylist={handleAddSongToPlaylist}
            />
          }
        />
        <Route
          path="/playlist"
          element={
            <Playlist
              songs={songs}
              playlists={playlists}
              handleCreatePlaylist={handleCreatePlaylist}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
