
import './coin.css'

const Coin=({coins})=> {

  

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
            <a href={websiteUrl} target="_blank" rel="noopener noreferrer" title={name+'.org'}>{name}</a>
            <h6>{symbol}</h6>
            </div>
           <div className="price">
           <p title='price($)'>${Math.round(price*1000000)/1000000}</p>
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
