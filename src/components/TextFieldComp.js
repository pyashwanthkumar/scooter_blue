import { Box, FormControl, TextField } from '@mui/material'
import { useDispatch } from 'react-redux'
import React, {useState} from 'react'
import {handleTestnameChange, handleYearChange,handleSemesterChange, handleTimeChange, handleNumOfQuestionsChange, handlePointsChange} from "../slices/create_test.slice"

const TextFieldComp = (props) => {

  const {label, id, type, required} = props
  const dispatch = useDispatch()
  const [value, setValue] = useState("")

  const handleChange = (e) => {
    setValue(e.target.value)
    switch(id){
        case "name":
            dispatch(handleTestnameChange(e.target.value))
            break
        case "year":
            dispatch(handleYearChange(Number(e.target.value)))
            break
        case "semester":
            dispatch(handleSemesterChange(e.target.value))
            break
        case "time":
            dispatch(handleTimeChange(e.target.value))
            break
        case "num_of_questions":
            dispatch(handleNumOfQuestionsChange(Number(e.target.value)))
            break
        case "points":
            dispatch(handlePointsChange(Number(e.target.value)))
            break
        default:
            return
    }
  }

  return (
    <Box mt={3} width="100%">
        <FormControl fullWidth>
            <TextField
              onChange={handleChange}
              variant="outlined"
              required={required}
              label={label}
              type={type}
              size="small"        
             />
        </FormControl>
    </Box>
  )
}

export default TextFieldComp