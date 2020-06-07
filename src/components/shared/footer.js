import React from 'react';
import styled from '@emotion/styled';
import { css } from 'emotion';
import mq from '../../utils/responsiveness';
import { FaFacebookSquare, FaTwitter, FaInstagramSquare } from 'react-icons/fa';

const Container = styled.div`
  margin: 3rem auto 0;
  ${mq({
    width: ['90%', '85%', '80%', '75%']
  })};
  padding: 5rem 0 .5rem;
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mq({
    flexDirection: ['column', 'row']
  })};
`;

const FootEl = styled.h6`
${mq({
  fontSize: ['10px', '12px', '14px'],
  margin: ['8px 0', '12px 5px'],
  })};
`;

const FirstCont = styled.div`
  display: flex;
  flex-direction: column;
`;

const Logo = styled.div`
 & h2 {${mq({
  fontSize: ['1rem', '1.125rem', '1.25rem'],
  })};
}
  & h6 {
    font-size: 14px;
    color: #00c400;
  }
`;

const Contact = styled.div`
  margin: 1rem 0;
  font-size: 14px;
`;

const SecondCont = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  width: 100px;
  & a {
    &:hover {
      color: #00c400;
    }
  }
`;

const Footer = () => {
  return (
    <div className={css`
    width: 100%;
    background-color: #1c171b;
    color: white;
    `}>
      <Container>
        <Section>
          <FirstCont>
            <Logo>
              <h2>SpectacleClean</h2>
              <h6>Happiness is a clean place</h6>
            </Logo>
            <Contact>
              <h6>Nairobi , Kenya</h6>
              <h6>PO Box 62085-00200, Kenya.</h6>
              <h6>+254 741 092 840 / +254 774 592 916</h6>
              <h6>spectacleclean@gmail.com</h6>
            </Contact>
          </FirstCont>
          <SecondCont>
            <a href="#"><FaFacebookSquare /></a>
            <a href="#"><FaInstagramSquare /></a>
            <a href="#"><FaTwitter /></a>
          </SecondCont>
        </Section>
        <Section>
          <FootEl>&copy;{new Date().getFullYear()} SpectacleClean. All rights Reserved</FootEl>
          <FootEl>Terms of service | Privacy Policy</FootEl>
        </Section>
      </Container>
    </div>
  )
};

export default Footer;
