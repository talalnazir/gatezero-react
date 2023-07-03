import { createSlice } from '@reduxjs/toolkit'



export const initiativeSlice = createSlice({
  name: 'initiative',
  initialState: { 
    form1value: '',
    form2value: '',
    form3value: '',
    form4value: '',
    form5value: '',
    form6value: '',
    form7value: '',
    form8value: '',
    form9value: '',
    form10value: '',
    form11value: '',
    form12value: '',
    form13value: '',
    form14value: '',
    form15value: '',
    form16value: '',
    form17value: '',
  },
  reducers: {
    setInitiative: (state,action) => {
      state.form1value = action.payload;
    },
    setDimentional: (state,action) => {
      state.form2value = action.payload;
    },
    setCustomerActor: (state,action) => {
      state.form3value = action.payload;
    },
    setBuyermotivation: (state,action) => {
      state.form4value = action.payload;
    },
    setProblemScoreCard: (state,action) => {
      state.form5value = action.payload;
    },
    setProblemValidation: (state,action) => {
      state.form6value = action.payload;
    },
    setSolutionscorecard: (state,action) => {
      state.form7value = action.payload;
    },
    setCruxCompitive: (state,action) => {
      state.form8value = action.payload;
    },
    setCruxalignment: (state,action) => {
      state.form9value = action.payload;
    },
    setCruximpact: (state,action) => {
      state.form10value = action.payload;
    },
    setPurchasedecisionalignment: (state,action) => {
      state.form11value = action.payload;
    },
    setRevenuescore: (state,action) => {
      state.form12value = action.payload;
    },
    setSolutionriskscore: (state,action) => {
      state.form13value = action.payload;
    },
    setFundingscore: (state,action) => {
      state.form14value = action.payload;
    },
    setMarketingscore: (state,action) => {
      state.form15value = action.payload;
    },
    setPmcmalignment: (state,action) => {
      state.form16value = action.payload;
    },
    setDemandpeak: (state,action) => {
      state.form17value = action.payload;
    },
    setLogout: (state,action) => {
      state.form1value='';
      state.form2value='';
      state.form3value='';
      state.form4value='';
      state.form5value='';
      state.form6value='';
      state.form7value='';
      state.form8value='';
      state.form9value='';
      state.form10value='';
      state.form11value='';
      state.form12value='';
      state.form13value='';
      state.form14value='';
      state.form15value='';
      state.form16value='';
      state.form17value='';
    }
  },
})



export const { setInitiative,
  setDimentional,
  setCustomerActor,
  setBuyermotivation,
  setProblemScoreCard,
  setProblemValidation,
  setSolutionscorecard,
  setCruxCompitive,
  setCruxalignment,
  setCruximpact,
  setPurchasedecisionalignment,
  setRevenuescore,
  setSolutionriskscore,
  setFundingscore,
  setMarketingscore,
  setPmcmalignment,
  setDemandpeak,
  setLogout
} = initiativeSlice.actions

export default initiativeSlice.reducer