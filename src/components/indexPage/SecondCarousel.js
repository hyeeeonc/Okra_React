import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import '../../css/carousel.css'

const CarouselBlock = styled.div`
  position: fixed;
  top: calc((100vh - 85px) / 2 + 65px);
  margin-left: calc(50vw + 690px - 40rem);

  transform: translate(0, -50%);
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease, top 0.3s ease;

  @media (max-width: 1320px) {
    margin-left: calc(50vw + 542px - 38rem);
  }

  @media (max-width: 1024px) {
    margin-left: calc(50vw + 410px - 42.5rem);
  }

  @media (max-width: 767px) {
  }
`

const CarouselWindow = styled.div`
  overflow: hidden;
  position: relative;
  height: 400px;
  width: 420px;

  margin-left: 58px;
`

const CarouselContainer = styled.section`
  position: relative;
  display: flex;
  left: -410px;
`

const CarouselLeftArrow = styled.div`
  position: absolute;
  top: calc(200px - 70px);

  left: 0;
  z-index: 100;
  cursor: pointer;
`

const CarouselRightArrow = styled.div`
  position: absolute;
  top: calc(200px - 70px);
  left: 495px;
  z-index: 100;
  cursor: pointer;
`

const SecondCarousel = ({
  carouselOpacity,
  carouselTransform,
  carouselZIndex,
}) => {
  const domain = 'api.okraseoul.com'
  const carousel = useRef(null)
  const prevBtn = useRef(null)
  const nextBtn = useRef(null)
  const [touchPos, setToutchPos] = useState({ x: 0, y: 0 })

  const [thumbnails, setThumbnails] = useState([])

  useEffect(() => {
    const setCarousel = async () => {
      const res = await fetch(`https://${domain}/api/v1/thumbnails`)
      const temp = await res.json()
      setThumbnails(
        [].concat(temp[temp.length - 1], temp.slice(0, thumbnails.length - 1)),
      )
      ;(function addEvent() {
        prevBtn.current.addEventListener(
          'click',
          translateContainer.bind(this, 1),
        )
        nextBtn.current.addEventListener(
          'click',
          translateContainer.bind(this, -1),
        )
      })()
    }

    setCarousel()
  }, [])

  /**
   * 이전/다음 판단하는 함수
   * @param  direction 방향에 따른 값 전달, 1 = 이전 / -1 = 이후
   */
  function translateContainer(direction) {
    const selectedBtn = direction === 1 ? 'prev' : 'next'
    carousel.current.ontransitionend = () => reorganizeEl(selectedBtn)

    carousel.current.style.transitionDuration = '300ms'
    carousel.current.style.transform =
      direction === 1 ? `translateX(410px)` : `translateX(-410px)`
  }

  /**
   * 무핸 캐러셀 유지하는 함수
   * @param {*} selectedBtn 이전/이후 방향 판단하여 캐러셀 카드 생성
   */
  function reorganizeEl(selectedBtn) {
    carousel.current.removeAttribute('style')
    selectedBtn === 'prev'
      ? carousel.current.insertBefore(
          carousel.current.lastElementChild,
          carousel.current.firstElementChild,
        )
      : carousel.current.appendChild(carousel.current.firstElementChild)
  }

  /**
   * touch 넘기는 핸들러
   */
  const touchStart = e => {
    setToutchPos({
      x: e.changedTouches[0].pageX,
      y: e.changedTouches[0].pageY,
    })
  }

  const touchEnd = e => {
    const deltaX = touchPos - e.changedTouches[0].pageX
    if (deltaX > 30) {
      translateContainer(-1)
    } else if (deltaX < -30) {
      translateContainer(1)
    }
  }

  return (
    <CarouselBlock
      style={{
        opacity: `${carouselOpacity}`,
        zIndex: `${carouselZIndex}`,
        top: `calc((100vh - 85px) / 2 + 60px + ${carouselTransform}px)`,
      }}
    >
      <CarouselLeftArrow className="left-arrow" ref={prevBtn}>
        <svg width="45.344" height="139.424" viewBox="0 0 45.344 139.424">
          <path
            d="M679,1315.122l-37,73.245L679,1445"
            transform="translate(-638.5 -1310.42)"
            fill="none"
            stroke="#ccc"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="7"
          />
        </svg>
      </CarouselLeftArrow>
      <CarouselRightArrow className="right-arrow" ref={nextBtn}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45.344"
          height="139.424"
          viewBox="0 0 45.344 139.424"
        >
          <path
            d="M1228,1315.122l37,73.245L1228,1445"
            transform="translate(-1223.156 -1310.42)"
            fill="none"
            stroke="#ccc"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="7"
          />
        </svg>
      </CarouselRightArrow>

      <CarouselWindow onTouchStart={touchStart} onTouchEnd={touchEnd}>
        <CarouselContainer ref={carousel}>
          {thumbnails.map(t => (
            <Link to={`/${t.postId}`}>
              <div
                className="thumbnail-cell"
                style={{ cursor: 'pointer' }}
                dangerouslySetInnerHTML={{ __html: t.thumbnail }}
              ></div>
            </Link>
          ))}
        </CarouselContainer>
      </CarouselWindow>
    </CarouselBlock>
  )
}

export default SecondCarousel
