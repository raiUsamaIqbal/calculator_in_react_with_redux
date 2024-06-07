import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {
  number: '',
};

export const CalculatorSlice = createSlice({
  name: 'calculator',
  initialState:initialStateValue ,
  reducers: {


  
    deleteRight: (state) => {
        state.number = state.number.slice(0, -1);
      },
      
    deleteAll: (state) => {
      state.number = '';
    },

    updateNumber: (state, action) => {
        state.number += action.payload;
      },
      
      evaluate: (state) => {
        // state.number = eval(state.number).toString();
        try {
            state.number = Function('"use strict";return (' + state.number + ')')().toString();
        } catch (error) {
            console.error("Error:", error);
            // Handle the error as per your application's requirements
        }
    },

    handleOperatorInput: (state, action) => {
        const lastChar = state.number[state.number.length - 1];
        const operator = action.payload;
    
        // Check agr the last character is an operator
        if (['+', '-', '*', '/'].includes(lastChar)) {
            // when move to next operator
            state.number = state.number.slice(0, -1) + operator;
        } else {
            //select one time one operator 
            state.number += operator;
        }
    }
    

  },
});

// Action creators are generated for each case reducer function
export const { deleteRight, deleteAll, updateNumber,evaluate,handleOperatorInput } = CalculatorSlice.actions;

export default CalculatorSlice.reducer;
