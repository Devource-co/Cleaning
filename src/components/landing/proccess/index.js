import React from 'react';
import { Container, H1, P, Proccesses, Sq1, Sq2, Sq3, Line1, Line2, H6, Space, Details } from './process.styles';

const Proccess = () => {
  return (
    <Container>
      <H1>It's as <span>easy as 1-2-3</span></H1>
      <P>We've taken great measures to build the easiest way to book a cleaning try it!</P>
      <Proccesses>
        <Sq1>1</Sq1>
        <Line1 />
        <Sq2>2</Sq2>
        <Line2 />
        <Sq3>3</Sq3>
      </Proccesses>
      <Details>
        <H6>Tell us about your place.</H6>
        <Space />
        <H6>Choose duaration and extra</H6>
        <Space />
        <H6>Fill your info and payments details. Your cleaner arrives on your desired time and you can enjoy a shiny place!</H6>
      </Details>
    </Container>
  );
}

export default Proccess;

