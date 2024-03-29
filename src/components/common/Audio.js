import React, { useEffect } from 'react'
import styled from 'styled-components'

const AudioBlock = styled.div`
  flex: none;
`

const AudioPlayButton = styled.img`
  height: 2.6rem;
  margin-right: 1rem;
  filter: invert(20%);
  cursor: pointer;

  @media (max-width: 1320px) {
    height: 2rem;
  }

  @media (max-width: 1024px) {
    height: 1.8rem;
  }

  @media (max-width: 767px) {
    height: 21px;
    margin-left: 1.2rem;
    margin-right: 0;
  }
`

const AudioPauseButton = styled.img`
  height: 2.6rem;
  margin-right: 1rem;
  filter: invert(20%);
  cursor: pointer;

  @media (max-width: 1320px) {
    height: 2rem;
  }

  @media (max-width: 1024px) {
    height: 1.8rem;
  }

  @media (max-width: 767px) {
    height: 21px;
    margin-left: 0.7rem;
    margin-right: 2.8rem;
  }
`

const AudioPlayer = ({ audioPlay, audioPause }) => {
  return (
    <AudioBlock>
      <AudioPlayButton
        src="./images/audio/play.png"
        onClick={() => audioPlay()}
      />
      <AudioPauseButton
        src="./images/audio/pause.png"
        onClick={() => audioPause()}
      />
    </AudioBlock>
  )
}

export default AudioPlayer
