import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
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
    },
  },
}));

function BookingDetails({ frequencyOptions, typeOptions, setFormData, formData }) {
  const classes = useStyles();
  const handleInputChange = e => {
    e.preventDefault()
    const { name, value } = e.target
    if(name === 'type') {
      setFormData(prevState => ({ ...prevState, type: JSON.parse(value) }))
    } else {
      setFormData(prevState => ({ ...prevState, [name]: value }))
    }
  }
  return (
    <Paper component="form" className={classes.root} elevation={0}>
      <FormControl variant="outlined">
        <InputLabel shrink id="type">Type</InputLabel>
        <Select
          labelId="type"
          id="type"
          value={JSON.stringify(formData.type)}
          defaultValue={`{"label":"office cleaning & janitorial services","value":"standard"}`}
          onChange={handleInputChange}
          label="Type"
          required
          name="type"
        >
          { typeOptions.map(({ label, value }, id) => (<MenuItem key={id} value={`{"label":"${label}","value":"${value}"}`}>{ label }</MenuItem>)) }
        </Select>
      </FormControl>
      <FormControl variant="outlined">
        <InputLabel shrink id="frequency">Frequency</InputLabel>
        <Select
          labelId="frequency"
          defaultValue="once"
          id="frequency"
          name="frequency"
          required
          value={formData.frequency}
          onChange={handleInputChange}
          label="Frequency"
        >
          { frequencyOptions.map(({ label, value }, id) => (<MenuItem key={id} value={value}>{ label }</MenuItem>)) }
        </Select>
      </FormControl>
      <TextField
        id="estimatedBudget"
        name="estimatedBudget"
        value={formData.estimatedBudget}
        label="Estimated budget"
        type="number"
        variant="outlined"
        required
        onChange={handleInputChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="date"
        name="date"
        label="Date"
        type="date"
        required
        value={formData.date}
        variant="outlined"
        onChange={handleInputChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="info"
        name="info"
        label="Additional information"
        type="text"
        value={formData.info}
        multiline
        rows={4}
        rowsMax={6}
        variant="outlined"
        onChange={handleInputChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Paper>
  )
}

export default BookingDetails

