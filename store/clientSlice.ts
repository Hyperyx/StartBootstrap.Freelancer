import { createSlice } from "@reduxjs/toolkit";

const clientSlice = createSlice({
  name: "client",
  initialState: null,
  reducers: {
    setClient: (_, action) => action.payload,
  },
});

export const { setClient } = clientSlice.actions;
export default clientSlice.reducer;
