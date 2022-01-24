import React from 'react'
import './coin.css'

function Coin({coin}) {

   const {name,icon,symbol,price}=coin

    return (
        <article  className="coin">
        <div className="symbol">
        <div className="img">
        <img src={icon} alt={name}/>
        </div>
        </div>
        <div className='name'>
        <h3>{name}</h3>
        <h6>{symbol}</h6>
        </div>
       <div className="price">
       <p>$ {Math.round(price*1000000)/1000000}</p>
       </div>
      </article>
    )
}

export default Coin;
