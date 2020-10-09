import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import {ReactComponent as CloudSvg} from '../../svg/cloud.svg';
import {ReactComponent as Cloud2Svg} from '../../svg/cloud-2.svg';
import PropTypes from 'prop-types';

const cloudAnimation = (containerWidth, width) => keyframes`
  from {
    right: -${width};
  }
  to {
    right: ${containerWidth};
  }
`;

const Cloud = styled(CloudSvg)`
  width: ${props => (props.widthMultiplier) * 100}px;
  fill: white;
  stroke: ${props => props.strokeColor};
  animation: ${props => cloudAnimation(props.containerWidth, `${(props.widthMultiplier) * 100}px`)} ${props => props.animationDuration}s linear 0s 1 forwards;
  top: ${props => props.y}px;
  right: -${props => (props.widthMultiplier) * 100}px;
  position: fixed;
  transform: scaleX(${props => props.scaleX});
`;

const Cloud2 = styled(Cloud2Svg)`
  width: ${props => (props.widthMultiplier) * 100}px;
  fill: white;
  stroke: ${props => props.strokeColor};
  animation: ${props => cloudAnimation(props.containerWidth, `${(props.widthMultiplier) * 100}px`)} ${props => props.animationDuration}s linear 0s 1 forwards;
  top: ${props => props.y}px;
  right: -${props => (props.widthMultiplier) * 100}px;
  position: fixed;
  transform: scaleX(${props => props.scaleX});
`;

const Children = styled.div`
  z-index: 0;
`;

const Container = styled.div`
  width: ${props => props.width};
  height: 100vh;
  position: relative;
  overflow-y: visible;
  overflow-x: hidden;
  background-color: #e6f7ff;
  // z-index: -1;
`;

const Kirby = styled.img`
  width: 200px;
  animation: ${props => cloudAnimation(props.containerWidth, '200px')} ${props => props.animationDuration / 4}s linear 0s 1 forwards;
  top: ${props => props.y}px;
  position: absolute;
`;

const generateCloudORKirby = (sizeMultiplier, containerWidth, height, animationDuration, lastY, strokeColor) => {
  const animationDurationRandomizer = Math.random() / 2 + 0.75; // 0.75-1.25
  const sizeRandomizer = Math.random() / 2 + 0.75; // 0.75-1.25
  const cloudRandomizer = Math.ceil(Math.random() * 2); // 1 or 2
  const scaleXRandomizer = Math.ceil(Math.random() * 2) - 1 || -1;
  const isReturnKirby = Math.random() >= 0.99; // 1% chance of kirby instead
  var y = 0;
  while (y < 10 || y >= height - 110 || Math.abs(y-lastY) <= 100) {
    y = Math.ceil(Math.random() * (height - 100));
  }
  if (isReturnKirby) {
    return {
      el: <Kirby containerWidth={containerWidth} y={y} animationDuration={animationDuration} src="images/kirby.gif"/>,
      y,
    };
  }
  const cloudOptions = {
    1: <Cloud
          widthMultiplier={sizeMultiplier * sizeRandomizer}
          containerWidth={containerWidth}
          y={y}
          scaleX={scaleXRandomizer}
          animationDuration={animationDurationRandomizer * animationDuration}
          strokeColor={strokeColor}
        />,
    2: <Cloud2
          widthMultiplier={sizeMultiplier * sizeRandomizer}
          containerWidth={containerWidth}
          y={y}
          scaleX={scaleXRandomizer}
          animationDuration={animationDurationRandomizer * animationDuration}
          strokeColor={strokeColor}
        />,
  };
  return {
    el: cloudOptions[cloudRandomizer],
    y,
  };
};

const Clouds = ({period, sizeMultiplier, width, height, animationDuration, strokeColor, children}) => {
  const [clds, setClouds] = useState([]);
  useEffect(() => {
    if (clds.length === 0) {
      setClouds(clds.concat([generateCloudORKirby(sizeMultiplier, width, height, animationDuration, 0, strokeColor)]));
    }
    const cloudInterval = setInterval(() => {
      setClouds(clds.concat([generateCloudORKirby(sizeMultiplier, width, height, animationDuration, clds[clds.length-1].y, strokeColor)]));
    }, 1000 * period);

    return () => {
      clearInterval(cloudInterval);
    };
  }, [clds, period, sizeMultiplier, width, height, animationDuration, strokeColor]);
  return (
    <Container width={width} height={height}>
      {clds.map((cloud, idx) => {
        if (idx > clds.length - Math.ceil(animationDuration / period) * 2) {
          return cloud.el;
        }
        return;
      })}
      <Children>{children}</Children>
    </Container>
  )
}

Clouds.propTypes = {
  period: PropTypes.number,
  sizeMultiplier: PropTypes.number,
  width: PropTypes.string,
  // only accepts a number in px
  height: PropTypes.number,
  animationDuration: PropTypes.number,
  strokeColor: PropTypes.string,
}

Clouds.defaultProps = {
  period: 5,
  sizeMultiplier: 1,
  width: '100vw',
  height: 500,
  animationDuration: 50,
  strokeColor: '#e6f7ff',
}

export default Clouds;
