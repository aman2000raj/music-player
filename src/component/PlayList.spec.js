import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Playlist from "./Playlist";

const handleCreatePlaylist = jest.fn();

describe("Playlist Component", () => {
  beforeEach(() => {
    render(
      <Playlist
        songs={[]}
        playlists={[]}
        handleCreatePlaylist={handleCreatePlaylist}
      />
    );
  });

  it("renders create playlist button", () => {
    const createPlaylistButton = screen.getByText(/create playlist/i);

    expect(createPlaylistButton).toBeInTheDocument();
  });

//   it("opens dialog when create playlist button is clicked", () => {
//     const createPlaylistButton = screen.getByText(/create playlist/i);

//     fireEvent.click(createPlaylistButton);

//     const dialog = screen.getByRole("dialog");
//     expect(dialog).toBeInTheDocument();
//   });

//   it("calls handleCreatePlaylist with correct playlist name", () => {
//     const createPlaylistButton = screen.getByText(/create playlist/i);
//     fireEvent.click(createPlaylistButton);

//     const input = screen.getByLabelText(/new playlist name/i);
//     const createButton = screen.getByText(/create/i);

//     fireEvent.change(input, { target: { value: "My Playlist" } });
//     fireEvent.click(createButton);

//     expect(handleCreatePlaylist).toHaveBeenCalledWith("My Playlist");
//     expect(handleCreatePlaylist).toHaveBeenCalledTimes(1);
//   });

//   it("closes dialog after creating a playlist", () => {
//     const createPlaylistButton = screen.getByText(/create playlist/i);
//     fireEvent.click(createPlaylistButton);

//     const input = screen.getByLabelText(/new playlist name/i);
//     const createButton = screen.getByText(/create/i);

//     fireEvent.change(input, { target: { value: "My Playlist" } });
//     fireEvent.click(createButton);

//     const dialog = screen.queryByRole("dialog");
//     expect(dialog).not.toBeInTheDocument();
//  });
});
