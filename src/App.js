import { Route, Routes } from '../node_modules/react-router-dom/index'
import styled from 'styled-components'
import IndexPage from './pages/IndexPage'
import Header from './components/common/Header'
import Footer from './components/common/footer'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<IndexPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
