import styled from '@emotion/styled';
import Img from'gatsby-image';
import mq from '../../../../utils/responsiveness';

export const Header = styled.header`
  background-color: #f5f5f5;
  min-height: 400px;
  position: relative;
`;

export const Container = styled.div`
  width: 100%;
  min-height: 400px;
  display: flex;
  ${mq({
    flexDirection: ['column', 'column', 'row']
  })};
  justify-content: space-around;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  ${mq({
    width: ['70%', '50%', '40%', '20%']
  })};
  & h1 {
    ${mq({
      fontSize: ['15px', '20px', '32px', '40px']
    })};
    font-weight: 600;
    color: #4040a0;
    margin-bottom: 10px;
  }
  & h6 {
    ${mq({
      fontSize: ['12px', '13px', '14px', '15px']
    })};
    // font-weight: 600;
    // color: #4040a0;
  }
`;

export const Image = styled(Img)`
  bottom: -3rem;
  z-index: 1;
  ${mq({
    width: ['200px','400px'],
    borderRadius: ['25px 5px 5px 5px', '40px 5px 5px 5px']
  })};
`;

export const BookButton = styled.button`
  background-color: #3e3ea1;
  color: #fff;
  margin-top: 2rem;
  border-radius: 2px;
  ${mq({
    padding: ['.5rem 1rem','.7rem 2rem'],
    fontSize: ['12px', '13px', '14px', '15px'],
  })};
`;
