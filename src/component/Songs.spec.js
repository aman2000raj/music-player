import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Songs from "./Songs";
import PlaylistDialog from "./PlaylistDialog";



describe("Songs Component", () => {
  const songs = [
    { id: 1, title: "song1" },
    { id: 2, title: "song2" },
    { id: 3, title: "song3" },
    { id: 4, title: "song4" },
    { id: 5, title: "song5" },
  ];

  const playlists = [
    { id: 1, name: "Playlist 1" },
    { id: 2, name: "Playlist 2" },
    { id: 3, name: "Playlist 3" },
  ];

  beforeEach(() => {
    render(<Songs songs={songs} playlists={playlists} />);
  });

  it("renders song titles with add to playlist buttons", () => {
    expect(screen.getByText("song1")).toBeInTheDocument();
    expect(screen.getAllByText("Add to playlist")[0]).toBeInTheDocument();
  });

  it("opens dialog when add to playlist button is clicked", () => {
    const addToPlaylistButton = screen.queryAllByText("Add to playlist")[0];

    fireEvent.click(addToPlaylistButton);

    expect(screen.getByText("Select Playlist")).toBeInTheDocument();
  });

});
