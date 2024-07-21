//import React from 'react';
// import { render, screen, waitFor } from '@testing-library/react';
// import { BrowserRouter } from 'react-router-dom';
//import App from './App';
// import axios from 'axios';
// import MockAdapter from 'axios-mock-adapter';

// const mock = new MockAdapter(axios);

describe('App Component', () => {

  it("", () => {
    
  })
//   afterEach(() => {
//     mock.reset();
//   });

//   test('renders loading state initially', () => {
//     // Arrange
//     mock.onGet('http://localhost:8080').reply(200, []);
//     mock.onGet('http://localhost:8080/playlist').reply(200, []);

//     // Act
//     render(
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     );

//     // Assert
//     expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
//   });

//   test('renders error state', async () => {
//     // Arrange
//     mock.onGet('http://localhost:8080').reply(500);
//     mock.onGet('http://localhost:8080/playlist').reply(500);

//     // Act
//     render(
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     );

//     // Assert
//     await waitFor(() => {
//       expect(screen.getByText(/Error:/i)).toBeInTheDocument();
//     });
//   });

//   test('renders songs and playlists', async () => {
//     // Arrange
//     const songs = [
//       { id: 1, title: 'Song 1' },
//       { id: 2, title: 'Song 2' },
//     ];
//     const playlists = [
//       { id: 1, playlistName: 'Playlist 1', songs: [] },
//       { id: 2, playlistName: 'Playlist 2', songs: [] },
//     ];

//     mock.onGet('http://localhost:8080').reply(200, songs);
//     mock.onGet('http://localhost:8080/playlist').reply(200, playlists);

//     // Act
//     render(
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     );

//     // Assert
//     await waitFor(() => {
//       expect(screen.getByText('Song 1')).toBeInTheDocument();
//       expect(screen.getByText('Song 2')).toBeInTheDocument();
//       expect(screen.getByText('Playlist 1')).toBeInTheDocument();
//       expect(screen.getByText('Playlist 2')).toBeInTheDocument();
//     });
//   });
});
