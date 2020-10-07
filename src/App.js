import React, { useState } from 'react';
import Zheng from './components/zheng/Zheng';
import Windmill from './components/windmill/Windmill';
import BalanceBall from './components/balance-ball/BalanceBall';
import Card from './components/card/Card';
import Clouds from './components/clouds/Clouds';
import Sidebar from './components/sidebar/Sidebar';
import AboutMe from './pages/AboutMe';
import styled from 'styled-components';
import {ReactComponent as MenuSvg} from './svg/menu.svg';
import {ReactComponent as SunSvg} from './svg/sun.svg';
import {ReactComponent as LinkedInSvg} from './svg/linkedin.svg';
import {ReactComponent as MailSvg} from './svg/mail.svg';

const Container = styled.div`
  background-color: #ccebff;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: -1;
`;

const Icon = styled.div`
  position: fixed;
  font-family: 'Roboto Slab', serif;
  font-weight: 900;
  font-size: 40px;
  line-height: 40px;
  left: 0;
  display: inline-flex;
  margin: 18px 0 0 100px;
  user-select: none;
`;

const SidebarToggle = styled(MenuSvg)`
  cursor: pointer;
  width: 30px;
  fill: #666666;
  left: 0;
  margin: 24px 0 0 35px;
  position: fixed;

  &:hover {
    fill: #808080;
    outline: none;
  }
`;

const Contact = styled.div`
  position: absolute;
  top: 40px;
  right: 60px;
  display: flex;
  align-items: center;

  svg {
    height: 20px;
    cursor: pointer;
    &:not(:last-child) {
      margin-right: 35px;
    }
  }
`;


function App() {
  // const [rotateIndex, setRotateIndex] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <Container className="App" >
      <Sidebar
        isOpen={isSidebarOpen}
        closeSidebar={() => setIsSidebarOpen(false)}
        page={
          <React.Fragment>
            <Clouds height={600}>
              {!isSidebarOpen && <SidebarToggle onClick={() => setIsSidebarOpen(true)} />}
              <Icon>Z</Icon>
              <Contact>
                <LinkedInSvg onClick={() => {
                  window.open('https://www.linkedin.com/in/zz3wang/', '_blank');
                }} />
                <MailSvg onClick={() => window.location.href = "mailto:wangzizhou96@gmail.com"}/>
              </Contact>
              <AboutMe />
              {/* <Zheng color="blue"/>
              <BalanceBall />
              <BalanceBall />
              <BalanceBall />
              <BalanceBall />
              <BalanceBall />
              <BalanceBall />
              <BalanceBall />
              <BalanceBall />
              <BalanceBall />
              <BalanceBall /> */}
            </Clouds>
          </React.Fragment>
        }
      />
    </Container>
  );
}

export default App;
