
import React from 'react';
import { useSelector,useDispatch} from 'react-redux'; // Importing useSelector
import { deleteRight, deleteAll,updateNumber,evaluate,handleOperatorInput } from '../redux/CalculatorSlice'; // Adjust the path accordingly



const CalculatorButtons = () => {
 useSelector((state) => state.calculator.number);

  const dispatch = useDispatch(); //  
    


  

// change value of input 
const handleNumberInput = (value) => {
  // Dispatch the updateNumber action with the value as payload
  dispatch(updateNumber(value));
};
  
// handle operator we can write only one time 
const handleOperator = (operator) => {
  dispatch(handleOperatorInput(operator));
};

  return (
  <div >
   <div className='my-2'>
     <input type="button"  className='btn-style me-1 py-1' value ='Ac'  onClick={() => dispatch(deleteAll())} />
      <input type="button"  className='btn-style me-1 py-1' value ='DE'    onClick={() => dispatch(deleteRight())} />
      <input type="button"  className='btn-style me-1 py-1' value ='.'   onClick={() => handleOperator('.')}   />
      <input type="button"  className='btn-style py-1' value ='/'   onClick={() => handleOperator('/')}  />
   </div>

   <div>
     <input type="button"  className='btn-style me-1 py-1' value= '7'  onClick={() => handleNumberInput('7')}  />
      <input type="button"  className='btn-style me-1 py-1' value= '8' onClick={() => handleNumberInput('8')} />
      <input type="button"  className='btn-style me-1 py-1' value= '9'  onClick={() => handleNumberInput('9')} />
      <input type="button"  className='btn-style py-1' value='*'  onClick={() => handleOperator('*')} />
   </div>

   <div className='my-2'>
     <input type="button"  className='btn-style me-1 py-1' value= '4'  onClick={() => handleNumberInput('4')} />
      <input type="button"  className='btn-style me-1 py-1'  value= '5'  onClick={() => handleNumberInput('5')}/>
      <input type="button"  className='btn-style me-1 py-1'  value= '6' o onClick={() => handleNumberInput('6')} />
      <input type="button" className='btn-style py-1' value ='+' onClick={() => handleOperator('+')}   />
   </div>
   <div>
     <input type="button"  className='btn-style me-1 py-1' value ='1'  onClick={() => handleNumberInput('1')}/>
      <input type="button"  className='btn-style me-1 py-1'  value ='2'  onClick={() => handleNumberInput('2')}/>
      <input type="button" className='btn-style me-1 py-1' value= '3'   onClick={() => handleNumberInput('3')}/>
      <input type="button"  className='btn-style py-1' value ='-'  onClick={() => handleOperator('-')}  />
   </div>
   <div className='my-2'>
     <input type="button" className='btn-style me-1 py-1' value= '00'  onClick={() => handleNumberInput('00')}/>
      <input type="button" className='btn-style me-1 py-1 '  value= '0'  onClick={() => handleNumberInput('0')}/>

     {
         <button   className='equal-btn me-1 py-1' value ='=' onClick={() => dispatch(evaluate())} >
      =
         </button>
     }
      
        {/* {isLoading ? <div class="spinner"></div> :"="} */}
   </div>
   
    </div>
  )
}

export default CalculatorButtons
