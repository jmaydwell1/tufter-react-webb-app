import { createSlice } from "@reduxjs/toolkit";
import tuits from '../reducers/tuit.json';

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.png",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: { tuits: tuits },
    reducers: {
        createTuit(state, action) {
            state.tuits.unshift({
                ...templateTuit,
                ...action.payload,
                _id: (new Date()).getTime(),
            })
        },
        likeTuit(state, action) {
            const tuit = state.tuits.find((tuit) => tuit._id === action.payload._id)
            tuit.liked = !tuit.liked
            if (tuit.liked) {
                tuit.likes++
            } else {
                tuit.likes--
            }
        },
        deleteTuit(state, action) {
            const index = state.tuits
               .findIndex(tuit =>
                  tuit._id === action.payload);
            state.tuits.splice(index, 1);
        },
       
    }
});
export const { createTuit, likeTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;

