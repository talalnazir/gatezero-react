import { createSlice } from '@reduxjs/toolkit'



export const initiativeSlice = createSlice({
  name: 'jsoninitiative',
  initialState: { 
    json2value: ''
  },
  reducers: {
    setJsonDimentional: (state,action) => {
      state.json2value = action.payload;
    }
  },
})

export const { setInitiative,
  setJsonDimentional
} = initiativeSlice.actions

export default initiativeSlice.reducer