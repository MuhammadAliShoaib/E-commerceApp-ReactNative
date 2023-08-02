import {createContext} from "react";

const UserContext = createContext({
    info : {},
    Login:false,
    userLogin: (item)=>{},
    userLogut:()=>{}
})

export default UserContext;