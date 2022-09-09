import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";

const HeaderBlock = styled.header`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 85px;
  z-index: 99;
  background-color: #181818;
  color: #fff;

  @media (max-width: 1024px) {
    height: 70px;
  }

  @media (max-width: 767px) {
    height: 50px;
  }
`;

const HeaderNav = styled.nav`
  width: 1320px;
  height: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;

  @media (max-width: 1320px) {
    width: 1024px;
  }

  @media (max-width: 1024px) {
    max-width: 768px;
  }
`;

const HeaderLogoContainer = styled.div`
  margin-right: auto;
  margin-left: 1rem;
  cursor: pointer;

  transition: opacity 150ms ease;

  :hover {
    opacity: 80%;
  }

  @media (max-width: 1024px) {
    svg {
      width: 200px;
      height: auto;
    }
  }

  @media (max-width: 767px) {
    svg {
      width: 150px;
      height: auto;
      margin-left: 0.5rem;
    }
  }
`;

const HeaderNavItemsContainer = styled.div`
  height: 100%;
  font-size: 1.5rem;
  font-weight: bold;

  display: flex;
  justify-item; space-between;
  align-items: center;
`;

const HeaderNavItems = styled.div`
  position: relative;
  width: 200px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover .sub-menu {
    height: 240px;
  }

  :hover .sub-menu-items {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 1320px) {
    width: 176px;
  }

  @media (max-width: 1024px) {
    width: 130px;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

const HeaderNavItemsNormal = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1320px) {
    font-size: 1.2rem;
  }

  @media (max-width: 1024px) {
    font-size: 1rem;
  }
`;

const HeaderNavItemsLink = styled(Link)`
  width: 100%;
  height: 100%;
  color: white;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1320px) {
    font-size: 1.2rem;
  }

  @media (max-width: 1024px) {
    font-size: 1rem;
  }
`;

const HeaderNavItemsSpan = styled.span`
  :after {
    display: block;
    content: "";
    border-bottom: solid 2px white;
    transform: scaleX(0);
    transition: transform 150ms ease-in-out;
    transform-origin: 100% 0%;
  }

  :hover:after {
    transform: scaleX(1);
    transform-origin: 0% 100%;
  }
`;

const HeaderNavItemsSubMenuContainer = styled.div`
  position: absolute;

  left: 0;
  top: 85px;
  width: 100%;
  height: 0px;

  color: white;
  text-decoration: none;
  font-size: 1.5rem;

  background-color: rgba(24, 24, 24, 0.5);

  transition: all 150ms ease-out;

  @media (max-width: 1320px) {
    width: 176px;
    font-size: 1.2rem;
  }

  @media (max-width: 1024px) {
    width: 130px;
    font-size: 1rem;
    top: 70px;
  }
`;

const HeaderNavItemsSubMenuItems = styled(Link)`
  width: 100%;
  height: 60px;
  display: none;

  text-decoration: none;
  color: white;
`;

const HeaderNavItemsSubMenuItemsSpan = styled.span`
  :after {
    display: block;
    content: "";
    border-bottom: solid 2px white;
    transform: scaleX(0);
    transition: transform 150ms ease-in-out;
    transform-origin: 100% 0%;
  }

  :hover:after {
    transform: scaleX(1);
    transform-origin: 0% 100%;
  }
`;

const HeaderSpacer = styled.div`
  width: 100%;
  height: 85px;

  @media (max-width: 1024px) {
    height: 70px;
  }

  @media (max-width: 767px) {
    height: 50px;
  }
`;

const Header = ({ audioPlay, audioPause }) => {
  return (
    <>
      <HeaderBlock>
        <HeaderNav>
          <HeaderLogoContainer>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="322.752"
              height="44.332"
              viewBox="0 0 322.752 44.332"
            >
              <path
                id="OKRASEOUL"
                d="M56.706,68.431q-4.628-4.568-4.627-13.539V46.719q0-8.911,4.627-13.482t13.538-4.569q8.91,0,13.538,4.569t4.626,13.482v8.173q0,8.913-4.655,13.51T70.244,73Q61.331,73,56.706,68.431ZM68.541,44.562v12.6q0,2.5,1.7,2.5,1.758,0,1.759-2.5v-12.6q0-2.554-1.759-2.555Q68.54,42.007,68.541,44.562Zm247.342,25.6q-3.15-2.669-3.15-8.231a30.591,30.591,0,0,1,.738-6.357l5.506-25.828h9.763l-5.62,26.622a14.969,14.969,0,0,0-.4,3.293q0,4.883,4.768,4.881a6.583,6.583,0,0,0,4.939-1.986,12.587,12.587,0,0,0,2.838-6.187l5.619-26.622h9.764L345.2,55.517q-1.929,8.969-6.584,13.141T325.675,72.83Q319.033,72.83,315.883,70.162Zm-37.264-.483q-3.634-3.15-3.633-9.337a28.775,28.775,0,0,1,.682-5.9l1.532-7.266q2.043-9.308,6.812-13.793T296.953,28.9q6.754,0,10.273,3.121t3.519,9.252a28.33,28.33,0,0,1-.738,6.188l-1.475,6.925q-2.1,9.423-6.783,13.936t-12.8,4.513Q282.251,72.83,278.618,69.679Zm11.607-30.34q-2.071,2.1-3.092,7.039l-1.873,8.855a19.746,19.746,0,0,0-.455,3.746q0,5.507,5.109,5.506a7.29,7.29,0,0,0,5.421-2.157q2.129-2.155,3.207-7.151l1.817-8.514a20,20,0,0,0,.51-4.087,5.326,5.326,0,0,0-1.362-4.088,5.6,5.6,0,0,0-3.918-1.248A7.211,7.211,0,0,0,290.226,39.339ZM211.411,70.162a9.1,9.1,0,0,1-3.462-7.663,16.913,16.913,0,0,1,.4-3.632l.057-.284h9.479l-.056.284a11.431,11.431,0,0,0-.227,1.873Q217.6,65,222.707,65a6.911,6.911,0,0,0,4.315-1.22,5.81,5.81,0,0,0,2.1-3.434l.113-.454a5.175,5.175,0,0,0,.169-1.249,2.988,2.988,0,0,0-.738-2.072,6.591,6.591,0,0,0-2.128-1.476q-1.392-.651-4.286-1.787a18.748,18.748,0,0,1-7.267-3.831,7.72,7.72,0,0,1-2.326-5.819A14.158,14.158,0,0,1,213,40.7l.113-.51a13.3,13.3,0,0,1,5.422-8.231q4.285-3.064,11.1-3.064,6.357,0,9.594,2.7a9.258,9.258,0,0,1,3.235,7.521,18.547,18.547,0,0,1-.341,3.406l-.056.284h-9.082l.056-.284a9.859,9.859,0,0,0,.171-1.7q0-4.088-4.712-4.087a6.593,6.593,0,0,0-3.973,1.079,4.453,4.453,0,0,0-1.817,2.838l-.056.454a4.641,4.641,0,0,0-.114.851,2.617,2.617,0,0,0,1.22,2.3,18.193,18.193,0,0,0,4.116,1.787q6.074,1.874,8.741,4.486a8.755,8.755,0,0,1,2.669,6.527,19.01,19.01,0,0,1-.4,3.293l-.114.567a13.809,13.809,0,0,1-5.733,8.742q-4.541,3.181-11.523,3.179Q214.875,72.83,211.411,70.162Zm136.855,1.759,8.969-42.176H367L359.732,63.8h15.1l-1.76,8.117Zm-106.486,0,8.969-42.176h26l-1.7,8.06H258.809l-1.93,8.855H271.3l-1.589,7.607H255.289L253.246,63.8H269.82l-1.7,8.117Zm-130.156,0-3.917-15.213h-.284V71.922H91.075V29.689h16.349V43.824h.284l3.406-14.134H128.2L120.649,49.9v.284l8.23,21.74Zm79.014,0-.624-5.165h-5.962l-.68,5.165h-16.8l9.309-42.231h22.195L207.5,71.921ZM186.55,46.946l-1.079,8.344h3.066l-1.022-8.344-.454-3.917h-.114ZM150.279,71.921a41.876,41.876,0,0,1-.454-6.7V63.237a4.546,4.546,0,0,0-.68-2.583,2.407,2.407,0,0,0-2.045-.823h-.227v12.09H130.525V29.69h18.732q8.628,0,12.8,3.377t4.172,9.508v.907a13.6,13.6,0,0,1-1.562,6.755,8.042,8.042,0,0,1-4.738,3.8V54.1a6.3,6.3,0,0,1,4.342,3.377,15.662,15.662,0,0,1,1.391,6.84v3.009a13.462,13.462,0,0,0,.738,4.6Zm-3.406-22.194h.851a2,2,0,0,0,1.675-.766,5.062,5.062,0,0,0,.6-2.924v-.794a5.064,5.064,0,0,0-.6-2.924,2,2,0,0,0-1.675-.766h-.851Z"
                transform="translate(-52.079 -28.668)"
                fill="#fff"
              />
            </svg>
          </HeaderLogoContainer>

          {/* on PC */}
          <HeaderNavItemsContainer>
            <HeaderNavItems>
              <HeaderNavItemsNormal>
                <HeaderNavItemsSpan>We Are OKRA</HeaderNavItemsSpan>
              </HeaderNavItemsNormal>
              <HeaderNavItemsSubMenuContainer className="sub-menu">
                <HeaderNavItemsSubMenuItems className="sub-menu-items" to="/">
                  <HeaderNavItemsSubMenuItemsSpan>
                    OKRA
                  </HeaderNavItemsSubMenuItemsSpan>
                </HeaderNavItemsSubMenuItems>

                <HeaderNavItemsSubMenuItems className="sub-menu-items" to="/">
                  <HeaderNavItemsSubMenuItemsSpan>
                    Business
                  </HeaderNavItemsSubMenuItemsSpan>
                </HeaderNavItemsSubMenuItems>

                <HeaderNavItemsSubMenuItems className="sub-menu-items" to="/">
                  <HeaderNavItemsSubMenuItemsSpan>
                    Partners
                  </HeaderNavItemsSubMenuItemsSpan>
                </HeaderNavItemsSubMenuItems>

                <HeaderNavItemsSubMenuItems className="sub-menu-items" to="/">
                  <HeaderNavItemsSubMenuItemsSpan>
                    Contact US
                  </HeaderNavItemsSubMenuItemsSpan>
                </HeaderNavItemsSubMenuItems>
              </HeaderNavItemsSubMenuContainer>
            </HeaderNavItems>

            <HeaderNavItems>
              <HeaderNavItemsLink to="/">
                <HeaderNavItemsSpan>EVENTS</HeaderNavItemsSpan>
              </HeaderNavItemsLink>
            </HeaderNavItems>

            <HeaderNavItems>
              <HeaderNavItemsNormal>
                <HeaderNavItemsSpan>BRANDS</HeaderNavItemsSpan>
              </HeaderNavItemsNormal>
              <HeaderNavItemsSubMenuContainer className="sub-menu"></HeaderNavItemsSubMenuContainer>
            </HeaderNavItems>
          </HeaderNavItemsContainer>
        </HeaderNav>

        {/* on Mobile(Hamburger) */}
        <Hamburger audioPlay={audioPlay} audioPause={audioPause} />
      </HeaderBlock>
      <HeaderSpacer />
    </>
  );
};

export default Header;
