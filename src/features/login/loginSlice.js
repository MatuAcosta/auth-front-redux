import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    email: '',
    password:'',
    token: '',
    logged: false
}

const urlLogin = 'http://localhost:5000/users/login';

export const login = createAsyncThunk(
    'users/login',
    async ({email,password}) => {
        try {
            const body = JSON.stringify({email,password});
            let res = await fetch(urlLogin,{
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body
            })
            return await res.json();
        } catch (error) {
            console.log(error);
        }
    }
)

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers:{},
    extraReducers:{
        [login.fulfilled]: (state,action) => {
            if(action.payload.statusCode === 200){
                console.log(action.payload)
                state.email = action.payload.email;
                state.token = action.payload.token;
                state.logged = true;
            }else{
                console.log(action.payload);
                state.fail = false;
            }

        }
    }
})


export default loginSlice.reducer;