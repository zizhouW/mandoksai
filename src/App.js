import React, { useState } from 'react';
import Zheng from './components/zheng/Zheng';
import Windmill from './components/windmill/Windmill';
import BalanceBall from './components/balance-ball/BalanceBall';
import Card from './components/card/Card';
import Clouds from './components/clouds/Clouds';
import Sidebar from './components/sidebar/Sidebar';
import styled from 'styled-components';
import {ReactComponent as MenuSvg} from './svg/menu.svg';

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
              { !isSidebarOpen && <SidebarToggle onClick={() => setIsSidebarOpen(true)} />}
              <Icon>Z</Icon>
              <Zheng color="blue"/>
              <BalanceBall />
              <BalanceBall />
              <BalanceBall />
              <BalanceBall />
              <BalanceBall />
              <BalanceBall />
              <BalanceBall />
              <BalanceBall />
              <BalanceBall />
              <BalanceBall />
            </Clouds>
            {/* <Windmill rotateIndex={rotateIndex} /> */}
          </React.Fragment>
        }
      />
    </Container>
  );
}

export default App;
