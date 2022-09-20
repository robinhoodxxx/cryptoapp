import Coin from "./Coin"
import './styles/coin.css'
import Refresh from "./Refresh";




const Coins=({ filtercoins, coinslistState, fetching })=> {


  return (
    <div >
      

      {filtercoins.length !== 0 ? <Coin coins={filtercoins} coinslistState={coinslistState} /> : <Refresh fetching={fetching} />}


    </div>
  )

}
export default Coins
