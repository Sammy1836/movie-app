import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_MOVIE_API_URL;

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
    const response = await axios.get(API_URL);
    return response.data;
});

const initialState = {
    movieList: [],
    favouriteList: [],
    status: 'idle',
};

export const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addFavourite: (state, action) => {
            state.favouriteList.push(action.payload)
        },
        removeFavourite: (state, action) => {
            state.favouriteList = state.favouriteList.filter((favourite) => {
                return favourite.id !== action.payload;
            })
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.movieList = action.payload.sort((a, b) => b.rating - a.rating);
            })
            .addCase(fetchMovies.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export const { addFavourite, removeFavourite } = movieSlice.actions;
export default movieSlice.reducer;
