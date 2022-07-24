

import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import "./Payment.css"
export const Payment = () => {
const navigate=useNavigate()
    const handleSubmit=()=>{
        alert("Payment Successfull");
        navigate("/")
    }
  return (
    <div className='body'>
        <div className="contm">
    <div className="cointainerh">
    <header className='header'>  
    <h1>Payment Form</h1>
   
    </header>
  </div>
    <div className="cont1">
    <h2>Presonal Details</h2>
    <form>
        <p>Name:<input type="text"  placeholder="Enter Your Name" required/>  </p>
        <fieldset>
            <legend>Gender</legend>
        <p>Male<input type="radio" IsRequired id="m" name="gender" />  </p>
        <p>Female<input type="radio" Required id="f" name="gender"/>  </p>
        </fieldset>
        <p>Phone No.:<input type="number" name="phno" placeholder="Enter your Phone Number"/></p>
        <p>Email:<input type="email" placeholder="abc123@email.com"/></p>
        <p>Address:
          <textarea className="form-control" name="address" rows="3"></textarea>
        </p>
        <hr/>
        <h2>Payment Details</h2>
        <p>
            Card Type:
             <select >
                <option value="visa">VISA</option>
                <option value="Rupay">RUPAY</option>
                <option value="Mastercard">MASTERCARD</option>
             </select>
        </p>
        <p>Card Number:<input type="number" required placeholder="1111-2222-3333-4444" name="cardno."/></p>
        <p>Expiration Date:<input type="date" name="carddate"/></p>
        <p>CVV:<input type="number" required placeholder="123" name="cvv"/></p>
        <input type="submit" value="SUBMIT" onClick={()=>handleSubmit()} />
        {/* <button value={"SUBMIT"} >Submit</button> */}
        <input type="reset" value="RESET"/>
    </form>
     </div>
    </div>
    </div>
  )
}
