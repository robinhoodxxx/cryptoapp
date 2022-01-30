import { useEffect, useState } from "react";


const useFetch=(url)=> {
    const[data,setdata]=useState([])
    const[loading,setloading]=useState(false)
    const [error,seterror]=useState("")

   
      useEffect(()=>{
          setloading(false)
        fetch(url)
        .then(res=>{
            if(!res.ok){
                setloading(false)
                seterror('waiting for response')
            }
            return res.json()})
            .then(data=>{setdata(data.coins)
            console.log('fetch')
        setloading(true)})
            .catch(err=> seterror(err))
      
    
      },[])
       

    return {data,loading,error}
  
}

export default useFetch;
