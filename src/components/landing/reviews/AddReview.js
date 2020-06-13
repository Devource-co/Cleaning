import React, { useState } from "react"
import {
  ActionButton,
  PopUpLauncher,
  ReviewLabel,
} from "./styles"
import StarRatings from "react-star-ratings"
import firebase from "../../../firebase"
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    minWidth: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: `translate(-50%, -50%)`,
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column',
    "& > *": {
      margin: theme.spacing(1)
    },
  },
}));

const ReviewsView = ({ reviews, getData }) => {
  const [popUp, setPopUp] = useState(false)
  const [rating, setRating] = useState(0)
  const [review, setReview] = useState({})
  const rootRef = React.useRef(null);
  const classes = useStyles();

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
      <Typography style={{ textAlign: "center"}}>
        Ever used our services before? <PopUpLauncher onClick={() => setPopUp(true)}>
        Click here to add a review
      </PopUpLauncher>.
      </Typography>
        <Modal
          open={popUp}
          onClose={() => setPopUp(false)}
          aria-labelledby="reviews"
          aria-describedby="This the reviews modal"
          container={() => rootRef.current}
        >
          <div className={classes.paper}>
          <ReviewLabel>Rating (click on the stars)</ReviewLabel>
          <StarRatings
            rating={rating}
            starRatedColor="#ffd700"
            starHoverColor="#ffd700"
            changeRating={changeRating}
            numberOfStars={5}
            name="rating"
            starDimension="30px"
          />
          <TextField
            id="name"
            name="name"
            label="Name"
            type="text"
            variant="outlined"
            required
            onChange={handleRatingChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="email"
            name="email"
            label="Email"
            type="email"
            variant="outlined"
            required
            onChange={handleRatingChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="company"
            name="company"
            label="Company"
            type="text"
            variant="outlined"
            required
            onChange={handleRatingChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="info"
            name="info"
            label="Additional information"
            type="text"
            multiline
            rows={4}
            rowsMax={6}
            variant="outlined"
            onChange={handleRatingChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
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
          </div>
        </Modal>
    </>
  )
}

export default ReviewsView
