import React from 'react'
import "./Address.css"
export const Address = () => {
  return (
  
    <div>
      
    <div id="userInfo">
        <h3>Delivery Address</h3>
        <form>
            <div id="flex">
                <label id="fName">First Name</label>
                <input type="text"/>
                <label id="lName">Last Name</label>
                <input type="text"/>
            </div>
            <label>Full Name for Delivery Address</label>
            <input type="text"/>
            <label id="address">Address Line 1</label>
            <input type="text"/>
            <label>Address Line 2 (optional)</label>
            <input type="text"/>
            <div id="flex">
                <label id="city">City</label>
                <input id="smallLabel" type="text"/>
                <label>State</label>
                <input id="smallLabel" type="text"/>
                <label>Zip</label>
                <input class="zipCode" id="smallLabel" type="text"/>
            </div>
            <label>Phone</label>
            <input type="text"/>
            <label>Email (We require your email to send you receipts and order updates)</label>
            <input id="email" type="email"/>
         
            <input type="submit" id="nextBtn" value="Next"/>
        </form>
    
    </div>
    </div>
    

  )
}
