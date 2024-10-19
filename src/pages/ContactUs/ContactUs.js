import React, {useState, useEffect} from 'react'
import Header from './Components/Header'
import Body from './Components/Body'
import { useLocation } from 'react-router-dom'

import { useSelector } from 'react-redux'

const Contact = ({checkDarkMode, checkSaudiFlag}) => {

  const {pathname} = useLocation();

  const theme = useSelector(state => state.theme)
  const themeMode = useSelector(state=> state[theme])
  const [colors, setColors] = useState(themeMode)

  useEffect(() => setColors(themeMode), [useSelector(state=> state.theme)])

  useEffect(() => window.scrollTo(0, 0) ,[pathname])

  return (
    <div>
        <Header colors={colors} checkDarkMode={checkDarkMode} checkSaudiFlag={checkSaudiFlag} />
        <Body colors={colors} checkDarkMode={checkDarkMode} checkSaudiFlag={checkSaudiFlag} />
    </div>
  )
}

export default Contact