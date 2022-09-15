import React, { useState, useCallback } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import SecondCarousel from './SecondCarousel'

const MobileImageBlock = styled.section`
  width: 100vw;
  height: 100vw;
  overflow: hidden;

  position: relative;
`

const MobileImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
`

const MobileImageGradient = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 40px;
  background: linear-gradient(
    to bottom,
    rgba(24, 24, 24, 0) 10%,
    rgba(24, 24, 24, 0.25) 25%,
    rgba(24, 24, 24, 0.5) 50%,
    rgba(24, 24, 24, 0.75) 75%,
    rgba(24, 24, 24, 1) 100%
  );
`

const MobileIndex = () => {
  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  })

  return (
    <>
      <MobileImageBlock>
        <MobileImage src="./images/mainimage.jpg" />
        <MobileImageGradient />
      </MobileImageBlock>

      <SecondCarousel isMobile={isMobile} />
    </>
  )
}

export default MobileIndex
