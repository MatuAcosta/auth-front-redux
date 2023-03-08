import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    email: '',
    password: '',
    registered: false
}

const urlRegister = 'http://localhost:5000/users/register';


export const createUser = createAsyncThunk('users/register',
    async ({name,email,password},thunkAPI) => {
        try {
            console.log(thunkAPI);
            const body = JSON.stringify({name,email ,password});
            let res = await fetch(urlRegister,{
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body
            });
            return await res.json();
        } catch (error) {
            console.log(error)
        }

    }

)


export const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(createUser.fulfilled, (state,action) => {
            console.log(action.payload)
            if(action.payload.statusCode === 201){
                state.registered = true;
            }
        })
        .addCase(createUser.rejected, (state,action) => {
            console.log("STATE",state, "ACTION",action)
        })
    }
})


export default registerSlice.reducer