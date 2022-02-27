import { useEffect, useState } from "react";
import Coins from './components/Coins'
import './components/styles/app.css'
import * as icon from "react-icons/fi";
import Axios from "axios";
import Spinner from "./components/Spinner";
import useFetch from "./components/useFetch";
import Dropdown from "./components/Dropdown";


const App = () => {


  const url = ' https://api.coinstats.app/public/v1/coins'

  // const {data,loading,error}=useFetch(url)
  const [coinslist, setCoinslist] = useState([])

  const [searchword, setsearchword] = useState("")

  const [loading, setloading] = useState(false)

  


  const fetch = async () => {
    setloading(false)
    try {
      const res = await Axios.get(url)
      const data=await res.data.coins;
     // console.log(data)
      return data

    }
    catch (err) {
      setloading(false)
      console.log(err)
    }
  }


  const fetching = () => { fetch().then(data => { setCoinslist(data); setloading(true) }).catch(err => console.log(err)) }



  useEffect(() => {

    fetching()

  }, [])




  const filtercoins = coinslist.filter((coin) => {
    return coin.name.toLowerCase().includes(searchword.toLowerCase()) || coin.symbol.toLowerCase().includes(searchword.toLowerCase())
  })

  const remove = (id) => {
    const removedcoins = filtercoins.filter((coin) => {
      return coin.id !== id
    })

    setCoinslist(removedcoins)
  }
 
  const dropdown=(value)=>{
     
    if(value==='1'){
    
        marketcap();
    }else if(value==='2'){
      DecendingPrice()
    }else if(value==='3'){
      AscendingPrice()
    }else if(value==='4'){
      pricechangeup()
    }else{
      pricechangedown()
    }
  }

//sorting algo for dropdowns

  const AscendingPrice = () => {
    const sort = filtercoins.sort((a, b) => {
      return a.price - b.price;
    })
    
    setCoinslist(sort)
  }

  const DecendingPrice = () => {
    const sort = filtercoins.sort((b,a) => {
      return a.price - b.price;
    })
    setCoinslist(sort)

  }

  const marketcap=()=>{
    const sort = filtercoins.sort((b,a) => {
      return a.marketCap - b.marketCap;
    })
    setCoinslist(sort)
  }

  const pricechangeup =()=>{
    const sort = filtercoins.sort((b,a) => {
      return a.priceChange1d - b.priceChange1d;
    })
    setCoinslist(sort)
  }
  
  const pricechangedown =()=>{
    const sort = filtercoins.sort((a,b) => {
      return a.priceChange1d - b.priceChange1d;
    })
    setCoinslist(sort)
  }
  

//ALGOS FINISHED


  return (

    <div className="section">
      <div className="header">
        <h1>{coinslist.length - 1}CryptoCurrency.eth</h1>


        <Dropdown dropdown={dropdown}/>
        <div className="search">
          <input type="text" placeholder="Search here...." onChange={(e) => {
            setsearchword(e.target.value)
          }} />
          <div className='icon' onClick={() => setCoinslist([])}><icon.FiSearch /></div>


        </div>
      </div>
      {loading ? <Coins filtercoins={filtercoins} remove={remove} fetching={fetching} /> : <Spinner />}
    </div>
  );
}

export default App;
