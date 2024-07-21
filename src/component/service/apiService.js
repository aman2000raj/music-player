import axios from "axios";


const baseURL = "http://localhost:8080";

const apiService = axios.create({
    baseURL,
});

export const fetchSongs = async() => {
    try {
        const response = await apiService.get("/");
        return response.data;
    } catch (error) {
        console.error("Error fetch songs ", error);
    }

};

export const fetchPlaylists = async () => {
    try {
        const response = await apiService.get("/playlist");
        return response.data;
      } catch (error) {
        console.error("Error fetching playlists:", error);
        throw error;
      }
};

export const createPlaylist = async (newPlaylistName) => {
    try {
      const response = await apiService.post("/playlist", {
        playlistName: newPlaylistName,
      });
      return response.data;
    } catch (error) {
      console.error("Error creating playlist:", error);
      throw error;
    }
  };

export const addSongToPlaylist = async (playlistId, songId) => {
    try {
      const response = await apiService.post(`/playlist/${playlistId}/songs/${songId}`);
      return response.data;
    } catch (error) {
      console.error("Error adding song to playlist:", error);
      throw error;
    }
};

export const deletePlaylist = async (playlistId) => {
    try {
      const response = await apiService.delete(`/playlist/${playlistId}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting playlist:", error);
      throw error;
    }
};