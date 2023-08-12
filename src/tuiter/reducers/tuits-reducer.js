import { createSlice } from "@reduxjs/toolkit";
import tuits from '../reducers/tuit.json';
import {updateTuitThunk, createTuitThunk, deleteTuitThunk, findTuitsThunk} from "../services/tuits-thunks"
const initialState = {
   tuits: [],
   loading: false
}


// const currentUser = {
//     "userName": "NASA",
//     "handle": "@nasa",
//     "image": "nasa.png",
// };

// const templateTuit = {
//     ...currentUser,
//     "topic": "Space",
//     "time": "2h",
//     "liked": false,
//     "replies": 0,
//     "retuits": 0,
//     "likes": 0,
// }

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState,
    extraReducers: {
        [createTuitThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          state.tuits.push(payload)
        },  
        [deleteTuitThunk.fulfilled] :
            (state, { payload }) => {
            state.loading = false
            state.tuits = state.tuits .filter(t => t._id !== payload)
        },
        [findTuitsThunk.pending]:
            (state) => {
                state.loading = true
                state.tuits = [] },
        [findTuitsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits = payload },
        [findTuitsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
        }
    },
    reducers: {}
});
export default tuitsSlice.reducer;


