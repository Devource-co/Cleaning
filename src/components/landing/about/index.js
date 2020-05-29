import React, { useState } from 'react';
import { css } from 'emotion';
import {
  Container,
  ContainerInner,
  BorderTitle,
  AboutDetails,
  AboutVideo
} from './about.styles';
import Collapsable from './collapsable';
import data from '../../../data/about.data';

const About = () => {
  const [collapse, setCollapse] = useState({
    index: 1,
  });

  console.log(collapse);
  const toggle = index => setCollapse(state => ({ ...state, index: state.index === index ? null : index}));

  return (
    <Container>
      <ContainerInner>
        <AboutDetails>
        <BorderTitle>ABOUT OUR COMPANY</BorderTitle>
        <p className={css`
        padding: 1rem 0rem;
        `}>Choose our cleaners and they will do wonders to your offices or homes. here below are our abouts:</p>
          {data.map(({index, title, content}) => (
          <Collapsable 
            index={index}
            key={index}
            title={title}
            content={content}
            collapse={collapse}
            toggle={toggle}
            setCollapse={setCollapse}
            />))}
        </AboutDetails>
        <AboutVideo></AboutVideo>
      </ContainerInner>
    </Container>
  );
};

export default About;

