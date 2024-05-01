import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';


const Shop = () => {
  const dispatch=  useDispatch();
  const actions=bindActionCreators(actionCreators,dispatch)

  return (
    <div>
        <h1>Buy everything for just 5 ruppees</h1>
      <button className="btn btn-primary mx-2" onClick={()=>dispatch(withdrawMoney(100))}>-</button>
      Add to cart 
      <button className="btn btn-primary mx-2" onClick={()=>dispatch(depositMoney(100))}>+</button>
    </div>
  )
}

export default Shop
