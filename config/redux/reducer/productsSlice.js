const { createSlice } = require("@reduxjs/toolkit");

const productsSlice = createSlice({
    name : 'products',
    initialState:[],
    reducers:{
        addAllItems(state,action){
            state.push(action.payload)
        }
    }
})


export const {addAllItems} = productsSlice.actions;
export default productsSlice.reducer;