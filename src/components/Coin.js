
import './coin.css'

const Coin=({coins})=> {

  

    return (
      <div className="coins">
       
        {
          coins.map((coin)=>{
           
            const {id,name,icon,symbol,price}=coin

           return(

            <article  key={id} title={name}>
            <div className="symbol">
            <div className="img">
            <img src={icon} alt={name} />
            </div>
            </div>
            <div className='name'>
            <h3>{name}</h3>
            <h6>{symbol}</h6>
            </div>
           <div className="price">
           <p title='price($)'>$ {Math.round(price*1000000)/1000000}</p>
           </div>
          </article>
           )
          })
        }
      </div>
    )
      
    
      
    
      
    
     
     
      
    
}

export default Coin;
