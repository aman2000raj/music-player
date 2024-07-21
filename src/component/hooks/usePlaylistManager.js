import { useState, useEffect } from "react";

import { fetchSongs, fetchPlaylists, createPlaylist, addSongToPlaylist, deletePlaylist } from "../service/apiService";

const usePlaylistManager = () => {
  const [songs, setSongs] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const fetchedSongs = await fetchSongs();
      const fetchedPlaylists = await fetchPlaylists();
      setSongs(fetchedSongs);
      setPlaylists(fetchedPlaylists);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  const handleCreatePlaylist = async (newPlaylistName) => {
    try {
      const newPlaylist = await createPlaylist(newPlaylistName);
      setPlaylists([...playlists, newPlaylist]);
    } catch (error) {
      console.error("Error creating playlist:", error);
      throw error;
    }
  };

  const handleAddSongToPlaylist = async (playlistId, songId) => {
    try {
      await addSongToPlaylist(playlistId, songId);
      fetchData();
    } catch (error) {
      console.error("Error adding song to playlist:", error);
      throw error;
    }
  };


  const handleDeletePlaylist = async (playlistId) => {
    try {
      await deletePlaylist(playlistId);
      setPlaylists(playlists.filter((playlist) => playlist.id !== playlistId));
    } catch (error) {
      console.error("Error deleting playlist:", error);
      throw error;
    }
  };

  return {
    songs,
    playlists,
    isLoading,
    error,
    handleCreatePlaylist,
    handleAddSongToPlaylist,
    handleDeletePlaylist,
  };

}

export default usePlaylistManager;