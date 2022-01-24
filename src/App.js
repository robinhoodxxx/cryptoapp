import { useEffect,useState } from "react";
import   Axios  from 'axios';
import Coin from './components/Coin'
import './components/app.css'
import * as icon from  "react-icons/fi";
const App=()=> {

  const [coinslist, setCoinslist] = useState([])

  const[searchword,setsearchword]=useState("")

  const filtercoins= coinslist.filter((coin)=>{
    return coin.name.toLowerCase().includes(searchword.toLowerCase())
  })

  useEffect(() => {
   Axios.get("https://api.coinstats.app/public/v1/coins?skip=0")

   .then((response)=>{setCoinslist(response.data.coins)
    
   })
   

    .catch((err)=>console.log(err))
     
  },[])

  

  return (
    <div className="section">
      <div className="header">
         <h1>{coinslist.length-1}Crypto Currency.eth</h1>
         
         <div className="search">
           <input type="text" placeholder="Search here...." onChange={(e)=>{
              setsearchword(e.target.value)
           }}/>
          <div className="icon"><icon.FiSearch/></div>
         </div>
      </div>
  <div className="coinslist">
    <div className="nametag">
      <h4>Symbol</h4>
      <h4>Currency</h4>
      <h4>Price(usdt)</h4>
    </div>
     <Coin coins={filtercoins}/>
  </div>
  </div>
  );
}

export default App;
