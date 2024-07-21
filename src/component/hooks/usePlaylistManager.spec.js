import usePlaylistManager from "./usePlaylistManager";
import * as apiService from '../service/apiService';
import { renderHook, act } from '@testing-library/react-hooks';


jest.mock("../service/apiService");

describe("usePlaylistManger hook", () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should fetch songs and playlist on mount", () => {
        const songMock = [{id: 1, name: "Song 1"}];
        const playlistMock = [{id: 1, playlistName: 'Playlist 1', song: []}];
        apiService.fetchSongs.mockResolvedValue(songMock);
        apiService.fetchPlaylists.mockResolvedValue(playlistMock);

        const { result, waitForNextUpdate } = renderHook(() => usePlaylistManager());

        expect(result.current.isLoading).toBe(true);

    })

})