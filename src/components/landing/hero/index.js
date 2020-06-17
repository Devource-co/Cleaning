import React from 'react';
import { Link } from 'gatsby';
import { Header, Container, Content, Image, BookButton } from './main.styles';
import NavBar from '../../shared/Header';
import heroImage from '../../../images/try.svg';

export default () => {
  return (
    <Header>
      <NavBar />
      <Container>
        <Content>
          <h1>A clean place is a safe place</h1>
          <h6>Cresit's professional cleaning services makes cleaning day the best day of the week</h6>
          <Link to="/booking"><BookButton>Book Now</BookButton></Link>
        </Content>
        <div>
          <Image src={heroImage} />
        </div>
      </Container>
    </Header>
  );
}
