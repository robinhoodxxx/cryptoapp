import { useEffect,useState } from "react";
import Coins from './components/Coins'
import './components/styles/app.css'
import * as icon from  "react-icons/fi";

import Spinner from "./components/Spinner";
import useFetch from "./components/useFetch";

const App=()=> {


  const url=' https://api.coinstats.app/public/v1/coins'
  
 // const {data,loading,error}=useFetch(url)
  const [coinslist, setCoinslist] = useState([])

  const[searchword,setsearchword]=useState("")

  const[loading,setloading]=useState(false)


    const fetching=()=>{
      setloading(false)
      fetch(url)
    .then(res=>{
        if(!res.ok){
            setloading(false)
            
            console.log('waiting for response')
        }
        return res.json()})
        .then(data=>{setCoinslist(data.coins)
        setloading(true)})
        .catch(err=> seterror(err))
    }
      
  useEffect(()=>{
   
 
  fetching()

  },[])
   



   const filtercoins= coinslist.filter((coin)=>{
    return coin.name.toLowerCase().includes(searchword.toLowerCase())||coin.symbol.toLowerCase().includes(searchword.toLowerCase())
  })

  const remove=(id)=>{
    const removedcoins=filtercoins.filter((coin)=>{
    return coin.id !==id
  })
  
  setCoinslist(removedcoins)
}



  
  

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
