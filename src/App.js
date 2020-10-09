import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Clouds from './components/clouds/Clouds';
import Sidebar from './components/sidebar/Sidebar';
import AboutMe from './pages/AboutMe';
import Home from './pages/Home';
import Random from './pages/Random';
import Resume from './pages/Resume';
import styled from 'styled-components';
import {ReactComponent as MenuSvg} from './svg/menu.svg';
import {ReactComponent as SunSvg} from './svg/sun.svg';
import {ReactComponent as LinkedInSvg} from './svg/linkedin.svg';
import {ReactComponent as MailSvg} from './svg/mail.svg';

const Container = styled.div`
  background-color: #e6f7ff;
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

const Routes = [{
  path: '/about',
  page: <AboutMe />,
}, {
  path: '/resume',
  page: <Resume />,
}, {
  path: '/random',
  page: <Random />,
}, {
  path: '/',
  page: <Home />,
}];

function App() {
  // const [rotateIndex, setRotateIndex] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <Container className="App" >
      <Clouds height={600}>
        <Router>
          {!isSidebarOpen && <SidebarToggle onClick={() => setIsSidebarOpen(true)} />}
          <Icon>Z</Icon>
          <Contact>
            <LinkedInSvg onClick={() => {
              window.open('https://www.linkedin.com/in/zz3wang/', '_blank');
            }} />
            <MailSvg onClick={() => window.location.href = "mailto:wangzizhou96@gmail.com"}/>
          </Contact>
          <Sidebar
            isOpen={isSidebarOpen}
            closeSidebar={() => setIsSidebarOpen(false)}
            links={[
              <Link to="/" onClick={() => setIsSidebarOpen(false)}>Home</Link>,
              <Link to="/about" onClick={() => setIsSidebarOpen(false)}>About Me</Link>,
              <Link to="/resume" onClick={() => setIsSidebarOpen(false)}>Resume</Link>,
              <Link to="/random" onClick={() => setIsSidebarOpen(false)}>Random</Link>,
            ]}
            page={
              <Switch>
                {Routes.map((route) => (
                  <Route path={route.path}>
                    {route.page}
                  </Route>
                ))}
              </Switch>
            }
          />
        </Router>
      </Clouds>
    </Container>
  );
}

export default App;
