import React from 'react'
import { useMediaQuery } from 'react-responsive'

/**
 * 반응형 useMedaiQuery 세팅
 */
export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  })
  return <>{isMobile && children}</>
}

export const Pc = ({ children }) => {
  const isPc = useMediaQuery({
    query: '(min-width:768px)',
  })
  return <>{isPc && children}</>
}
