import React, {useState, useEffect} from 'react'
import Header from './Components/Header'
import Body from './Components/Body'
import { useSearchParams, useLocation } from 'react-router-dom'

import { useSelector } from 'react-redux'

const Services = ({checkDarkMode, checkSaudiFlag}) => {

  const {pathname} = useLocation();

  const theme = useSelector(state => state.theme)
  const themeMode = useSelector(state => state[theme])
  
  const [colors, setColors] = useState(themeMode)

  const [searchParams, setSearchParams] = useSearchParams({})
  const [serviceType, setServiceType] = useState(searchParams.get('service'))

  useEffect(()=> setColors(themeMode), [useSelector(state=> state.theme)])

  useEffect(() => window.scrollTo(0, 0) ,[pathname])

  useEffect(()=>{
    setServiceType(searchParams.get('service'))
  },[searchParams])
  return (
    <div>
        <Header colors={colors} checkDarkMode={checkDarkMode} checkSaudiFlag={checkSaudiFlag} serviceType={serviceType} />
        <Body colors={colors} checkDarkMode={checkDarkMode} checkSaudiFlag={checkSaudiFlag} serviceType={serviceType} setSearchParams={setSearchParams} />
    </div>
  )
}

export default Services