import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import PageContainer from '../components/page-container/PageContainer';
import {ReactComponent as AngularSvg} from '../svg/angular.svg';
import {ReactComponent as AwsSvg} from '../svg/aws.svg';
import {ReactComponent as CircleCISvg} from '../svg/circleci.svg';
import {ReactComponent as CSSSvg} from '../svg/css3.svg';
import {ReactComponent as FirebaseSvg} from '../svg/firebase.svg';
import {ReactComponent as GolangSvg} from '../svg/golang.svg';
import {ReactComponent as HTMLSvg} from '../svg/html5.svg';
import {ReactComponent as JavaScriptSvg} from '../svg/javascript.svg';
import {ReactComponent as KubeSvg} from '../svg/kubernets.svg';
import {ReactComponent as ReactSvg} from '../svg/react.svg';
import {ReactComponent as VueSvg} from '../svg/vue.svg';

const Skills = styled.div`
  position: absolute;
  top: -250px;
  font-family: 'Roboto Slab', serif;

  .row {
    margin-top: 20px;
    display: flex;
    align-items: center;

    svg {
      height: 40px;
      margin-right: 16px;
    }
  }

  .footer {
    margin-top: 20px;
    font-size: 12px;
  }
`;

const Resume = () => (
  <React.Fragment>
    <PageContainer>
      <Skills>
        <div className="row">
          <JavaScriptSvg />
          <GolangSvg />
          <HTMLSvg />
          <CSSSvg />
          Python*
        </div>
        <div className="row">
          <ReactSvg />
          <AngularSvg />
          <VueSvg />
          Ember*
        </div>
        <div className="row">
          <AwsSvg />
          <CircleCISvg />
          <FirebaseSvg />
          <KubeSvg />
        </div>
        <div className="footer">* not able to find a good enough svg</div>
      </Skills>its me
    </PageContainer>
  </React.Fragment>
);

export default Resume;
