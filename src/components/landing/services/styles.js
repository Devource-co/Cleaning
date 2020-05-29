import styled from '@emotion/styled';
import mq from '../../../utils/responsiveness';

export const Container = styled.div`
  margin: 3rem auto;
  ${mq({
    width: ['90%', '85%', '80%', '75%']
  })};
`;

export const BorderTitle = styled.h1`
    text-align: center;
    line-height: 20px;
    display: flex;
    position: relative;
    padding: 15px 0;
    text-transform: uppercase;
    color: #2b2b2b;
    font-weight: 700;
    margin: 2rem 0;
    align-items: center;
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

export const ListServices = styled.ul`
    margin: 2rem 0;
    display: flex;
    flex-wrap: wrap;
`;

export const Service = styled.li`
  display: flex;
  padding: 1rem;
  width: 100%;
  ${mq({
    width: ['100%', '100%', '50%', '33.3333%']
  })};
`;

export const ServiceTitle = styled.div`
  font-weight: 700;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  ${mq({
    fontSize: ['14px', '16px', '18px'],
  })};
  margin: 1rem 0;
  & h2 {
    flex: 4;
  }
  &:hover {
    color: #00c400;
  }
`;

export const ServiceDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  width: 100%;
  background-color: #f5f5f5;
  border-radius: 5px;
`;

export const Content = styled.p`
  flex: 1 0 auto;
`;

export const Icon = styled.span`
  flex: 1;
  margin-right: .1rem;
  color: #00c400;
  ${mq({
    fontSize: ['26px', '28px', '32px'],
  })};
`;