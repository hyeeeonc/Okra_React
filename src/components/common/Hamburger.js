import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import AudioPlayer from "./Audio";

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
`;

const HamburgerClicker = styled.div`
  position: fixed;
  cursor: pointer;

  top: 0;
  right: 0;
  width: 52px;
  height: 50px;
  z-index: 101;
`;

const HamburgerCheck = styled.input`
  display: none;

  position: flxed;
  top: 0px;
  right: 0px;

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
`;

const HamburgerCheckIcon = styled.label`
  cursor: pointer;
  z-index: 52;
  height: auto;
  user-select: none;
  width: auto;
  margin: 0;
`;

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
    content: "";
    height: 100%;
    position: absolute;
    transition: all 0.2s ease-out;
    width: 100%;
    border-radius: 2px;
    top: 6px;
  }

  :after {
    background: white;
    content: "";
    height: 100%;
    position: absolute;
    transition: all 0.2s ease-out;
    width: 100%;
    border-radius: 2px;
    top: -6px;
  }
`;

const HamburgerMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  padding-top: 50px;

  height: 100%;
  width: 0;
  transition: width 0.5s ease;
  z-index: 30;
  background-color: #4d4d4d;
  opacity: 1;
`;

const HamburgerMenuItemsWrapper = styled.div`
  font-family: "MICEGothic";
  font-style: normal;
  font-weight: 700;
  font-size: 1p6x;
  color: white;

  padding: 40px 0 0 20px;
`;

const HamburgerMenuButtonContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;

  width: 140px;
  flex: none;

  margin-top: 10px;
`;

const HamburgerMenuButtonYoutube = styled.img`
  width: 36px;
`;

const HamburgerMenuButtonFB = styled.img`
  width: 33px;
  margin 0 8px;
`;

const HamburgerMenuButtonInsta = styled.img`
  width: 27px;
`;

const HamburgerMenuItems = styled.div``;

const HamburgerMenuLink = styled.div`
  text-decoration: none;
  color: white;

  margin-top: 48px;
  margin-bottom: 40px;

  a {
    text-decoration: none;
    color: white;
  }
`;

const HamburgerMenuItemsSubMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const HamburgerMenuItemsSubMenus = styled(Link)`
  margin-top: 2rem;
  margin-left: 0.9rem;

  text-decoration: none;

  font-family: "MICEGothic";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: white;
`;

const Hamburger = ({ audioPlay, audioPause }) => {
  const hamburgerClicker = useRef(null);
  const hamburgerCheck = useRef(null);
  const hamburgerMenu = useRef(null);

  useEffect(() => {
    hamburgerMenu.current.addEventListener("wheel", (e) => e.preventDefault());
    hamburgerMenu.current.addEventListener("touchmove", (e) =>
      e.preventDefault()
    );
  }, []);

  const hamburgerClickHandler = () => {
    hamburgerCheck.current.click();
  };

  useEffect(() => {
    hamburgerClicker.current.addEventListener("click", hamburgerClickHandler);
  }, []);

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
        <HamburgerMenuButtonContainer>
          <AudioPlayer audioPlay={audioPlay} audioPause={audioPause} />
          <HamburgerMenuButtonYoutube src="./images/footer/youtube.png" />
          <HamburgerMenuButtonFB src="./images/footer/FB.png" />
          <HamburgerMenuButtonInsta src="./images/footer/insta.png" />
        </HamburgerMenuButtonContainer>
        <HamburgerMenuItemsWrapper>
          <HamburgerMenuItems>We&nbsp;Are&nbsp;OKRA</HamburgerMenuItems>
          <HamburgerMenuItemsSubMenuContainer>
            <HamburgerMenuItemsSubMenus
              onClick={() => hamburgerClickHandler()}
              to="/"
            >
              OKRA
            </HamburgerMenuItemsSubMenus>

            <HamburgerMenuItemsSubMenus
              onClick={() => hamburgerClickHandler()}
              to="/"
            >
              Partners
            </HamburgerMenuItemsSubMenus>

            <HamburgerMenuItemsSubMenus
              onClick={() => hamburgerClickHandler()}
              to="/"
            >
              Contact&nbsp;Us
            </HamburgerMenuItemsSubMenus>
          </HamburgerMenuItemsSubMenuContainer>

          <HamburgerMenuLink>
            <Link onClick={() => hamburgerClickHandler()} to="/events">
              EVENTS
            </Link>
          </HamburgerMenuLink>

          <HamburgerMenuItems>BRANDS</HamburgerMenuItems>

          <HamburgerMenuItemsSubMenuContainer>
            <HamburgerMenuItemsSubMenus to="/">
              Magicdurg
            </HamburgerMenuItemsSubMenus>
            <HamburgerMenuItemsSubMenus to="/">
              MyCherryClub
            </HamburgerMenuItemsSubMenus>
          </HamburgerMenuItemsSubMenuContainer>
        </HamburgerMenuItemsWrapper>
      </HamburgerMenu>
    </HamburgerContainer>
  );
};

export default Hamburger;
