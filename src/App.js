import { Route, Routes } from '../node_modules/react-router-dom/index'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import IndexPage from './pages/IndexPage'
import OkraPage from './pages/okraPage'
import PartnerPage from './pages/partnerPage'
import ContactPage from './pages/ContactPage'
import PostPage from './pages/PostPage'
import PostListPage from './pages/PostListPage'

import Header from './components/common/Header'
import Footer from './components/common/footer'
import AudioPlayer from './components/common/Audio'

const AudioContainer = styled.div`
  position: fixed;
  left: calc(50vw - 660px + 3rem);
  bottom: 41.5px;
  z-index: 100;

  @media (max-width: 1320px) {
    left: 3rem;
  }

  @media (max-width: 1024px) {
    left: 3rem;
  }

  @media (max-width: 767px) {
    display: none;
  }
`

function App() {
  /**
   * Background Music Setter
   */
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

  /**
   * contact us로 라우팅 시 스크롤
   */
  const [isContact, setIsContact] = useState(false)

  const ContactUsMover = () => {
    const target = document.getElementById('contactUs')
    const targetTop = target.getBoundingClientRect().top
    setTimeout(function () {
      target.scrollIntoView({ behavior: 'smooth' })
    }, 10)
    if (window.pageXOffset < targetTop) {
      setTimeout(function () {
        target.scrollIntoView({ behavior: 'smooth' })
      }, 10)
    }
  }

  useEffect(() => {
    if (isContact === true) {
      ContactUsMover()
      setIsContact(false)
    }
  }, [isContact])

  return (
    <>
      <Header
        audioPlay={audioPlay}
        audioPause={audioPause}
        setIsContact={setIsContact}
      />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/okra" element={<OkraPage />} />
        {/* <Route path="/partner" element={<PartnerPage />} /> */}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/events" element={<PostListPage />} />
        <Route path=":postId" element={<PostPage />} />
      </Routes>
      <Footer />
      <AudioContainer>
        <AudioPlayer audioPlay={audioPlay} audioPause={audioPause} />
      </AudioContainer>
    </>
  )
}

export default App
