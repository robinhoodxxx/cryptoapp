import { useEffect, useState } from "react";
import axios from 'axios'


const useFetch = async (url) => {
  const [data, setdata] = useState(null)
  const [loading, setloading] = useState(true)
  const [error, seterror] = useState(null)


  const fetch = async () => {
    setloading(true)
    try {
      const res = await axios.get(url)

      if (!res.status) {
        seterror('waiting for response' + res.status)
        return
      }


      setdata(res.data)
      console.log(res.data)
      seterror(null)
      setloading(true)
    }
    catch (err) {
      seterror(err)
    }
  }


  useEffect(() => {

      fetch()


  }, [url])


  return [ data, loading, error ]

}

export default useFetch;
