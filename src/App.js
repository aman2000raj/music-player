import "./App.css";
import Navbar from "./component/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Songs from "./component/Songs";
import Playlist from "./component/Playlist";
import usePlaylistManager from './component/hooks/usePlaylistManager';


function App() {

  const {
    songs,
    playlists,
    isLoading,
    error,
    handleCreatePlaylist,
    handleAddSongToPlaylist,
    handleDeletePlaylist,
  } = usePlaylistManager();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

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
              deletePlaylist={handleDeletePlaylist}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
