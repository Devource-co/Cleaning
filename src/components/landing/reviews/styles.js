import styled from '@emotion/styled';
import mq from '../../../utils/responsiveness';

export const Container = styled.div`
  margin: 1rem auto 0;
  ${mq({
    width: ['90%', '85%', '80%', '75%']
  })};
  padding: 1rem 0 .5rem;
  position: relative;
  color: white;
`;

export const BorderTitle = styled.h1`
    text-align: left;
    line-height: 20px;
    display: flex;
    position: relative;
    padding: 15px 0;
    text-transform: uppercase;
    color: white;
    font-weight: 700;
    margin: 2rem 0;
    align-items: flex-start;
    justify-content: center;
    ${mq({
      fontSize: ['1rem', '1.25rem', '1.5rem'],
      margin: ['0', '0.5rem 0', '1rem 0'],
    })};
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      height: 5px;
      width: 90px;
      background: #00c400;
    }
`;

export const SlideView = styled.div`
    min-height: 10rem;
    height: auto;
    margin: 2rem 0 !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
    & p {
      width: 70%;
      margin: 0 auto;
    }
`;
