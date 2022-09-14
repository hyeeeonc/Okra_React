import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

const PartnerBlock = styled.main`
  font-family: MICEGothic;
`

const PartnerSection = styled.section``

const FirstPartnerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  margin-top: 9rem;

  @keyframes movemd {
    from {
      width: 0px;
    }
    to {
      width: 691px;
    }
  }

  @keyframes blockmd {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 1320px) {
    @keyframes movemd {
      from {
        width: 0px;
      }
      to {
        width: 519px;
      }
    }
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    margin-top: 5rem;

    @keyframes movemd {
      from {
        height: 0;
      }
      to {
        height: 100px;
      }
    }
  }

  @media (max-width: 767px) {
    margin-top: 3rem;

    @keyframes movemd {
      from {
        height: 0;
      }
      to {
        height: 100px;
      }
    }
  }
`

const FirstPartnerImageContainer = styled.div`
  height: 160px;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 21px;

  img {
    width: 429px;
  }

  @media (max-width: 1320px) {
    img {
      width: 321px;
    }
  }

  @media (max-width: 1024px) {
    margin: 0;

    img {
      width: 321px;
    }
  }

  @media (max-width: 767px) {
    margin: 0;
    img {
      width: 270px;
    }
  }
`

const FirstPartnerTextAnimator = styled.div`
  animation: movemd 1.5s forwards;
`

const FirstPartnerTextContainer = styled.div`
  width: 691px;
  animation: blockmd 1.5s forwards;
  animation-delay: 1.5s;
  opacity: 0;

  color: white;
  font-size: 24px;

  @media (max-width: 1320px) {
    font-size: 19px;
    letter-spacing: -0.9px;

    width: 519px;
  }

  @media (max-width: 1024px) {
    font-size: 1rem;

    width: 430px;
    text-align: center;
  }

  @media (max-width: 767px) {
    font-size: 14px;

    width: 268px;
    letter-spacing: -0.9px;
    text-align: center;
  }
`

const FirstPartnerTextTitle = styled.h3`
  font-weight: 900;

  margin-bottom: 1rem;
`

const FirstPartnerTextContent = styled.span`
  font-weight: 200;
  line-height: 1.3;
`

const SecondPartnerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  margin-top: 13rem;
  margin-bottom: 9rem;

  @keyframes movemc {
    from {
      width: 0px;
    }
    to {
      width: 691px;
    }
  }

  @keyframes blockmc {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 1320px) {
    @keyframes movemc {
      from {
        width: 0px;
      }
      to {
        width: 519px;
      }
    }
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    margin-top: 5rem;

    @keyframes movemc {
      from {
        height: 0;
      }
      to {
        height: 100px;
      }
    }
  }

  @media (max-width: 767px) {
    margin-top: 3rem;
    margin-bottom: 3rem;

    @keyframes movemc {
      from {
        height: 0;
      }
      to {
        height: 100px;
      }
    }
  }
`

const SecondPartnerImageContainer = styled.div`
  width: 270px;
  height: 275px;

  overflow: hidden;

  display: flex;
  align-items: center;

  margin-left: 4rem;

  img {
    width: 269px;
  }

  @media (max-width: 1320px) {
    img {
      width: 200px;
    }
  }

  @media (max-width: 1024px) {
    width: 200px;
    margin-left: 0;

    order: -1;
    img {
      width: 200px;
    }
  }

  @media (max-width: 767px) {
    width: 148px;
    img {
      width: 148px;
    }
  }
`

const SecondPartnerTextAnimator = styled.div`
  animation: movemc 1.5s forwards;
`

const SecondPartnerTextContainer = styled.div`
  width: 691px;
  animation: blockmd 1.5s forwards;
  animation-delay: 1.5s;
  opacity: 0;

  color: white;
  font-size: 24px;

  @media (max-width: 1320px) {
    font-size: 19px;

    width: 519px;
    letter-spacing: -0.9px;
  }

  @media (max-width: 1024px) {
    font-size: 1rem;

    width: 430px;
    text-align: center;
  }

  @media (max-width: 767px) {
    font-size: 14px;

    width: 268px;
    letter-spacing: -0.9px;
    text-align: center;
  }
`

const SecondPartnerTextTitle = styled.h3`
  font-weight: 900;

  margin-bottom: 1rem;
`

const SecondPartnerTextContent = styled.span`
  font-weight: 200;
  line-height: 1.3;
`

const PartnerPage = () => {
  const firstPartnerText = useRef(null)
  const secondPartnerText = useRef(null)

  useEffect(() => {
    window.addEventListener('load', () => {
      setTimeout(() => {
        console.log(firstPartnerText.current.display)
        firstPartnerText.current.display = 'block'
        secondPartnerText.current.display = 'block'
        console.log('ehla?')
      }, 1600)
    })
  }, [])

  return (
    <PartnerBlock>
      <PartnerSection>
        <FirstPartnerContainer>
          <FirstPartnerImageContainer>
            <img src="./images/partners/magicdrug.png" alt="Magic Drug" />
          </FirstPartnerImageContainer>

          <FirstPartnerTextAnimator>
            <FirstPartnerTextContainer ref={firstPartnerText}>
              <FirstPartnerTextTitle>STAGE PRODUCTION</FirstPartnerTextTitle>

              <FirstPartnerTextContent>
                내 랩의 가치는 부가티 끝없이 올라가는 부가세 귓속에 부어줄게
                불같게 눈부신 광선이 눈앞에 시너지 터지는 품앗이 모두 숨죽이고
                숨 안 쉬지 우리 등등 뒤엔 악어떼
              </FirstPartnerTextContent>
            </FirstPartnerTextContainer>
          </FirstPartnerTextAnimator>
        </FirstPartnerContainer>

        <SecondPartnerContainer>
          <SecondPartnerTextAnimator>
            <SecondPartnerTextContainer ref={secondPartnerText}>
              <SecondPartnerTextTitle>STAGE PRODUCTION</SecondPartnerTextTitle>

              <SecondPartnerTextContent>
                내 랩의 가치는 부가티 끝없이 올라가는 부가세 귓속에 부어줄게
                불같게 눈부신 광선이 눈앞에 시너지 터지는 품앗이 모두 숨죽이고
                숨 안 쉬지 우리 등등 뒤엔 악어떼
              </SecondPartnerTextContent>
            </SecondPartnerTextContainer>
          </SecondPartnerTextAnimator>

          <SecondPartnerImageContainer>
            <img
              src="./images/partners/mycherryclub.png"
              alt="My Cherry Club"
            />
          </SecondPartnerImageContainer>
        </SecondPartnerContainer>
      </PartnerSection>
    </PartnerBlock>
  )
}

export default PartnerPage
