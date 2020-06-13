import React, { useState } from "react"
import {
  AddReviewpOPuP,
  TextInput,
  InputField,
  ActionButton,
  PopUpLauncher,
  ReviewLabel,
} from "./styles"
import StarRatings from "react-star-ratings"
import firebase from "../../../firebase"

const ReviewsView = ({ reviews, getData }) => {
  const [popUp, setPopUp] = useState(false)
  const [rating, setRating] = useState(0)
  const [review, setReview] = useState({})

  const changeRating = (newRating, name) => {
    setRating(newRating)
    setReview({ ...review, rating: newRating })
  }
  const handleRatingChange = e => {
    e.preventDefault()
    const { name, value } = e.target
    setReview({ ...review, [name]: value })
  }
  const writeFirestore = async () => {
    await firebase
      .firestore()
      .collection("client2db")
      .doc("cleaning")
      .update({
        reviews: [
          ...reviews,
          { ...review, createdAt: new Date().toDateString() },
        ],
      })
  }

  const handleReviewSubmit = e => {
    e.preventDefault()

    writeFirestore()
    getData()
  }

  return (
    <>
      <PopUpLauncher onClick={() => setPopUp(!popUp)}>
        Click to add your review
      </PopUpLauncher>
      {popUp && (
        <AddReviewpOPuP>
          <ReviewLabel>Rating</ReviewLabel>
          <StarRatings
            rating={rating}
            starRatedColor="#ffd700"
            starHoverColor="#ffd700"
            changeRating={changeRating}
            numberOfStars={5}
            name="rating"
            starDimension="30px"
          />
          <ReviewLabel>Name</ReviewLabel>
          <InputField type="text" name="name" onChange={handleRatingChange} />
          <ReviewLabel>Company</ReviewLabel>
          <InputField
            type="text"
            name="company"
            onChange={handleRatingChange}
          />
          <ReviewLabel>Role</ReviewLabel>
          <InputField type="text" name="role" onChange={handleRatingChange} />
          <ReviewLabel>Review</ReviewLabel>
          <TextInput
            placeholder="Enter your review"
            name="review"
            onChange={handleRatingChange}
          ></TextInput>
          <ActionButton>
            <button className="cancel" onClick={() => setPopUp(!popUp)}>
              Cancel
            </button>
            <button
              className="submit"
              onClick={e => {
                handleReviewSubmit(e)
                setPopUp(!popUp)
                getData()
              }}
            >
              Submit
            </button>
          </ActionButton>
        </AddReviewpOPuP>
      )}
    </>
  )
}

export default ReviewsView
