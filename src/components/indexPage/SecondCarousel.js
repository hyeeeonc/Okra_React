import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Pc, Mobile } from '../../hooks/useMediaQuery'

const CarouselBlock = styled.article`
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
`

const MobileCarouselBlock = styled.article`
  margin-top: 70px;
  position: relative;
`

const CarouselWindow = styled.div`
  overflow: hidden;
  position: relative;
  height: 400px;
  width: 420px;

  margin-left: 58px;
  @media (max-width: 767px) {
    height: 240px;
    width: 100vw;
    margin-left: 0;
  }
`

const CarouselContainer = styled.section`
  position: relative;
  display: flex;
  left: -410px;

  @media (max-width: 767px) {
    left: 0;
  }
`

const CarouselCell = styled.div`
  overflow: hidden;
  width: 400px;
  height: 400px;
  margin-left: 10px;
  display: flex;
  align-items: center;

  img {
    width: 400px;
    height: 400px;
  }

  @media (max-width: 767px) {
    width: 240px;
    height: 240px;

    img {
      width: 240px;
      height: 240px;
    }
  }
`

const CarouselLeftArrow = styled.div`
  position: absolute;
  top: calc(200px - 70px);

  left: 0;
  z-index: 100;
  cursor: pointer;

  @media (max-width: 767px) {
    top: calc(120px - 50px);
    left: 10px;
    z-index: 10;

    svg {
      width: 35px;
      height: 100px;
    }
  }
`

const CarouselRightArrow = styled.div`
  position: absolute;
  top: calc(200px - 70px);
  left: 495px;
  z-index: 100;
  cursor: pointer;
  @media (max-width: 767px) {
    top: calc(120px - 50px);
    left: calc(100vw - 45px);
    z-index: 10;

    svg {
      width: 35px;
      height: 100px;
    }
  }
`

const SecondCarousel = ({
  carouselOpacity,
  carouselTransform,
  carouselZIndex,
  isMobile,
}) => {
  const domain = 'api.okraseoul.com'
  const carousel = useRef(null)
  const mobileCarousel = useRef(null)
  const prevBtn = useRef(null)
  const nextBtn = useRef(null)
  const [touchPos, setToutchPos] = useState({ x: 0, y: 0 })
  const [thumbnails, setThumbnails] = useState([])
  const [mobileThumbnails, setmobileThumbnails] = useState([])

  let startPos = 0
  let offset = 0
  let curPos = 0

  useEffect(() => {
    const setCarousel = async () => {
      const res = await fetch(`https://${domain}/api/v1/thumbnails`)
      const temp = await res.json()
      setThumbnails(
        [].concat(temp[temp.length - 1], temp.slice(0, thumbnails.length - 1)),
      )
      setmobileThumbnails(temp)
      if (!isMobile) {
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

      // 모바일 슬라이더 구현
      const screenWidth = mobileCarousel.current.clientWidth

      mobileCarousel.current.addEventListener('touchstart', e => {
        startPos = e.touches[0].pageX
      })

      mobileCarousel.current.addEventListener('touchmove', e => {
        offset = curPos + e.targetTouches[0].pageX - startPos
        mobileCarousel.current.style.left = `${offset}px`
        mobileCarousel.current.style.transitionDuration = '10ms'
      })

      mobileCarousel.current.addEventListener('touchend', e => {
        let delta = e.changedTouches[0].pageX - startPos
        mobileCarousel.current.style.transitionDuration = '300ms'
        curPos = curPos + delta

        if (e.changedTouches[0].pageX - startPos > 0) {
          curPos = curPos + delta / 2
          mobileCarousel.current.style.left = `${curPos}px`
        } else if (e.changedTouches[0].pageX - startPos < 0) {
          curPos = curPos + delta / 2
          mobileCarousel.current.style.left = `${curPos}px`
        }

        if (curPos > 0) {
          curPos = 0
          mobileCarousel.current.style.left = `0px`
        } else if (curPos < -screenWidth) {
          curPos = -screenWidth

          mobileCarousel.current.style.left = `${curPos}px`
        }

        setTimeout(() => {
          mobileCarousel.current.style.transitionDuration = '0ms'
        }, 300)
      })
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
    if (isMobile) {
      carousel.current.style.transform =
        direction === 1 ? `translateX(250px)` : `translateX(-250px)`
    } else {
      carousel.current.style.transform =
        direction === 1 ? `translateX(410px)` : `translateX(-410px)`
    }
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
    const deltaX = touchPos.x - e.changedTouches[0].pageX
    if (deltaX > 30) {
      translateContainer(-1)
    } else if (deltaX < -30) {
      translateContainer(1)
    }
  }

  return (
    <>
      <Pc>
        <CarouselBlock
          style={{
            opacity: `${carouselOpacity}`,
            zIndex: `${carouselZIndex}`,
            top: `calc((100vh - 85px) / 2 + 60px + ${carouselTransform}px)`,
          }}
        >
          <CarouselLeftArrow ref={prevBtn}>
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
          <CarouselRightArrow ref={nextBtn}>
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
                <Link key={t.postId} to={`/${t.postId}`}>
                  <CarouselCell
                    style={{ cursor: 'pointer' }}
                    dangerouslySetInnerHTML={{ __html: t.thumbnail }}
                  ></CarouselCell>
                </Link>
              ))}
            </CarouselContainer>
          </CarouselWindow>
        </CarouselBlock>
      </Pc>

      <Mobile>
        <MobileCarouselBlock>
          <CarouselWindow>
            <CarouselContainer ref={mobileCarousel}>
              {mobileThumbnails.map(t => (
                <Link key={t.postId} to={`/${t.postId}`}>
                  <CarouselCell
                    style={{ cursor: 'pointer' }}
                    dangerouslySetInnerHTML={{ __html: t.thumbnail }}
                  ></CarouselCell>
                </Link>
              ))}
            </CarouselContainer>
          </CarouselWindow>
        </MobileCarouselBlock>
      </Mobile>
    </>
  )
}

export default SecondCarousel
