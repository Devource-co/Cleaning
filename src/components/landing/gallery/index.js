import React from 'react'
import Swiper from 'react-id-swiper';
import { Container, BorderTitle, SlideView  } from './styles';

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
