import React from 'react'
import { Link } from 'react-router-dom'
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

const MobilePartnerSection = styled.section`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  margin-top: 70px;
`

const MobilePartnerFirstImg = styled.img`
  max-width: 140px;
`

const MobilePartnerSecondImg = styled.img`
  max-width: 100px;
`

const MobileContactSection = styled.section`
  display: flex;
  justify-content: center;

  a {
    text-decoration: none;
  }
`

const MobileContactButton = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
  width: 158px;
  height: 52px;
  border-radius: 12px;
  background-color: #808080;

  color: #181818;
  text-align: center;
  line-height: 52px;
  font-family: 'MICEGothic Bold';
  font-size: 17px;
  font-weight: 900;
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

      <MobilePartnerSection>
        <MobilePartnerFirstImg src="./images/partners/magicdrug.png" />
        <MobilePartnerSecondImg src="./images/partners/mycherryclub.png" />
      </MobilePartnerSection>

      <MobileContactSection>
        <Link to="/contact">
          <MobileContactButton>Contact&nbsp;Us</MobileContactButton>
        </Link>
      </MobileContactSection>
    </>
  )
}

export default MobileIndex
