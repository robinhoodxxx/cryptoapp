import { useEffect, useState } from "react";
import Coins from './components/Coins'
import './components/styles/app.css'
import * as icon from "react-icons/fi";
import Axios from "axios";
import Spinner from "./components/Spinner";
import useFetch from "./components/useFetch";
import Dropdown from "./components/Dropdown";
import { MdDeleteOutline } from "react-icons/md";


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

  
 
 

  const DropdownFilter=(arr)=>{
    setCoinslist(arr)
  }



  return (

    <div className="section">
      <div className="header">
        <h1>{coinslist.length - 1}CryptoCurrency.eth</h1>


        <Dropdown filtercoins={filtercoins} coinslistState={DropdownFilter}/>
        <div className="search">
        <div className='icon'><icon.FiSearch /></div>
          <input type="text" placeholder="Search here...." onChange={(e) => {
            setsearchword(e.target.value)
          }} />
          <div className='icon'  title="DeleteCoins" style={{color:'red'}}onClick={() => setCoinslist([])}><MdDeleteOutline/></div>

           
        </div>
        
      </div>
      {loading ? <Coins filtercoins={filtercoins} coinslistState={DropdownFilter} fetching={fetching} /> : <Spinner />}
    </div>
  );
}

export default App;
