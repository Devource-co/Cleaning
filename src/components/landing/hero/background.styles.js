import Img from'gatsby-image';
import styled from '@emotion/styled';

export const BGWrapper = styled.div`
  position: relative;
`;

export const BGImage = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${({ height, mobileHeight }) => 
    mobileHeight ? mobileHeight : height
  };
  z-index: 0;
`;

export const Content = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const Wave = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;
`;
