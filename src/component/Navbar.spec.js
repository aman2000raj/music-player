import { fireEvent, render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

describe("rendering of navbar component", () => {
  it("should display music player text", () => {
    const playlistCount = 5;
    const { getByText } = render(<Navbar playlistCount={playlistCount} />);

    const text = getByText("Music Playlist");
    expect(text).toBeInTheDocument();
  });

  it("should display music icon on rigt", () => {
    const playlistCount = 5;
    const { getByTestId } = render(<Navbar playlistCount={playlistCount}/>);
    const musicIcon = getByTestId("music-icon");
    expect(musicIcon).toBeInTheDocument();
  });

  it("should display the playlist icon with a badge", () => {
    const playlistCount = 5;
    const { getByTestId } = render(<Navbar playlistCount={playlistCount}/>);
    const playlistIcon = getByTestId("playlist-icon");
    expect(playlistIcon).toBeInTheDocument();
    expect(playlistIcon).toHaveTextContent("5");
  });

  it('should handle click events on music and playlist icons', () => {
    const playlistCount = 5;
    render(<Navbar playlistCount={playlistCount}/>);
    const musicIcon = screen.getByTestId('music-icon');
    const playlistIcon = screen.getByTestId('playlist-icon');

   
    const mockOnClick = jest.fn();

 
    fireEvent.click(musicIcon);
    fireEvent.click(playlistIcon);

    expect(mockOnClick).toHaveBeenCalledTimes(0); 
  });
});
