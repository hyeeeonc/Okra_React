import { Route, Routes } from '../node_modules/react-router-dom/index'
import styled from 'styled-components'
import IndexPage from './pages/IndexPage'
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
`

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<IndexPage />} />
      </Routes>
      <Footer />
      <AudioContainer>
        <AudioPlayer />
      </AudioContainer>
    </>
  )
}

export default App
