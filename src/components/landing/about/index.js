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
        `}>SpectacleClean was established in 2019 and has over the years evolved to become a
        specialized cleaning and fumigation service provider in Kenya. It is one of the wholly citizen owned commercial
         and domestic cleaning and fumigation establishment in Kenya currently. SpectacleClean and Fumigation
         services has extensive experience in cleaning and fumigation of all kinds of related properties such as
         schools, industrial buildings, hotels, shopping malls, governemnt and private offices, hospitals, banks and more.</p>
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

