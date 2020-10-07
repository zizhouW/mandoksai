import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import PageContainer from '../components/page-container/PageContainer';
import {ReactComponent as CookieSvg} from '../svg/cookie.svg';
import {ReactComponent as CookieBiteSvg} from '../svg/cookie-bite.svg';
import {ReactComponent as CookieBitesSvg} from '../svg/cookie-bites.svg';

const CookiesAnimation = keyframes`
  25% {
    transform: translate(0, 8px);
  }
  50% {
    transform: translate(8px, 8px);
  }
  75% {
    transform: translate(8px, 0);
  }
  100% {
    transform: translate(0, 0);
  }
`;

const Cookie = styled(CookieSvg)`
  width: 50px;
  height: 50px;
  &:active {
    animation: ${CookiesAnimation} .05s linear 0s;
  }
`;

const CookieBite = styled(CookieBiteSvg)`
  width: 50px;
  height: 50px;
  &:active {
    animation: ${CookiesAnimation} .05s linear 0s;
  }
`;

const CookieBites = styled(CookieBitesSvg)`
  width: 50px;
  height: 50px;
  &:active {
    animation: ${CookiesAnimation} .05s linear 0s;
  }
`;

const Intro = styled.div`
  font-family: 'Roboto Slab', serif;
  margin: 0 auto;
  .title {
    user-select: none;
    font-weight: 900;
    font-size: 100px;
  }
  .cookie {
    margin-top: 16px;
    cursor: pointer;
  }
`;

const AboutMe = () => {
  const [cookieClickCount, setCookieClickCount] = useState(0);
  const getCookieByClickCount = () => {
    switch (cookieClickCount) {
      case 0: {
        return <Cookie />;
      }
      case 1: {
        return <CookieBite />;
      }
      case 2: {
        return <CookieBites />;
      }
    };
    return null;
  }
  return (
    <PageContainer>
      <Intro>
        <div className="title">Welcome!</div>
        <div className="subtitle">{cookieClickCount <= 2 ? `here's a cookie` : 'oh damn..'}</div>
        {cookieClickCount <= 2 && (
          <div className="cookie" onClick={() => setCookieClickCount(cookieClickCount+1)}>
            {getCookieByClickCount()}
          </div>)}
      </Intro>
    </PageContainer>
  )
};

export default AboutMe;
