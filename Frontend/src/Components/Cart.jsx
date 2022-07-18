import React, { useEffect, useState } from 'react'

export const Cart = () => {
    const [cart,setCart]=useState([])
    const [price,setPrice]=useState(0)
   const handleChange=(e,d)=>{
    const ind=cart.indexOf(e);
    const arr=cart;

    setCart([...arr])

   }

    const handleRemove=(id)=>{
        const arr=cart.filter((item)=>item.id!==id)
        setCart(arr)
        handlePrice()
    }
const handlePrice=()=>{
    let ans=0;
    cart.map((item)=>(ans+=item.price))
    setPrice(ans)
}
useEffect(()=>{
    handlePrice()
})
  return (
<article>
    {cart.map((item)=>{
           <div className="cart_box" key={item._id}>
        <div className="cart_img">
            <img src={item.images[0]} alt="" />
            <p>{item.name}</p>
        </div>
        <div>
            <button onClick={()=>handleChange(item,1)}>+</button>
        
        <button onClick={()=>handleChange(item,-1)}>-</button>
        </div>
        <div>
            <span>{item.price}</span>
            <button onClick={()=>handleRemove(item._id)}>Remove</button>
        </div>
        </div>
        
    })}
    <div className='total'>
        <span>Total Price of Cart</span>
        <span>Rs - {price}</span>
    </div>
</article>
  )
}
