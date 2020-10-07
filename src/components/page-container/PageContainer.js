import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  height: ${props => props.height};
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  z-index: 1;
  height: 100%;
  width: 70%;
  padding: 20px;
  margin-top: 250px;
  // background-color: white;
`;

const PageContainer = ({children, height}) => (
  <Container height={height}>
    <Content>{children}</Content>
  </Container>
);

PageContainer.propTypes = {
  children: PropTypes.node,
  height: PropTypes.string,
};

PageContainer.defaultProps = {
  children: null,
  height: '100px',
};

export default PageContainer;
