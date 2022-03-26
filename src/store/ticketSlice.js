import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk(
    'data/fetchData',
    async function() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        return data
    }
);

const ticketSlice = createSlice({
    name: 'data',
    initialState: {
        data: [],
        chosen: null,
        search: '',
        status: null,
        error: null,
    },
    reducers: {
        employeeClick(state, action) {
            state.chosen = action.payload
        },
    },
    extraReducers: {
        [fetchData.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchData.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.data = action.payload
        },
    }
});

export const {employeeClick} = ticketSlice.actions;
export default ticketSlice.reducer;