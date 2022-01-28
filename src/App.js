import { useEffect,useState } from "react";
import   Axios  from 'axios';
import Coin from './components/Coin'
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

 

  const fetchcoins=async()=>{
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
      setloading(false)
    }) 
    console.log("fecthing")
  }


  useEffect(() => {
      
   fetching()
     
  },[])

  

  return (
    
    <div className="section">
      <div className="header">
         <h1>{coinslist.length-1}CryptoCurrency.eth</h1>
         
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
      <h4>priceChange(1D)</h4>
    </div>
     
     {loading ?<Coin coins={filtercoins} fetch={fetching}/>:<Spinner/>}
     
  </div>
  </div>
  );
}

export default App;
