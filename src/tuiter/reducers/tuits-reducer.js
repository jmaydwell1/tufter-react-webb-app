import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuit.json';

const tuitsSlice = createSlice({
 name: 'tuits',
 initialState: { tuits: tuits }
});

export default tuitsSlice.reducer;

