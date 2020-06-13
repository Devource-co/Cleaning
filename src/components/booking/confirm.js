import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
    padding: theme.spacing(2),
    '& > p': {
      width: "100%",
      fontSize: "18px",
      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(1),
    },
    '& > div': {
      margin: theme.spacing(.5),
      width: "100%",
      display: "flex",
      alignItems: "baseline",
      '& > h6': {
        lineHeight: 1.5,
        paddingRight:"3px",
        fontSize: "18px",
        color: "#0f1f40",
      },
      [theme.breakpoints.up('sm')]: {
        width: "47%",
      },
    },
  },
}));

function Confirm({ formData }) {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Typography>Please confirm your details below before submitting.</Typography>
      <div>
        <Typography variant="h6">Name: </Typography> <Typography>{ formData.name || "------" }</Typography>
      </div>
      <div>
        <Typography variant="h6">Email: </Typography> <Typography>{ formData.email || "------" }</Typography>
      </div>
      <div>
        <Typography variant="h6">Phone Number: </Typography> <Typography>{ formData.phoneNumber || "------" }</Typography>
      </div>
      <div>
        <Typography variant="h6">Address: </Typography> <Typography>{ formData.address || "------" }</Typography>
      </div>
      <div>
        <Typography variant="h6">Type: </Typography> <Typography>{ formData.type?.label || "------" }</Typography>
      </div>
      <div>
        <Typography variant="h6">Frequency: </Typography> <Typography>{ formData.frequency || "------" }</Typography>
      </div>
      <div>
        <Typography variant="h6">Estimated budget: </Typography> <Typography>{ formData.estimatedBudget || "------" }</Typography>
      </div>
      <div>
        <Typography variant="h6">Date: </Typography> <Typography>{ formData.date || "------" }</Typography>
      </div>
      <div>
        <Typography variant="h6">Additional information: </Typography> <Typography>{ formData.info || "------" }</Typography>
      </div>
    </Paper>
  )
}

export default Confirm
