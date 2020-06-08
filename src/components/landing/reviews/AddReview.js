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

const ReviewsView = () => {
  const [popUp, setPopUp] = useState(false)
  const [rating, setRating] = useState(0)

  const changeRating = (newRating, name) => {
    setRating(newRating)
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
            starRatedColor="#00c400"
            starHoverColor="#4040a0"
            changeRating={changeRating}
            numberOfStars={5}
            name="rating"
            starDimension="30px"
          />
          <ReviewLabel>Rating</ReviewLabel>

          <InputField type="text" />
          <ReviewLabel>Name</ReviewLabel>
          <InputField type="text" />
          <ReviewLabel>Review</ReviewLabel>
          <TextInput placeholder="Enter your review"></TextInput>
          <ActionButton>
            <button className="cancel" onClick={() => setPopUp(!popUp)}>
              Cancel
            </button>
            <button className="submit" onClick={() => setPopUp(!popUp)}>
              Submit
            </button>
          </ActionButton>
        </AddReviewpOPuP>
      )}
    </>
  )
}

export default ReviewsView
