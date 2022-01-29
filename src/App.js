import { useEffect,useState } from "react";
import   Axios  from 'axios';
import Coins from './components/Coins'
import './components/app.css'
import * as icon from  "react-icons/fi";

import Spinner from "./components/Spinner";

const App=()=> {

  const [coinslist, setCoinslist] = useState([])

  const[searchword,setsearchword]=useState("")

  const[loading,setloading]=useState(false)

  

  const filtercoins= coinslist.filter((coin)=>{
    return coin.name.toLowerCase().includes(searchword.toLowerCase())
  })

  const remove=(id)=>{
    const removedcoins=filtercoins.filter((coin)=>{
    return coin.id !==id
  })
  
  setCoinslist(removedcoins)
}

 

  const fetchcoins=async()=>{
    setloading(false)
    try{
    const res= await Axios.get("https://api.coinstats.app/public/v1/coins")
    return res.data}
    catch(err){
      console.log(err)
    }
  }
  
  const fetching=()=>{
    fetchcoins().then(data=>{
    
      setCoinslist(data.coins)
      setloading(true)
    }).catch(err=> {
      console.log(err)
    }) 
    
  }


  useEffect(() => {
      
   fetching()
     
  },[])


  
  

  return (
    
    <div className="section">
      <div className="header">
         <h1>{coinslist.length-1}CryptoCurrency.eth</h1>
         
           {/* <select>
             <option  value="" defaultChecked>Market Cap</option>
             <option value="">price High to low</option>
             <option value="">price Low to High</option>
           </select> */}
         
         <div className="search">
           <input type="text" placeholder="Search here...." onChange={(e)=>{
              setsearchword(e.target.value)
           }}/>
          <div className='icon' onClick={()=>setCoinslist([])}><icon.FiSearch/></div>
         </div>
      </div>
        {loading? <Coins filtercoins={filtercoins} remove={remove} fetching={fetching}  />:<Spinner/>}
  </div>
  );
}

export default App;
