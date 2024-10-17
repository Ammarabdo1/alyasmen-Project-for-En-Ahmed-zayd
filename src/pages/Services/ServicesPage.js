import React, {useState, useEffect} from 'react'
import Header from './Components/Header'
import Body from './Components/Body'
import { useSearchParams, useLocation } from 'react-router-dom'

const Services = ({checkDarkMode, checkSaudiFlag}) => {

  const {pathname} = useLocation();

  
  const [searchParams, setSearchParams] = useSearchParams({})
  const [serviceType, setServiceType] = useState(searchParams.get('service'))

  useEffect(() => window.scrollTo(0, 0) ,[pathname])

  useEffect(()=>{
    setServiceType(searchParams.get('service'))
  },[searchParams])
  return (
    <div>
        <Header checkDarkMode={checkDarkMode} checkSaudiFlag={checkSaudiFlag} serviceType={serviceType} />
        <Body checkDarkMode={checkDarkMode} checkSaudiFlag={checkSaudiFlag} serviceType={serviceType} setSearchParams={setSearchParams} />
    </div>
  )
}

export default Services