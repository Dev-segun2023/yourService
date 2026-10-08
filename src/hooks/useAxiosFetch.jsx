import { useState,useEffect } from "react";
import axios from 'axios'
import api from "../Api/baseUrl";

import React from 'react'

const useAxiosFetch = (dataUrl) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [fetchError, setFetchError] = useState('')

  useEffect(()=>{
    // let isMounted = true;
    // const source = axios.CancelToken.source()
    const controller = new AbortController()
    
    const fetchData = async()=>{
      setIsLoading(true)
      try {
        const response = await api.get(dataUrl, {
          // cancelToken: source.token
          signal: controller.signal
        })

        // if(isMounted){
          setData(response.data)
          setFetchError("")
        // }
      } catch (error) {
        // if(isMounted){
          setFetchError(error.message)
          setData([])
        // }
      }
      finally{
        // isMounted  && 
       setTimeout(()=>{setIsLoading(false)},3000)
      }
    }
    fetchData()

    const cleanUp = ()=>{
      // isMounted = false;
      // source.cancel()
      controller.abort()
    }
    return cleanUp
  },[dataUrl])

  return{ data,isLoading,fetchError } ;
}
export default useAxiosFetch