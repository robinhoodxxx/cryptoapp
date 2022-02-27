import Coin from "./Coin"
import './styles/coin.css'
import Refresh from "./Refresh";




export default function Coins({ filtercoins, remove, fetching }) {


  return (
    <div className="coinslist">
      <div className="nametag">
        <h4 >Symbol</h4>
        <h4>Currency</h4>
        <h4>Price(usdt)</h4>
        <h4>priceChange(1D)</h4>
      </div>

      {filtercoins.length !== 0 ? <Coin coins={filtercoins} removing={remove} /> : <Refresh fetching={fetching} />}


    </div>
    )

}
