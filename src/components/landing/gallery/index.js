import React from 'react'
import Swiper from 'react-id-swiper';
import { Container, BorderTitle, SlideView  } from './styles';
import Typography from '@material-ui/core/Typography';

const GalleryView = () => {
  const params = {
    effect: 'coverflow',
    grabCursor: true,
    spaceBetween: 5,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 30,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    },
    pagination: {
      el: '.swiper-pagination'
    }
  }
  return (
    <Container>
      <BorderTitle id="gallery">Gallery</BorderTitle>
      <Typography style={{ textAlign: "center"}}>Swipe through the gallery to view our work.</Typography>
      <Swiper {...params}>
        <SlideView  />
        <SlideView  />
        <SlideView />
        <SlideView  />
        <SlideView  />
        <SlideView  />
        <SlideView  />
      </Swiper>
    </Container>
  )
};

export default GalleryView;
