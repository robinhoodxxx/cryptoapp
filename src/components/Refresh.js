import './styles/refresh.css'

const Refresh=({fetching})=> {



  return (
  <div className='refresh'>
        
        <button onClick={fetching}>Refresh</button>
  </div>
  )
}

export default Refresh;
