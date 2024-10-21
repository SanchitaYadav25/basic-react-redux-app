import { createSlice } from "@reduxjs/toolkit";
import { fetchListData } from "../api/index";

import {
  asyncStatusTypes,
  createAsyncSlices,
} from "./util.ts/createAsyncSlices";
export interface ListDataState {
  status: asyncStatusTypes;
  data: any;
  error: any;
}

const initialState: ListDataState = {
  status: "INIT",
  data: [],
  error: null,
};

export const ListDataSlice = createSlice({
  name: "userDataList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    createAsyncSlices(builder, [fetchListData]);
  },
});

export default ListDataSlice.reducer;
