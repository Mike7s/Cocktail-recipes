import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    items: localStorage.getItem('items')? JSON.parse(localStorage.getItem('items')) : []
} 

const  favListSlice = createSlice({
    name: 'favList',
    initialState,

    reducers: {
        addFavorite: (state,action) => {
            const isFav = state.items.find(item => item.idDrink === action.payload.idDrink);
            if (!isFav) {
                state.items.push(action.payload);
                localStorage.setItem('items',JSON.stringify(state.items));
            }
        },
        removeFavorite: (state,action) => {
            state.items = state.items.filter(item => item.idDrink !== action.payload.idDrink)
            localStorage.setItem('items',JSON.stringify(state.items));
        },
    },
})

export const {addFavorite,removeFavorite} = favListSlice.actions;
export default favListSlice.reducer;