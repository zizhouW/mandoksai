import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
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

const Page = styled.div`
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
  // background: #ccebff;
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
  // background: #ccebff;
`;

const Sidebar = ({page, isOpen, closeSidebar}) => (
  <React.Fragment>
    <SidebarEl isOpen={isOpen}>
      <CloseSidebarToggle onClick={closeSidebar} />
      <SidebarRoutes>
        <SidebarRoute>Home</SidebarRoute>
        <SidebarRoute>About Me</SidebarRoute>
        <SidebarRoute>Resume</SidebarRoute>
        <SidebarRoute>Random Stuff</SidebarRoute>
      </SidebarRoutes>
    </SidebarEl>
    <Page
      isOpen={isOpen}
      onClick={() => isOpen && closeSidebar()}
    >
      {page}
    </Page>
  </React.Fragment>
);

export default Sidebar;
