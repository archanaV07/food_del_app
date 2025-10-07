import React, { useContext} from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';

const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-field">
          <input type="text" placeholder= "First name"/>
          <input type="text" placeholder= "Last name"/>
        </div>
        <input type="email" placeholder= "email address" />
         <input type="text" placeholder= "street" />
         <div className="multi-field">
          <input type="text" placeholder= "city"/>
          <input type="text" placeholder= "state"/>
        </div>
        <div className="multi-field">
          <input type="text" placeholder= "pincode"/>
          <input type="text" placeholder= "country"/>
        </div>
        <input type="text" placeholder= "phone number" />
      </div> 
      <div className="place-order-right">
                <div className="cart-total">
          <h2> Cart Total</h2>
           <div className="cart-total-details">
            <p>Sub Total</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr/>
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>${getTotalCartAmount()===0?0:20}</p>
          </div>
          <hr/>
          <div className="cart-total-detail">
            <p>Total</p>
            <p>${getTotalCartAmount()===0?0:getTotalCartAmount()+20}</p>
          </div>
        <button >Proceed to Payment</button>
        </div>


      </div>
    </form>
  )
}

export default PlaceOrder
