import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import FirstVideo from "../indexPage/FirstVideo";
import SecondCanvas from "../indexPage/SecondCanvas";

const IndexBlock = styled.main`
  width: 100%;

  overflow-x: hidden;
`;

const IndexPage = () => {
  /**
   * client의 브라우저 실제 노출 사이즈 계산하는 state
   * imageSize = 메인 비디오 컨테이너 사이즈 결정
   */
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [imageSize, setimageSize] = useState(false);

  /**
   * 성능상 이유로 불가피하게 yOffset(클라이언트의 스크롤 양 getter)는 일반 변수로 설정
   */
  let yOffset = 0;
  window.addEventListener("scroll", () => {
    yOffset = window.pageYOffset;
  });

  const handleResize = useCallback(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const IndexBackgroundImageSizeRation = windowSize.width / windowSize.height;
    if (IndexBackgroundImageSizeRation > 1.59) {
      setimageSize(true);
    } else {
      setimageSize(false);
    }
  }, [windowSize]);

  const [prevScrollHeight, setPrevScrollHeight] = useState(0);
  const [currentScene, setCurrentScene] = useState(0);

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
  ]);

  // const setLayout = () => {
  //   setYOffset(window.pageYOffset);

  //   let totalScrollHeight = 0;
  //   for (let i = 0; i < sceneInfo.length; i++) {
  //     totalScrollHeight;
  //   }
  // };

  return (
    <IndexBlock>
      <FirstVideo
        windowSize={windowSize}
        sceneInfo={sceneInfo}
        setSceneInfo={setSceneInfo}
        imageSize={imageSize}
        yOffset={yOffset}
      />
      {/* <SecondCanvas
        windowSize={windowSize}
        sceneInfo={sceneInfo}
        setSceneInfo={setSceneInfo}
        yOffset={yOffset}
      /> */}
    </IndexBlock>
  );
};

export default IndexPage;
