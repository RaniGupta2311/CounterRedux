import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { incNumber,decNumber } from './actions/index';
const App=()=>{
  const myState=useSelector((state)=>state.changeTheNumber);
  const dispatch=useDispatch();
  return(
    <>
      <div className="container">
          <h1>Increment/Decrement Counter</h1>
          <h4>Using React and Redux</h4>
          <div className="quantity">
            <a className="quantity_minus" title="decrement" onClick={()=>dispatch(decNumber())}><span>-</span></a>
            <input name="quantity" type="text" className="quantity_input" value={myState}/>
            <a className="quantity_plus" title="increment" onClick={()=>dispatch(incNumber(5))}><span>+</span></a>
          </div>
      </div>
    </>
  )
}
export default App;