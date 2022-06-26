import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Question from '../components/Question'

const questionAndAnswer = [
    {id : 1, question : "What is the question"},
    {id : 2, question : "What is the next question"},
    {id : 3, question : "What is the next next question"},
]
const exam = () => {
  return (
    <Box>
      <Typography mt={10} variant='h2' color="#256" fontWeight="medium">Mid Term</Typography>
      <Box>
      <Question values={questionAndAnswer}/>
      </Box>
    </Box>
  )
}

export default exam