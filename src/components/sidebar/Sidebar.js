import React from 'react';
import styled from 'styled-components';
import {ReactComponent as Close} from '../../svg/close.svg';

const CloseSidebarToggle = styled(Close)`
  cursor: pointer;
  width: 25px;
  fill: #666666;
  margin-top: 28px;
  display: block;

  &:hover {
    fill: #808080;
    outline: none;
  }
`;

const Pages = styled.div`
  margin-left: 300px;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  // transform: translateX(${props => props.isOpen ? '100px' : 0});
  // transition: transform .15s ease-out;
`;

const SidebarRoutes = styled.div`
  display: flex;
  flex-direction: column;
  margin: 200px 0 0 20px;
  font-family: 'Roboto Slab', serif;
  font-weight: 700;
  font-size: 24px;
`;

const SidebarRoute = styled.div`
  width: fit-content;
  text-decoration: none;
  cursor: pointer;
  box-sizing: border-box;
  // background: #e6f7ff;
  &:not(:last-child) {
    margin-bottom: 40px;
  }
`;

const SidebarEl = styled.div`
  width: 300px;
  height: 100vh;
  padding-left: 35px;
  position: fixed;
  left: ${props => props.isOpen ? 0 : '-300px'};
  transition: left .15s ease-out;
  z-index: 99;
  box-sizing: border-box;
  // background: #e6f7ff;
`;

const Sidebar = ({links, page, isOpen, closeSidebar}) => (
  <React.Fragment>
    <SidebarEl isOpen={isOpen}>
      <CloseSidebarToggle onClick={closeSidebar} />
      <SidebarRoutes>
        {links.map((link)=> (
          <SidebarRoute>{link}</SidebarRoute>
        ))}
      </SidebarRoutes>
    </SidebarEl>
    <Pages
      isOpen={isOpen}
      onClick={() => isOpen && closeSidebar()}
    >
      {page}
    </Pages>
  </React.Fragment>
);

export default Sidebar;
