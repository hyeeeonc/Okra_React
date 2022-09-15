import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { Pc, Mobile } from '../hooks/useMediaQuery'

import FirstVideo from '../components/indexPage/FirstVideo'
import SecondCanvas from '../components/indexPage/SecondCanvas'
import ThirdContactUS from '../components/indexPage/ThirdContactUs'
import MobileIndex from '../components/indexPage/MobileIndex'

const IndexBlock = styled.main`
  width: 100%;
  font-family: 'MICEGothic';

  overflow-x: hidden;
`

const IndexPage = () => {
  /**
   * client의 브라우저 실제 노출 사이즈 계산하는 state
   */
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  /**
   * clident의 브라우저 사이즈 state 설정
   */
  const handleResize = useCallback(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }, [])

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  // /브라우저 사이즈 state 설정

  /**
   * index Page 스크롤 인터렉션 위해 height 정보 저장
   * heightNum : 높이 배수
   * scrollHeight: 배수와 windowHieght나 clientHeight를 이융한 동적 할당
   */
  const [sceneInfo, setSceneInfo] = useState([
    {
      // 0
      heightNum: 1,
      scrollHeight: 0,
    },
    {
      // 1
      heightNum: 5,
      scrollHeight: 0,
    },
    {
      // 2
      heightNum: 1,
      scrollHeight: 0,
    },
  ])

  return (
    <IndexBlock>
      <Pc>
        <FirstVideo
          windowSize={windowSize}
          sceneInfo={sceneInfo}
          setSceneInfo={setSceneInfo}
        />
        <SecondCanvas
          windowSize={windowSize}
          sceneInfo={sceneInfo}
          setSceneInfo={setSceneInfo}
        />
        <ThirdContactUS />
      </Pc>
      <Mobile>
        <MobileIndex />
      </Mobile>
    </IndexBlock>
  )
}

export default IndexPage
