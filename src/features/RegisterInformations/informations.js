import {createSlice} from '@reduxjs/toolkit';

export const informationsSlice = createSlice({
  name: 'informations',
  initialState: {
    name: 'enter name',
    age: 'enter age',
    weight: 'enter weight',
    height: 'enter height',
    level: 'enter level',
    activity: 'enter activity',
  },
  reducer: {
    // setName: (state) => {
    //   state.name = action.payload;
    // },
  },
});

// export const {setName} = informationsSlice.actions;
export default informationsSlice.reducer;
