import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ISettingsRedux {
  isShowPersonalInfo: boolean;
  reset: boolean;
}

const initialState: ISettingsRedux = {
  isShowPersonalInfo: false,
  reset: false,
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setShowPersonalInfo: (
      state: ISettingsRedux,
      action: PayloadAction<boolean>
    ) => {
      state.isShowPersonalInfo = action.payload;
    },
    setReset: (state: ISettingsRedux, action: PayloadAction<boolean>) => {
      state.reset = action.payload;
    },
  },
});

export const { setShowPersonalInfo, setReset } = settingsSlice.actions;
export default settingsSlice.reducer;
