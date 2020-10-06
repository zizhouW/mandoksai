import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

// Loading animation with 正
const Zheng = ({ color, animationDuration }) => {
  const [refreshCount, setRefreshCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setRefreshCount(refreshCount+1), 1750);
    return () => {
      clearInterval(interval);
    };
  })
  const strokeAnimationMap = {
    1: { from: { width: '0', height: '2px' }, to: { width: '30px', height: '2px' }},
    2: { from: { width: '2px', height: '0' }, to: { width: '2px', height: '26px' }},
    3: { from: { width: '0', height: '2px' }, to: { width: '12px', height: '2px' }},
    4: { from: { width: '2px', height: '0' }, to: { width: '2px', height: '16px' }},
    5: { from: { width: '0', height: '2px' }, to: { width: '34px', height: '2px' }},
  }
  const getTransfromKeyframes = (strokeOrder) =>
   {
    return keyframes`
      from {
        width: ${strokeAnimationMap[strokeOrder].from.width};
        height: ${strokeAnimationMap[strokeOrder].from.height};
      }
      to {
        width: ${strokeAnimationMap[strokeOrder].to.width};
        height: ${strokeAnimationMap[strokeOrder].to.height};
      }
    `;
  };
  const Container = styled.div`
    display: flex;
    position: relative;
    margin: auto;
    height: 50px;
    width: 50px;
    overflow: hidden;
  `;
  const Zheng1 = styled.div`
    position: absolute;
    top: 10px;
    left: 10px;
    height: 2px;
    display: inline;
    background-color: ${color};
    animation: ${getTransfromKeyframes(1)} ${animationDuration} ease .1s 1;
    animation-fill-mode: both;
  `;
  const Zheng2 = styled.div`
    position: absolute;
    top: 12px;
    left: 24px;
    width: 2px;
    display: inline;
    background-color: ${color};
    animation: ${getTransfromKeyframes(2)} ${animationDuration} ease .35s 1;
    animation-fill-mode: both;
  `;
  const Zheng3 = styled.div`
    position: absolute;
    top: 23px;
    left: 26px;
    height: 2px;
    display: inline;
    background-color: ${color};
    animation: ${getTransfromKeyframes(3)} ${animationDuration} ease .6s 1;
    animation-fill-mode: both;
  `;
  const Zheng4 = styled.div`
    position: absolute;
    top: 22px;
    left: 15px;
    width: 2px;
    display: inline;
    background-color: ${color};
    animation: ${getTransfromKeyframes(4)} ${animationDuration} ease .85s 1;
    animation-fill-mode: both;
  `;
  const Zheng5 = styled.div`
    position: absolute;
    bottom: 10px;
    left: 8px;
    height: 2px;
    display: inline;
    background-color: ${color};
    animation: ${getTransfromKeyframes(5)} ${animationDuration} ease 1.1s 1;
    animation-fill-mode: both;
  `;

  return (
    <Container>
      <Zheng1 />
      <Zheng2 />
      <Zheng3 />
      <Zheng4 />
      <Zheng5 />
    </Container>
  )
}

Zheng.propTypes = {
  color: PropTypes.string,
  animationDuration: PropTypes.string,
};

Zheng.defaultProps = {
  color: 'black',
  animationDuration: '.25s',
};

export default Zheng;