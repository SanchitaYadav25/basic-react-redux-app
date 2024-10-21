
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchListData = createAsyncThunk('user/fetchUsers',async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
})
