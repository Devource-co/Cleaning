import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    '& > *': {
      margin: theme.spacing(1),
      width: "100%",
      [theme.breakpoints.up('sm')]: {
        width: "47%",
      },
    }
  },
}));

function PersonalDetails({ setFormData, formData }) {
  const classes = useStyles();
  const handleInputChange = e => {
    e.preventDefault()
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }
  return (
    <Paper component="form" className={classes.root} elevation={0}>
      <TextField
        id="name"
        name="name"
        label="Full name"
        variant="outlined"
        type="text"
        required
        value={formData.name}
        onChange={handleInputChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="email"
        name="email"
        label="Email"
        type="email"
        required
        value={formData.email}
        variant="outlined"
        onChange={handleInputChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="phoneNumber"
        name="phoneNumber"
        label="Phone number"
        variant="outlined"
        type="phone"
        value={formData.phoneNumber}
        onChange={handleInputChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="address"
        label="Address"
        type="address"
        name="address"
        variant="outlined"
        required
        value={formData.address}
        onChange={handleInputChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Paper>
  )
}

export default PersonalDetails
