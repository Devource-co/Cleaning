import React from 'react';
import { Link } from 'gatsby';
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
          <Link to="/booking"><BookButton>Book Now</BookButton></Link>
        </Content>
        <div>
          <Image fluid={cleaner.childImageSharp.fluid} />
        </div>
      </Container>
    </Header>
  );
}
