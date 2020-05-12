import React from 'react';
import { BGWrapper, BGImage } from './background.styles';
import { useImageQuery } from '../../../hooks/useImagesQuery';
import Content from './content';

export default () => {
  const { banner, waves } = useImageQuery();

  return (<BGWrapper>
    <BGImage
      title="hero image"
      alt="hero image"
      fluid={banner.childImageSharp.fluid}
    />
    <Content wave={waves.publicURL} />
  </BGWrapper>)
};
