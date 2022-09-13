import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import '../../css/carousel.css'

const CarouselBlock = styled.div`
  position: fixed;
  top: calc((100vh - 85px) / 2 + 65px);
  margin-left: calc(50vw + 690px - 40rem);

  transform: translate(0, -50%);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease, top 0.3s ease;

  @media (max-width: 1320px) {
    margin-left: calc(50vw + 542px - 40rem);
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
  z-index: 10;
  cursor: pointer;
`

const CarouselRightArrow = styled.div`
  position: absolute;
  top: calc(200px - 70px);
  left: 495px;
  z-index: 10;
  cursor: pointer;
`

const SecondCarousel = ({ carouselOpacity, carouselTransform }) => {
  const domain = 'api.okraseoul.com'
  const carousel = useRef(null)
  const prevBtn = useRef(null)
  const nextBtn = useRef(null)

  useEffect(() => {
    const carouselSetting = async () => {
      const res = await fetch(`https://${domain}/api/v1/thumbnails`)
      let thumbnails = await res.json()
      console.log()

      thumbnails = [].concat(
        thumbnails[thumbnails.length - 1],
        thumbnails.slice(0, thumbnails.length - 1),
      )

      thumbnails.forEach(t => {
        carousel.current.innerHTML += `<a href='/${t.postId}'><div class="thumbnail-cell" style="cursor:pointer;"> 
      ${t.thumbnail}
      </div></a>`
      })

      const container = document.querySelector('.thumbnail-container')
      const length = Number(thumbnails.length)

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

      function translateContainer(direction) {
        const selectedBtn = direction === 1 ? 'prev' : 'next'
        container.ontransitionend = () => reorganizeEl(selectedBtn)

        container.style.transitionDuration = '300ms'
        container.style.transform = `translateX(-410px)`
      }

      function reorganizeEl(selectedBtn) {
        container.removeAttribute('style')
        selectedBtn === 'prev'
          ? container.insertBefore(
              container.lastElementChild,
              container.firstElementChild,
            )
          : carousel.current.appendChild(container.firstElementChild)
      }
    }

    carouselSetting()
  })

  return (
    <CarouselBlock
      style={{
        zIndex: carouselOpacity === 1 ? 2 : -1,

        opacity: `${carouselOpacity}`,
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

      <CarouselWindow>
        <CarouselContainer
          className="thumbnail-container"
          ref={carousel}
        ></CarouselContainer>
      </CarouselWindow>
    </CarouselBlock>
  )
}

export default SecondCarousel
