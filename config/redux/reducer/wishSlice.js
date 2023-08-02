const { createSlice } = require("@reduxjs/toolkit");

const WishSlice = createSlice({
    name:'favourite',
    initialState:[],
    reducers:{
        addToWishList(state,action){
            let myIndex =-1
            state.map((item,index)=>{
                if(item.id==action.payload.id)
                myIndex=index
            })
            if(myIndex==-1){
                state.push(action.payload)
            }
        }
    }
})

export const {addToWishList} = WishSlice.actions
export default WishSlice.reducer;