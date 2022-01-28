
import { useState } from 'react'
import './coin.css'

const Coin=({coins})=> {

  

  const [deletecoins,setdeletecoins]=useState(coins)

  const remove=(id)=>{
    const removedcoins=deletecoins.filter((coin)=>{
    return coin.id !==id
  })
  
  setdeletecoins(removedcoins)
}




    return (
      <div className="coins">
       
        {
          coins.map((coin)=>{
           
            const {id,name,icon,symbol,price,priceChange1d,websiteUrl}=coin

           return(

            <article  key={id} title={name}>
            <div className="symbol">
            <div className="img">
            <img src={icon} alt={name} />
            </div>
            </div>
            <div className='name'>
            <a href={websiteUrl} target="_blank" rel="noopener noreferrer" title={websiteUrl}>{name}</a>
            <h6 onClick={()=>remove(id) } title='Delete'>{symbol}</h6>
            </div>
           <div className="price">
           <p title='price'>${Math.round(price*1000000)/1000000} </p>
           </div>
           <div className="changePrice">
             <p title='priceChangeIn 1 day'>{priceChange1d}%</p>
           </div>
           
          </article>
           )
          })
        }
      </div>
    )
      
    
      
    
      
    
     
     
      
    
}

export default Coin;
