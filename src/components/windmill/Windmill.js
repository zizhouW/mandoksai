import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import {ReactComponent as WindmillSvg} from '../../svg/windmill.svg';

const windmillKeyframes = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const WindmillStyled = styled(WindmillSvg)`
  width: 100px;

  polygon {
    transform: rotate(${props => (props.rotateIndex || 1) * 30}deg);
    transform-origin: 50% 40%;
  }
`;

const Windmill = ({ rotateIndex }) => (
  <WindmillStyled rotateIndex={rotateIndex} />
);

export default Windmill;
