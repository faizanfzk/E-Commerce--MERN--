

import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import "./Payment.css"
export const Payment = () => {
const navigate=useNavigate()
const initValues={
  name:"",
  phone:"",
  address:"",
  email:"",
  cardno:"",
  carddate:"",
  cvv:""
}
const [formVal,setFormVal]=useState(initValues)
const [formerr,setFormErr]=useState({})
const [isSubmit,setIsSubmit]=useState(false)

const handleChange=(e)=>{
  const {name,value}=e.target;
  setFormVal({...formVal,[name]:value})
}

    const handleSubmit=(e)=>{
   e.preventDefault();

       setFormErr(validate(formVal))
       setIsSubmit(true)
      
    }
    const validate=(values)=>{
      const err={};
      if(!values.name){
        err.name="Name Requuired"
      }
      if(!values.email){
        err.email="Email Requuired"
      }
      if(!values.address){
        err.address="Address Requuired"
      }
      if(!values.phone){
        err.phone="Phone Number Requuired"
      }
      if(!values.cardno){
        err.cardno="cardno Requuired"
      }
      if(!values.cvv){
        err.cvv="cvv Requuired"
      }
      if(!values.carddate){
        err.carddate="carddate Requuired"
      }
      return err;

    }
    useEffect(()=>{
      if(Object.keys(formerr).length==0 && isSubmit){
        alert("Payment Successfull")
        navigate("/")
      }
     
    },[formerr])
  return (
    <div className='body'>
        <div className="contm">
    <div className="cointainerh">
    <header className='header'>  
    <h1>Payment Form</h1>
   
    </header>
  </div>
    <div className="cont1">
      {/* {Object.keys(formerr).length==0 && isSubmit ? (alert("Payment Successfull")):(<div>Please enter Details</div>)} */}
    <h2>Presonal Details</h2>
    <form onSubmit={handleSubmit}>
        <p>Name:<input type="text" name="name" value={formVal.name} onChange={handleChange} placeholder="Enter Your Name" required/>  </p>
     <p>{formerr.name}</p>
        <fieldset>
            <legend>Gender</legend>
        <p>Male<input type="radio"  id="m" name="gender" />  </p>
        <p>Female<input type="radio"  id="f" name="gender"/>  </p>
        </fieldset>
        <p>Phone No.:<input type="number" name="phone" value={formVal.phone} placeholder="Enter your Phone Number" onChange={handleChange}/></p>
        <p>{formerr.phone}</p>
        <p>Email:<input type="email" name="email" value={formVal.email} placeholder="abc123@email.com" onChange={handleChange}/></p>
        <p>{formerr.email}</p>
        <p>Address:
          <textarea className="form-control" name="address" value={formVal.address} onChange={handleChange} rows="3"></textarea>
        </p>
        <p>{formerr.address}</p>
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
        <p>Card Number:<input type="number" required placeholder="1111-2222-3333-4444" value={formVal.cardno} onChange={handleChange} name="cardno"/></p>
        <p>{formerr.cardno}</p>
        <p>Expiration Date:<input type="date" name="carddate" value={formVal.carddate} onChange={handleChange}/></p>
        <p>{formerr.carddate}</p>
        <p>CVV:<input type="number" required placeholder="123" name="cvv" value={formVal.cvv} onChange={handleChange}/></p>
        <p>{formerr.cvv}</p>
    <button className='sub'>Submit</button>
        {/* <button value={"SUBMIT"} >Submit</button> */}
        <input type="reset" value="RESET"/>
    </form>
     </div>
    </div>
    </div>
  )
}
