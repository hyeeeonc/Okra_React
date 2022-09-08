import React, { useEffect } from 'react'
import styled from 'styled-components'

const AudioBlock = styled.div``

const AudioPlayButton = styled.input`
  height: 2.6rem;
  margin-right: 1rem;

  @media (max-width: 1320px) {
    height: 2rem;
  }

  @media (max-width: 1024px) {
    height: 1.8rem;
  }

  @media (max-width: 767px) {
    height: 21px;
    margin-left: 1.2rem;
  }
`

const AudioPauseButton = styled.input`
  height: 2.6rem;
  margin-right: 1rem;

  @media (max-width: 1320px) {
    height: 2rem;
  }

  @media (max-width: 1024px) {
    height: 1.8rem;
  }

  @media (max-width: 767px) {
    height: 21px;
    margin-left: 0.7rem;
  }
`
const AudioPlayer = () => {
  let audio = new Audio('./assets/audio/OkraBG.mp3')

  useEffect(() => {
    audio.addEventListener(
      'ended',
      function () {
        this.currentTime = 0
        this.play()
      },
      false,
    )
  })

  const audioPlay = () => {
    audio.play()
  }

  const audioPause = () => {
    audio.pause()
  }

  return (
    <AudioBlock>
      <AudioPlayButton
        type="image"
        src="./images/audio/play.png"
        onClick={() => audioPlay()}
        value="play"
      />
      <AudioPauseButton
        type="image"
        src="./images/audio/pause.png"
        onClick={() => audioPause()}
        value="pause"
      />
    </AudioBlock>
  )
}

export default AudioPlayer
