import { darkTheme, lightTheme } from '@styles';
import { Theme } from '@constants/theme';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
  theme: Theme.light | Theme.dark;
  configuration: { [key: string]: unknown };
}

const initialState: InitialState = {
  theme: Theme.light,
  configuration: lightTheme,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme.light | Theme.dark>) => {
      state.theme = action.payload;
      if (action.payload === Theme.light) {
        state.configuration = lightTheme;
      } else {
        state.configuration = darkTheme;
      }
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
