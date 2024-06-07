import { configureStore } from '@reduxjs/toolkit';
import calculatorReducer from './CalculatorSlice'; // Adjust the path and file name accordingly

export const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
  },
});
