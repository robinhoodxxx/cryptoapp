import * as icon from 'react-icons/hi'

const Dropdown=({dropdown})=>{

  


return(
    <select onChange={(e)=>{dropdown(e.target.value)}}>
    <option  value="1"  defaultChecked>Market Cap</option>
    <option  value="2" >price High to low</option>
    <option  value="3" >price Low to High</option>
    <option  value="4">Price up%<icon.HiArrowNarrowDown/></option>
    <option value="5"> price down%</option>
  </select> 
     
)

}
export default Dropdown;