import React, { useEffect, useState } from 'react'
import { Box, FormControl, TextField } from '@mui/material'

const OptionAndFeedback = React.forwardRef((props, ref) => {
    const {label, questionIndex} = props 
    const [choice, setChoice] = useState("")
    const [feedback, setFeedback] = useState("")

    // const updateOptions = async (label , choice, feedback) => {
    //     await props.updateOptions(label, choice, feedback)
    // }

    useEffect(() =>{
        props.updateOptions(label, choice, feedback)
    }, [choice, feedback])

    React.useImperativeHandle(ref, () => ({
        deleteState
      }));

    const deleteState = () => {
        setFeedback("")
        setChoice("")
    }

    const handleSubmit = () => {
        optAndFeedRef.current.choice = ""
        optAndFeedRef.current.feedback = ""
    } 

    const handleChange = async (e) => {
      const arr = e.target.id.split("_")
      switch(arr[0]){
          case "option":
              setChoice(e.target.value)
              break
          case "feedback":
              setFeedback(e.target.value)
              break
          default:
              return
      }
      // await updateOptions(arr[1], choice, feedback)
    }
    return (
        <Box mt={3} width="100%">
            <FormControl fullWidth>
                <TextField
                  id={"option_" + label}
                  value={choice}
                  onChange={handleChange}
                  variant="outlined"         
                  label={"option " + label}
                  size="small"        
                 />
                 <Box mt={1}></Box>
                <TextField
                  id={"feedback_" + label}  
                  value={feedback}
                  onChange={handleChange}
                  variant="outlined"
                  label={"feedback " + label}
                  size="small"        
                 />
            </FormControl>
        </Box>
      )
}
)
export default OptionAndFeedback