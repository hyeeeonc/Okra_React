import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import SecondCarousel from './SecondCarousel'

const CanvasSectionBlock = styled.section`
  width: 100vw;
  overflow: hidden;
  will-change: opacity;
`

const CanvasContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  canvas {
    position: absolute;
    top: 50%;
    left: 50%;
  }
`

const CanvasGradientLeft = styled.div`
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

const CanvasGradientRight = styled.div`
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

const SecondCanvas = ({ windowSize, sceneInfo, setSceneInfo, yOffset }) => {
  const [heightRatio, setHeightRatio] = useState(0)
  const [carouselOpacity, setCarouselOpacity] = useState(0)
  const [carouselTransform, setCarouselTransform] = useState(0)
  const [isSecondSceneDisplayBlock, setIsSecondSceneDisplayBlock] =
    useState(false)
  const canvasRef = useRef(null)
  let videoImageCopy = []

  /**
   * videoImages array state에 canvas로 컨트롤할 images 할당하는 함수
   */
  const setCanvasImages = () => {
    const videoImageCount = 456 //인터렉션에 사용되는 images 개수
    for (let i = 0; i < videoImageCount; i++) {
      const imgElement = new Image()
      imgElement.src = `./images/canvas/${1035 + i}.jpeg`
      videoImageCopy.push(imgElement)
    }
  }

  setCanvasImages()

  /**
   * Canvas Scene 레이아웃(height) 설정
   */
  const secondSceneHeightHandler = () => {
    let copy = sceneInfo
    copy[1].scrollHeight = copy[1].heightNum * window.innerHeight
    setSceneInfo(copy)
    setHeightRatio(window.innerHeight / 830)
  }

  useEffect(() => {
    secondSceneHeightHandler()
  }, [windowSize, sceneInfo])
  // /Canvas Scene 레이아웃(height) 설정

  /**
   * Second Scene의 Interection 처리를 위하여 스크롤 양을 %로 계산
   * 성능상 이유로 percentSetter는 여기서 state가 관여하지 않도록 세팅.(state화 하면 계산속도 현저히 떨어짐)
   */
  useEffect(() => {
    window.addEventListener('scroll', () => {
      let percentSetter = Math.round(
        ((window.pageYOffset - sceneInfo[0].scrollHeight) /
          (sceneInfo[1].scrollHeight - window.innerHeight)) *
          100,
      )

      let sequence = Math.round(4.56 * percentSetter)

      // Canvas에 Image 할당
      if (videoImageCopy[sequence]) {
        canvasRef.current
          .getContext('2d')
          .drawImage(videoImageCopy[sequence], 0, 0)
      }

      if (percentSetter >= 0 && percentSetter <= 100) {
        setIsSecondSceneDisplayBlock(true)
        // carousel interection
        if (percentSetter >= 5 && percentSetter <= 42) {
          setCarouselOpacity(1)
          setCarouselTransform(20)
        } else {
          setCarouselOpacity(0)
          setCarouselTransform(-20)
        }
      } else {
        setIsSecondSceneDisplayBlock(false)
      }
    })
  }, [canvasRef])

  return (
    <CanvasSectionBlock style={{ height: `${sceneInfo[1].scrollHeight}px` }}>
      <CanvasContainer
        style={{ display: isSecondSceneDisplayBlock ? 'block' : 'none' }}
      >
        <canvas
          ref={canvasRef}
          width="1320"
          height="830"
          style={{
            transform: `translate3d(-50%, -50%, 0) scale(${heightRatio})`,
          }}
        />
        <CanvasGradientLeft
          style={{
            left: `calc( 50vw - ${heightRatio} * 660px)`,
          }}
        />
        <CanvasGradientRight
          style={{
            right: `calc( 50vw - ${heightRatio} * 660px)`,
          }}
        />

        <SecondCarousel
          carouselOpacity={carouselOpacity}
          carouselTransform={carouselTransform}
        />
      </CanvasContainer>
    </CanvasSectionBlock>
  )
}

export default SecondCanvas