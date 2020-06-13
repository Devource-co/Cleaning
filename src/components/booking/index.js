import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import firebase from "../../firebase"
import PersonalDetails from './personalDetails';
import BookingDetails from './bookingDetails';
import NavBar from "../shared/Header"
import Confirm from './confirm';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  cont: {
    [theme.breakpoints.down('sm')]: {
      width: "100%",
      padding: 0,
      paddingTop: "3rem",
    },
  }
}));

const typeOptions = [
  { label: "office cleaning & janitorial services", value: "standard" },
  { label: "carpet cleaning", value: "move in/ move out" },
  { label: "post construction", value: "deep" },
  { label: "Commercial Cleaning", value: "standard" },
  { label: "Industrial Cleaning", value: "deep" },
  { label: "Hospitality Cleaning", value: "standard" },
  { label: "Hotel Housekeeping", value: "standard" },
  { label: "Apartment & Condo Building Cleaning", value: "standard" },
  { label: "Pub & Restaurant Cleaning", value: "standard" },
  { label: "School & Montessori Cleaning", value: "standard" },
  { label: "Fumigation & Pest Control", value: "deep" },
]

const frequencyOptions = [
  { label: "once", value: "once" },
  { label: "daily", value: "daily" },
  { label: "weekly", value: "weekly" },
  { label: "bi weekly", value: "bi weekly" },
  { label: "monthly", value: "monthly" },
]

function getSteps() {
  return ['Please fill your personal details', 'Create a booking', 'Confirm Details & Submit the form'];
}

export default function VerticalLinearStepper() {
  const [formData, setFormData] = useState({
    type: {label:"office cleaning & janitorial services", value:"standard"},
    frequency : "once",
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    estimatedBudget: "",
  })
  const [bookingData, setBookingData] = useState([])
  let errors;
  const [error, setError] = useState(false);
  const [startDate ] = useState(new Date())
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  useEffect(() => {
    getFirestoreData()
  }, [])

  const getFirestoreData = async () => {
    await firebase
      .firestore()
      .collection("client2db")
      .get()
      .then(querySnapshot => {
        const result = querySnapshot.docs.map(doc => doc.data())
        setBookingData(result)
      })
  }

  const writeFirestore = async () => {
    await firebase
      .firestore()
      .collection("client2db")
      .doc("cleaning")
      .update({
        bookings: [
          ...bookingData[0].bookings,
          { ...formData, createdAt: startDate.toDateString() },
        ],
      })
  }

  const handleBookingSubmit = e => {
    setError(false);
    errors=false
    Object.values(formData).forEach((value) => {
      if(!value) {
        setError(true);
        errors=true
        return;
      }
    })

    if(!errors) {
      writeFirestore()
      getFirestoreData()
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  }
  console.log(bookingData)
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <PersonalDetails setFormData={setFormData} formData={formData} />;
      case 1:
        return <BookingDetails setFormData={setFormData} formData={formData} frequencyOptions={frequencyOptions} typeOptions={typeOptions} />;
      case 2:
        return <Confirm formData={formData} error={error} />;
      default:
        return 'Unknown step';
    }
  }

  const handleNext = (e) => {
    e.preventDefault()
    if(activeStep === steps.length - 1) {
      handleBookingSubmit(e);
      return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setFormData({
      type: {label:"office cleaning & janitorial services", value:"standard"},
      frequency : "once",
      name: "",
      email: "",
      phoneNumber: "",
      address: "",
      estimatedBudget: "",
    })
  };

  return (
    <>
    <NavBar />
    <Container>
      <Stepper className={classes.cont} activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <form>
              <div>{getStepContent(index)}</div>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    type="submit"
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
              </form>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>Successful received your booking information, we'll get back to you as soon as possible</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </Container>
    </>
  );
}
