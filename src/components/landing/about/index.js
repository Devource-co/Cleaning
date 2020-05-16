import React from 'react';
import { Container, ContainerInner, BorderTitle, AboutDetails, AboutVideo } from './about.styles';

const about = () => {
  return (
    <Container>
      <ContainerInner>
        <AboutDetails>
        <BorderTitle>ABOUT OUR COMPANY</BorderTitle>
        <p>Choose our cleaners and they will do wonder to your offices or homes. here below are our abouts</p>
        <div>
          <h2>Our History</h2>
          <p>lorem ipsum blah blah</p>
        </div>
        <div>
          <h2>Our Mission</h2>
          <p>lorem ipsum blah blah</p>
        </div>
        <div>
          <h2>Our Vision</h2>
          <p>lorem ipsum blah blah</p>
        </div>
        </AboutDetails>
        <AboutVideo></AboutVideo>
      </ContainerInner>
    </Container>
  );
}

export default about;

