import React from 'react';
import { Header, Container, Content, Image, BookButton } from './main.styles';
import NavBar from '../navbar';
import { useImageQuery } from '../../../../hooks/useImagesQuery';

export default () => {
  const { cleaner } = useImageQuery()
  return (
    <Header>
      <NavBar />
      <Container>
        <Content>
          <h1>A clean place is a safe place</h1>
          <h6>SpectacleClean's proffessional cleaning and fumigation service makes cleaning day the best day of the week</h6>
          <BookButton>Book Now</BookButton>
        </Content>
        <div>
          <Image fluid={cleaner.childImageSharp.fluid} />
        </div>
      </Container>
    </Header>
  );
}
