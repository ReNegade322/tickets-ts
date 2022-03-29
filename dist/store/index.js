import { configureStore } from "@reduxjs/toolkit";
import ticketReducer from './ticketSlice';
export var store = configureStore({
    reducer: {
        data: ticketReducer
    }
});
