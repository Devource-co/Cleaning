import React from "react"
import ReactStars from "react-stars"
import Swiper from "react-id-swiper"
import { Container, BorderTitle, SlideView } from "./styles"
import StyledBackground from "../../shared/backgroundImage"
import AddReview from "./AddReview"

const ReviewsView = () => {
  const params = {
    // centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
  }
  return (
    <StyledBackground>
      <Container>
        <BorderTitle>What Our Clients Say</BorderTitle>
        <AddReview />
        <Swiper {...params}>
          <SlideView>
            <h3>Bonvic Bundi</h3>
            <ReactStars
              edit={false}
              value={4.6}
              count={5}
              size={24}
              color2={"#ffd700"}
            />
            <h5>Chef at Xyz hotel</h5>
            <p>
              No sólo sobrevivió 500 años, sino que tambien ingresó como texto
              de relleno en documentos electrónicos, quedando esencialmente
              igual al original. Fue popularizado en los 60s con la creación de
              las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum,
              y más recientemente con software de autoedición, como por ejemplo
              Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
            </p>
          </SlideView>
          <SlideView>
            <h3>Hezzy Hezzy</h3>
            <ReactStars
              edit={false}
              value={5}
              count={5}
              size={24}
              color2={"#ffd700"}
            />
            <h5>CEO at Abc company</h5>
            <p>
              No sólo sobrevivió 500 años, sino que tambien ingresó como texto
              de relleno en documentos electrónicos, quedando esencialmente
              igual al original. Fue popularizado en los 60s con la creación de
              las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum,
              y más recientemente con software de autoedición, como por ejemplo
              Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
            </p>
          </SlideView>
          <SlideView>
            <h3>Vesh vels</h3>
            <ReactStars
              edit={false}
              value={4}
              count={5}
              size={24}
              color2={"#ffd700"}
            />
            <h5>Janitor at xyz company</h5>
            <p>
              No sólo sobrevivió 500 años, sino que tambien ingresó como texto
              de relleno en documentos electrónicos, quedando esencialmente
              igual al original. Fue popularizado en los 60s con la creación de
              las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum,
              y más recientemente con software de autoedición, como por ejemplo
              Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
            </p>
          </SlideView>
        </Swiper>
      </Container>
    </StyledBackground>
  )
}

export default ReviewsView
