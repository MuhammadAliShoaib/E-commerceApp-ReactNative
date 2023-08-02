const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
    name : 'cart',
    initialState:[],
    reducers:{
        cartItems(state,action){
            let myIndex =-1
            state.map((item,index)=>{
                if(item.id==action.payload.id)
                myIndex=index
            })
            if(myIndex==-1){
                state.push(action.payload)
            }else{
                state[myIndex].qty+=action.payload.qty
            }
        }
    }
})


export const {cartItems} = cartSlice.actions;
export default cartSlice.reducer;