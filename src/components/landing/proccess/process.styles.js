import styled from '@emotion/styled';
import mq from '../../../utils/responsiveness';

export const Container = styled.div`
  margin: 1rem auto;
  margin-top: 8rem;
  ${mq({
    width: ['90%', '85%', '80%', '75%']
  })};
`;

export const H1 = styled.h1`
  text-align: center;
  margin: 2rem 0;
  ${mq({
    fontSize: ['20px', '24px', '32px'],
    margin: ['1rem 0', '2rem 0']
  })};
  & span {
    font-weight: 600;
  }
`;

export const P = styled.p`
  text-align: center;
  ${mq({
    fontSize: ['15px', '17px', '20px']
  })};
`;

export const Proccesses = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  align-items: center;
  justify-content: space-between;
  ${mq({
    marginTop: ['2rem', '3rem', '4rem'],
    width: ['90%', '75%', '60%'],
  })};
`;

export const Sq1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-radius: 10px;
  background-color: #00c400;
  ${mq({
    width: ['40px', '60px', '70px'],
    height: ['40px', '60px', '70px'],
    fontSize: ['20px', '24px', '32px'],
  })};
`;

export const Sq2 = styled.div`
  height: 70px;
  width: 70px;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-radius: 10px;
  background-color: #4040a0;
  ${mq({
    width: ['40px', '60px', '70px'],
    height: ['40px', '60px', '70px'],
    fontSize: ['20px', '24px', '32px'],
  })};
`;

export const Sq3 = styled.div`
  height: 70px;
  width: 70px;
  font-size: 2rem;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #0ba30b;
  border-radius: 10px;
  background-color: rgba(87, 255, 123, 0.2);
  ${mq({
    width: ['40px', '60px', '70px'],
    height: ['40px', '60px', '70px'],
    fontSize: ['20px', '24px', '32px'],
  })};
`;

export const Line1 = styled.span`
  flex: 1;
  border: 2px dashed #dbdbdb;
  transform: rotate(-2deg);
`;

export const Line2 = styled.span`
  flex: 1;
  border: 2px dashed #dbdbdb;
  transform: rotate(1.5deg);
`;

export const Details = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  justify-content: space-between;
  ${mq({
    marginTop: ['0.5rem', '0.8rem', '1rem'],
    width: ['100%', '85%', '70%'],
    fontSize: ['11px', '14px', '16px'],
  })};
`;

export const H6 = styled.h6`
  flex: 1;
  text-align: center;
  font-weight: 500;
  color: #84968b;
`;

export const Space = styled.span`
 flex: 0.1;
`;
