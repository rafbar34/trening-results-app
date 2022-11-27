import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export const registerInformationsSlice = createSlice({
  name: 'registerInformations',
  initialState: {
    name: '',
    age: 0,
    weight: '',
    height: '',
    level: '',
    activity: '',
  },
  reducers: {
    setName: (state, action:PayloadAction<string>) => {
      state.name = action.payload;
    },
    setAge: (state, action:PayloadAction<number>) => {
      state.age = action.payload;
    },
    setWeight: (state, action:PayloadAction<string>) => {
      state.weight = action.payload;
    },
    setHeight: (state, action:PayloadAction<string>) => {
      state.height = action.payload;
    },
    setLevel: (state, action:PayloadAction<string>) => {
      state.level = action.payload;
    },
    setActivity: (state, action:PayloadAction<string>) => {
      state.activity = action.payload;
    },
  },
});

export default registerInformationsSlice.reducer;
export const {setName, setAge, setWeight, setHeight, setLevel, setActivity} = registerInformationsSlice.actions;
