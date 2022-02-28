import Coin from "./Coin"
import './styles/coin.css'
import Refresh from "./Refresh";




export default function Coins({ filtercoins, coinslistState, fetching }) {


  return (
    <div className="coinslist">
      <div className="nametag">
        <h4 >Symbol</h4>
        <h4>Currency</h4>
        <h4>Price($)</h4>
        <h4>Change(1D)</h4>
      </div>

      {filtercoins.length !== 0 ? <Coin coins={filtercoins} coinslistState={coinslistState} /> : <Refresh fetching={fetching} />}


    </div>
    )

}
