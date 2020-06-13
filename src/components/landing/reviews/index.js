import React, { useEffect, useState } from "react"
import ReactStars from "react-stars"
import Swiper from "react-id-swiper"
import { Container, BorderTitle, SlideView } from "./styles"
import StyledBackground from "../../shared/backgroundImage"
import AddReview from "./AddReview"
import firebase from "../../../firebase"

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
  const [data, setData] = useState(false)
  const getData = async () => {
    await firebase
      .firestore()
      .collection("client2db")
      .get()
      .then(querySnapshot => {
        const result = querySnapshot.docs.map(doc => doc.data())

        setData(result[0])
      })
  }

  useEffect(() => {
    getData()
  }, [])
  const reviews = data && data.reviews
  return (
    <StyledBackground>
      <Container>
        <BorderTitle>What Our Clients Say</BorderTitle>
        <AddReview getData={getData} reviews={reviews || []} />
        {reviews ? (
          <Swiper {...params}>
            {reviews.map(review => (
              <SlideView>
                <h3>{review.name}</h3>
                <ReactStars
                  edit={false}
                  value={review.rating}
                  count={5}
                  size={30}
                  color={"#ffd700"}
                />
                <h5>
                  {review.role} at {review.company}
                </h5>
                <p>{review.review}</p>
              </SlideView>
            ))}
          </Swiper>
        ) : (<SlideView>
        <p>No reviews left for now, please come back later or be the first one to review.</p>
      </SlideView>)
        }
      </Container>
    </StyledBackground>
  )
}

export default ReviewsView
