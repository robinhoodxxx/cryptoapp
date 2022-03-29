import { useEffect, useState } from "react";
import axios from 'axios'


const useFetch = (url) => {
  const [data, setdata] = useState(null)
  const [isloading, setloading] = useState(true)
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
      setloading(false)
    }
    catch (err) {
      seterror(err)
    }
  }


  useEffect(() => {

    fetch()


  }, [url])


  return { data, isloading, error, fetch }

}

export default useFetch;
