import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { Pc, Mobile } from '../hooks/useMediaQuery'

const OkraBlock = styled.main`
  position: relative;
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;

  overflow: hidden;

  @media (max-width: 1024px) {
    height: 1000px;
  }

  @media (max-width: 440px) {
    height: 700px;
  }
`

const OkraBackImage = styled.img`
  width: auto;
  height: 100%;
  animation: opacityHandler 1.5s forwards;

  @keyframes opacityHandler {
    from {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    to {
      opacity: 0.3;
    }
  }
`

const OkraImageGradientLeft = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 150px;
  height: 100vh;
  z-index: 3;
  background: linear-gradient(
    to left,
    rgba(24, 24, 24, 0) 10%,
    rgba(24, 24, 24, 0.25) 25%,
    rgba(24, 24, 24, 0.5) 50%,
    rgba(24, 24, 24, 0.75) 75%,
    rgba(24, 24, 24, 1) 100%
  );
`

const OkraImageGradientRight = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 150px;
  height: 100vh;
  z-index: 3;
  background: linear-gradient(
    to right,
    rgba(24, 24, 24, 0) 10%,
    rgba(24, 24, 24, 0.25) 25%,
    rgba(24, 24, 24, 0.5) 50%,
    rgba(24, 24, 24, 0.75) 75%,
    rgba(24, 24, 24, 1) 100%
  );
`

const OkraContentContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: calc(100vh - 85px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    height: calc(1000px - 100px);
  }

  @media (max-width: 440px) {
    height: calc(800px - 100px);
  }

  @keyframes textMovement {
    from {
      opacity: 0;
      transform: translate(0px, 0px);
    }
    to {
      opacity: 1;
      transform: translate(0px, -30px);
    }
  }
`

const OkraContentTitle = styled.div`
  color: white;
  font-size: 3rem;
  font-family: 'MICEGothic Bold';
  font-weight: bold;
  text-align: center;
  line-height: 60px;

  opacity: 0;

  animation: textMovement 1.5s forwards;
  animation-delay: 1.5s;

  @media (max-width: 1024px) {
    font-size: 2.4rem;
  }

  @media (max-width: 767px) {
    font-size: 2rem;
    line-height: 50px;
  }

  @media (max-width: 440px) {
    font-size: 1.6rem;
    line-height: 50px;
  }
`

const OkraContentContent = styled.div`
  color: white;
  font-size: 20px;
  font-family: 'MICEGothic';
  text-align: center;
  line-height: 30px;

  opacity: 0;

  margin-top: 100px;

  animation: textMovement 1.5s forwards;
  animation-delay: 1.8s;

  @media (max-width: 1024px) {
    font-size: 16px;
  }

  @media (max-width: 440px) {
    font-size: 15px;
    margin-top: 70px;
  }
`

const OkraPage = () => {
  const [heightRatio, setHeightRatio] = useState(0)

  useEffect(() => {
    setHeightRatio(window.innerHeight / 1655)

    window.addEventListener('resize', () => {
      setHeightRatio(window.innerHeight / 1660)
    })
  }, [])
  return (
    <OkraBlock>
      <OkraBackImage src="./images/okrapagemain.jpg" />
      <OkraImageGradientLeft
        style={{
          left: `calc( 50vw - ${heightRatio} * 1320px)`,
        }}
      />
      <OkraImageGradientRight
        style={{
          left: `calc( 50vw + ${heightRatio} * 1320px - 150px)`,
        }}
      />
      <OkraContentContainer>
        <OkraContentTitle>
          CREATIVE SOLUTIONS
          <br />
          for Worldwide entertainment
          <br /> from OKRASEOUL
        </OkraContentTitle>
        <Pc>
          <OkraContentContent>
            <span style={{ color: '#FBB03B' }}>
              10년 간의 현장경험과 노하우를 바탕으로 전문적인 행사 기획과 운영을
              진행하는 공연 전문 기획사입니다.
            </span>
            <br />
            "오크라서울"은 행사비즈니스 분야별 소수정예 스페셜리스트들로
            구성되어, 감각적인 기획과 효율적인 운영을
            <br />
            합리적인 예산으로 전개하여 대한민국 페스티벌 문화를 선두하고,
            <br />
            세계 문화의 중심에서 가장 한국적인 시선으로 즐거움의 새로운 비전을
            제시합니다.
          </OkraContentContent>
        </Pc>
        <Mobile>
          <OkraContentContent>
            <div style={{ color: '#FBB03B', marginBottom: `0px` }}>
              10년 간의 현장경험과 노하우를 바탕으로 <br />
              전문적인 행사 기획과 운영을 진행하는 <br />
              공연 전문 기획사입니다.
            </div>
            <br />
            <div style={{ margin: `0 30px 0 30px` }}>
              "오크라서울"은 행사비즈니스 분야별 소수정예 스페셜리스트들로
              구성되어, 감각적인 기획과 효율적인 운영을 합리적인 예산으로
              전개하여 대한민국 페스티벌 문화를 선두하고, 세계 문화의 중심에서
              가장 한국적인 시선으로 즐거움의 새로운 비전을 제시합니다.
            </div>
          </OkraContentContent>
        </Mobile>
      </OkraContentContainer>
    </OkraBlock>
  )
}

export default OkraPage
