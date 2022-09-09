import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";

const IndexBlock = styled.div`
  width: 100%;
  height: 100vh;
  background: white;
`;

const IndexPage = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [imageSize, setimageSize] = useState(false);

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
    if (IndexBackgroundImageSizeRation > 1.5) {
      setimageSize(true);
    } else {
      setimageSize(false);
    }
  }, [windowSize]);

  return (
    <IndexBlock>
      <></>
    </IndexBlock>
  );
};

export default IndexPage;
