import axios from 'axios'
import React, { useEffect, useState } from 'react'

function useCountryName(isoCode) {
    const [countryName,setCountryName] = useState(null)
    useEffect(() => {
        const fetchData = async() => {
try {
    const response = await axios.get("https://restcountries.com/v3.1/all")
    const countries = response.data
    const country = countries.find(country => country.cca2 === isoCode);
    console.log(country)
  setCountryName(country)
} catch (error) {
    console.log(error)
}
        }
        fetchData()
    },[isoCode])
  return (

   countryName  )
}

export default useCountryName