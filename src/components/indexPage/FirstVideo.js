import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'

const VideoBlock = styled.section`
  width: 100vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    height: calc(100vh - 70px);
  }

  video {
    transform: translate(0px, -70px);
    @media (max-width: 1024px) {
      transform: translate(0px, -20px);
    }
  }
`

const FirstVideo = ({ windowSize, sceneInfo, setSceneInfo }) => {
  const [videoOpacity, setVideoOpacity] = useState(150)
  const [imageSize, setimageSize] = useState(false)
  const videoSection = useRef(null)

  /**
   * SceneInfo에서 [0]인 first Scene의 height 세팅하는 함수
   */
  const firstSceneHeightHandler = () => {
    let copy = sceneInfo
    copy[0].scrollHeight = videoSection.current.clientHeight
    setSceneInfo(copy)
  }

  /**
   * video section이 화면 가득 차도록 width/height 중 100%가 될 요소 세팅하는 함수
   * imageSize = 메인 비디오 컨테이너 사이즈 결정

   */
  useEffect(() => {
    const IndexBackgroundImageSizeRation = windowSize.width / windowSize.height
    if (IndexBackgroundImageSizeRation > 1.59) {
      setimageSize(true)
    } else {
      setimageSize(false)
    }
  }, [windowSize])

  useEffect(() => {
    firstSceneHeightHandler()
  }, [sceneInfo])

  /**
   * First Scene의 Interection 처리를 위하여 스크롤 양을 %로 계산
   */
  useEffect(() => {
    const scrollFunction = () => {
      let percentSetter = Math.round(
        (window.pageYOffset / sceneInfo[0].scrollHeight) * 100,
      )
      let videoOpacityPercent = Math.round(
        (1 - (percentSetter - 25) / 60) * 100,
      )
      setVideoOpacity(videoOpacityPercent)
    }
    window.addEventListener('scroll', scrollFunction)
  }, [])

  return (
    <VideoBlock
      ref={videoSection}
      style={{
        alignItems: imageSize === false ? `none` : `center`,
        opacity: `${videoOpacity}%`,
      }}
    >
      <video
        style={
          imageSize === false
            ? {
                height: '100vh',
                width: 'auto',
              }
            : {
                width: '100vw',
                height: 'auto',
              }
        }
        muted={true}
        autoPlay={true}
        playsInline={true}
      >
        <source
          id="main-video"
          src="./assets/video/mainvideo.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </VideoBlock>
  )
}

export default FirstVideo
