import * as icon from 'react-icons/hi'

const Dropdown=({filtercoins,coinslistState})=>{

  const dropdown=(value)=>{
         
    if(value==='2'){
     DecendingPrice()
   }else if(value==='3'){
     AscendingPrice()
   }else if(value==='4'){
     pricechangeup()
   }else if(value==='5'){
     pricechangedown()
   }
   else{
     marketcap();
   }
  }
  
  //sorting algo for dropdowns
  
  const AscendingPrice = () => {
    const sortedArray = filtercoins.sort((a, b) => {
      return a.price - b.price;
    })
    
   coinslistState(sortedArray)
  }
  
  const DecendingPrice = () => {
    const sortedArray = filtercoins.sort((b,a) => {
      return a.price - b.price;
    })
    coinslistState(sortedArray)
  
  }
  
  const marketcap=()=>{
    const sortedArray = filtercoins.sort((b,a) => {
      return a.marketCap - b.marketCap;
    })
    coinslistState(sortedArray)
  }
  
  const pricechangeup =()=>{
    const sortedArray = filtercoins.sort((b,a) => {
      return a.priceChange1d - b.priceChange1d;
    })
    coinslistState(sortedArray)
  }
  
  const pricechangedown =()=>{
    const sortedArray = filtercoins.sort((a,b) => {
      return a.priceChange1d - b.priceChange1d;
    })
    coinslistState(sortedArray)
  }
  
  //(e)=>{dropdown(e.target.value)}

return(
  
    <select defaultValue="1" onChange={(e)=>{dropdown(e.target.value)}}>
    <option  value="1" >Market Cap</option>
    <option  value="2" >price High to low</option>
    <option  value="3" >price Low to High</option>
    <option  value="4">Price up%<icon.HiArrowNarrowDown/></option>
    <option value="5"> price down%</option>
  </select> 
     
)


}
export default Dropdown;