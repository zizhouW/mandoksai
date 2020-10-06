import React from 'react';
import styled, { keyframes } from 'styled-components';

// Meaningless widget
const Container = styled.div`
  display: flex;
  margin: auto;
  height: 400px;
  width: 300px;
  overflow: hidden;
`;

const seesaw = keyframes`
  0% {
    transform: rotate(35deg);
  }
  100% {
    transform: rotate(-35deg);
  }
`;

const Bar = styled.div`
  position: relative;
  width: 300px;
  height: 12px;
  margin-top: 250px;
  background-color: black;
  transform: rotate(-40deg);
  animation: ${seesaw} 1.5s ease-in-out 0s infinite alternate;
`;

const ballMovement = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(244px);
  }
  100% {
    transform: translateX(0);
  }
`;

const Ball = styled.div`
  position: absolute;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background-color: lightblue;
  bottom: 12px;
  left: 12px;
  transform: translateX(244px);
  animation: ${ballMovement} 3s ease-in-out 0s infinite;
`;

const BalanceBall = () => (
  <Container>
    <Bar>
      <Ball />
    </Bar>
  </Container>
);

export default BalanceBall;