import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const CanvasSectionBlock = styled.section`
  width: 100vw;
  overflow: hidden;
  will-change: opacity;
`;

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
`;

const SecondCanvas = ({ windowSize, sceneInfo, setSceneInfo, yOffset }) => {
  const [heightRatio, setHeightRatio] = useState(0);
  const [videoImageCount, setVideoImageCount] = useState(456);
  const [isSecondSceneDisplayBlock, setIsSecondSceneDisplayBlock] =
    useState(false);
  const [secondSceneHeightPercent, setSecondSceneHeightPercent] = useState(0);
  const canvasRef = useRef(null);
  let videoImageCopy = [];

  /**
   * videoImages array state에 canvas로 컨트롤할 images 할당하는 f
   */
  const setCanvasImages = () => {
    for (let i = 0; i < videoImageCount; i++) {
      const imgElement = new Image();
      imgElement.src = `./images/canvas/${1035 + i}.jpeg`;
      videoImageCopy.push(imgElement);
    }
  };

  setCanvasImages();

  /**
   * Canvas Scene 레이아웃(height) 설정
   */
  const secondSceneHeightHandler = () => {
    let copy = sceneInfo;
    copy[1].scrollHeight = copy[1].heightNum * window.innerHeight;
    setSceneInfo(copy);
    setHeightRatio(window.innerHeight / 830);
  };

  useEffect(() => {
    secondSceneHeightHandler();
  }, []);

  /**
   * Second Scene의 Interection 처리를 위하여 스크롤 양을 %로 계산
   * 성능상 이유로 percentSetter는 여기서 state가 관여하지 않는 상태로 다시 한번 작성했음
   */
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let percentSetter = Math.round(
        ((window.pageYOffset - sceneInfo[0].scrollHeight) /
          (sceneInfo[1].scrollHeight - window.innerHeight)) *
          100
      );

      let sequence = Math.round(4.56 * percentSetter);

      // Canvas에 Image 할당
      if (videoImageCopy[sequence]) {
        canvasRef.current
          .getContext("2d")
          .drawImage(videoImageCopy[sequence], 0, 0);
      }

      if (percentSetter >= 0 && percentSetter <= 100) {
        setIsSecondSceneDisplayBlock(true);
      } else {
        setIsSecondSceneDisplayBlock(false);
      }
    });
  }, []);

  // useEffect(() => {}, [yOffset]);

  useEffect(() => {
    secondSceneHeightHandler();
  }, [windowSize, sceneInfo]);

  useEffect(() => {
    let percentSetter = Math.round(
      ((window.pageYOffset - sceneInfo[0].scrollHeight) /
        (sceneInfo[1].scrollHeight - window.innerHeight)) *
        100
    );
  }, [yOffset]);

  return (
    <CanvasSectionBlock style={{ height: `${sceneInfo[1].scrollHeight}px` }}>
      <CanvasContainer
        style={{ display: isSecondSceneDisplayBlock ? "block" : "none" }}
      >
        <canvas
          ref={canvasRef}
          width="1320"
          height="830"
          style={{
            transform: `translate3d(-50%, -50%, 0) scale(${heightRatio})`,
          }}
        />
      </CanvasContainer>
    </CanvasSectionBlock>
  );
};

export default SecondCanvas;
