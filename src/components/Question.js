import { Box, Button, FormControl, TextField, Typography } from '@mui/material'
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
    
    return (
        <Box mt={10}>
            <Typography variant='h6'>Question {questionIndex + 1}:</Typography>
            <Typography mt={2} variant='h6'>  {values.question}</Typography>
            <Box mt={2}>
                <TextField size="medium" fullWidth></TextField>
            </Box>
            <Box mt={3}>
            <Button variant="outlined" onClick={handleNextQuestion}>
                Next
            </Button>
            </Box>
        </Box>
    )
}

export default Question