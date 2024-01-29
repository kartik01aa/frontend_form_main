import { createSlice,PayloadAction } from "@reduxjs/toolkit";
   
   const initialState: counter = {
        userStatus:'logged-out',
       name:'',
       email:'',
       password:''
   }
   
   const userSlice = createSlice({
     name: 'user',
     initialState,
     reducers: {
          login:(state, action: PayloadAction<counter>) =>{
            state.userStatus = 'logged-in';
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.password = action.payload.password;
            return state;
            },
            logout:(state) =>{
                state.userStatus = 'logged-out';
                state.name = '';
                state.email = '';
                state.password = '';
                return state;
           }
       
     },
   })
   
   export const {login, logout} = userSlice.actions
   
   export default userSlice.reducer