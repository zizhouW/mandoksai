import React from 'react';
import styled, { keyframes } from 'styled-components';


const Container = styled.div`
  background-color: ${props => props.backgroundColor || 'white'};
  width: ${props => props.width || '50px'};
  height: ${props => props.height || '50px'};
  transition: .5s;
  color: ${props => props.height || 'black'};

  &:hover {
    width: ${props => props.widthExpanded || '50px'};
    height: ${props => props.heightExpanded || '50px'};
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.2);
  }
`;

const Card = ({ description, backgroundColor, color, width, height, widthExpanded, heightExpanded, children, onClick }) => {
  return (
    <Container
      backgroundColor={backgroundColor}
      color={color}
      width={width}
      height={height}
      widthExpanded={widthExpanded}
      heightExpanded={heightExpanded}
      onClick={onClick}
    >
      {description}
      {children}
    </Container>
  )
}

export default Card;