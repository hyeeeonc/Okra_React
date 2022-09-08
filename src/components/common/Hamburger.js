import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HamburgerContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 52px;
  height: 48px;
  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    display: none;
  }
`

const HamburgerClicker = styled.div`
  position: fixed;
  cursor: pointer;

  top: 0;
  right: 0;
  width: 52px;
  height: 50px;
  z-index: 101;
`

const HamburgerCheck = styled.input`
  display: none;

  position: flxed;
  top: -1px;
  right: -1px;

  :checked ~ .menu {
    width: calc(235px);
  }

  :checked ~ .burger-icon .burger-sticks {
    background: transparent;
  }

  :checked ~ .burger-icon .burger-sticks:before {
    transform: rotate(-45deg);
  }

  :checked ~ .burger-icon .burger-sticks:after {
    transform: rotate(45deg);
  }

  :checked ~ .burger-icon:not(.steps) .burger-sticks:before,
  :checked ~ .burger-icon:not(.steps) .burger-sticks:after {
    top: 0;
  }
`

const HamburgerCheckIcon = styled.label`
  cursor: pointer;
  z-index: 52;
  height: auto;
  user-select: none;
  width: auto;
  margin: 0;
`

const HamburgerCheckIconSticks = styled.span`
  background: white;
  display: block;
  height: 2px;
  position: relative;
  transition: background 0.3s ease-out;
  width: 18px;
  border-radius: 2px;

  :before {
    background: white;
    content: '';
    height: 100%;
    position: absolute;
    transition: all 0.2s ease-out;
    width: 100%;
    border-radius: 2px;
    top: 6px;
  }

  :after {
    background: white;
    content: '';
    height: 100%;
    position: absolute;
    transition: all 0.2s ease-out;
    width: 100%;
    border-radius: 2px;
    top: -6px;
  }
`

const HamburgerMenu = styled.div`
  position: fixed;
  top: 50px;
  right: 0;
  height: 100%;
  width: 0;
  transition: width 0.5s ease;
  z-index: 60;
  background-color: #4d4d4d;
  opacity: 1;
`

const HamburgerMenuItemsWrapper = styled.div`
  margin: 25px 0 0 20px;
`

const HamburgerMenuItems = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: -0.02em;
  margin-bottom: 20px;
  cursor: pointer;

  color: white;
`

const Hamburger = () => {
  const hamburgerClicker = useRef(null)
  const hamburgerCheck = useRef(null)
  const hamburgerMenu = useRef(null)

  useEffect(() => {
    hamburgerMenu.current.addEventListener('wheel', e => e.preventDefault())
    hamburgerMenu.current.addEventListener('touchmove', e => e.preventDefault())
  }, [])

  const hamburgerClickHandler = () => {
    hamburgerCheck.current.click()
  }

  useEffect(() => {
    hamburgerClicker.current.addEventListener('click', hamburgerClickHandler)
  }, [])

  return (
    <HamburgerContainer>
      <HamburgerCheck
        ref={hamburgerCheck}
        id="hamburgerCheck"
        type="checkbox"
      />
      <HamburgerClicker ref={hamburgerClicker} />
      <HamburgerCheckIcon className="burger-icon" htmlFor="hamburgerCheck">
        <HamburgerCheckIconSticks className="burger-sticks" />
      </HamburgerCheckIcon>
      <HamburgerMenu ref={hamburgerMenu} className="menu">
        <HamburgerMenuItemsWrapper>
          <HamburgerMenuItems>MINTING</HamburgerMenuItems>
          <HamburgerMenuItems>CONTACT</HamburgerMenuItems>
        </HamburgerMenuItemsWrapper>
      </HamburgerMenu>
    </HamburgerContainer>
  )
}

export default Hamburger
