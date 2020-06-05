import styled from '@emotion/styled';
import mq from '../../../utils/responsiveness';

export const Container = styled.div`
  background-color: #fafafa;
  width: 100%;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContainerInner = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 20vh;
  ${mq({
    width: ['90%', '85%', '80%', '75%'],
    flexDirection: ['column', 'row']
  })};
`;

export const AboutDetails = styled.div`
  width: 100%;
`;

export const AboutVideo = styled.div`
  width: 30%;
  margin-right: 2rem;
  & img {
    max-height: 500px;
  }
`;

export const BorderTitle = styled.h1`
    text-align: center;
    line-height: 20px;
    display: block;
    position: relative;
    padding: 15px 0;
    text-transform: uppercase;
    color: #2b2b2b;
    font-weight: 700;
    margin: 2rem 0;
    ${mq({
      fontSize: ['1rem', '1.25rem', '1.5rem'],
      margin: ['0', '0.5rem 0', '1rem 0'],
    })};
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 5px;
      width: 90px;
      background: #00c400;
    }
`;