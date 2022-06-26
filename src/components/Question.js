import { Button, FormControl, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Question = (props) => {
    const {values} = props    
    const [questionIndex, setQuestionIndex] = useState(0)
    const navigate = useNavigate()

    const handleNextQuestion = (e) => {
        if(questionIndex + 1 < values.length){
            setQuestionIndex(questionIndex + 1)
        }else{
            navigate("/finish")
        }
    }
    console.log(questionIndex)
    return (
        <Box mt={10}>
            <Typography variant='h6'>Question {questionIndex + 1}  {values[questionIndex].question}</Typography>
            <TextField fullWidth></TextField>
            <Button onClick={handleNextQuestion}>
                Next
            </Button>
        </Box>
    )
}

export default Question