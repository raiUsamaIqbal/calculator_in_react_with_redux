import React,{useEffect} from 'react';
import CalculatorButtons from './CalculatorButtons';
import { useSelector,useDispatch} from 'react-redux'; // Importing useSelector
import { deleteRight, updateNumber,handleOperatorInput } from '../redux/CalculatorSlice'; // 


const CalculatorTitle = () => {
  const number = useSelector((state) => state.calculator.number);
  const dispatch = useDispatch(); 
    // const[operationTime, setOperationTime] = useState()

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key;
      // Handle numeric keys and decimal point
      if (!isNaN(key) || key === '.') {
        dispatch(updateNumber(key));
      }
      // Handle operators
      else if (['+', '-', '*', '/'].includes(key)) {
        dispatch(handleOperatorInput(key));
      }
      // Handle backspace key
      else if (key === 'Backspace') {
        dispatch(deleteRight());
      }
    };

    // Attach event listener
    window.addEventListener('keydown', handleKeyDown);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch]);

 

  return (
    <div className='d-flex justify-content-between'>
        <div  >
        <h3 className=''>Calculator</h3>
        <input
          type='text'
          className='input-result'
          value={number}
          readOnly
          placeholder='Enter the Value here'
        />
        <CalculatorButtons />
      </div>
      <div>
        <textarea
          name=''
          className='text-center'
          value={number}
          readOnly
          cols='22'
          rows='3'
        ></textarea>
     
         {/* {operationTime && <p>Last operation time: {operationTime.toLocaleTimeString()}</p>} */}
      </div>
      
     
      </div>
  

  );
};

export default CalculatorTitle;
