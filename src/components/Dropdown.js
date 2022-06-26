import * as icon from 'react-icons/hi'
import './styles/dropdown.css'
import { RiArrowDropDownLine } from "react-icons/ri";
const Dropdown = ({ filtercoins, coinslistState }) => {

  const dropdown = (value) => {

    switch (value) {
      case '2': DecendingPrice()
        break;
      case '3': AscendingPrice()
        break;
      case '4': pricechangeup()
        break;
      case '5': pricechangedown()
        break;

      default: marketcap();
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
    const sortedArray = filtercoins.sort((b, a) => {
      return a.price - b.price;
    })
    coinslistState(sortedArray)

  }

  const marketcap = () => {
    const sortedArray = filtercoins.sort((b, a) => {
      return a.marketCap - b.marketCap;
    })
    coinslistState(sortedArray)
  }

  const pricechangeup = () => {
    const sortedArray = filtercoins.sort((b, a) => {
      return a.priceChange1d - b.priceChange1d;
    })
    coinslistState(sortedArray)
  }

  const pricechangedown = () => {
    const sortedArray = filtercoins.sort((a, b) => {
      return a.priceChange1d - b.priceChange1d;
    })
    coinslistState(sortedArray)
  }



  return (

    <select defaultValue="1" onChange={(e) => { dropdown(e.target.value) }}>
      <option value="1" >Market Cap</option>
      <option value="2" >Price High to low</option>
      <option value="3" >Price Low to High</option>
      <option value="4" style={{ color: 'green' }}>Price up%</option>
      <option value="5" style={{ color: 'red' }}> price down%</option>
    </select>

    // <div className='dropdown'>
    //   <div className='dropdown_select'>
    //   <div className='item'>MarketCap</div>
    //   <span><RiArrowDropDownLine/></span>
    //   </div>
    //   <div className='dropdown_list'>
    //   <div className='dropdowm_item'>MarketCap</div>
    //   <div className='dropdown_item'>MarketCap</div>
    //   </div>


    // </div>

  )


}
export default Dropdown;