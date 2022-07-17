import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Question from '../components/Question'

const questionAndAnswer = [
    {id : 1, question : "What is a page?"},
    {id : 2, question : "What is a kernel?"},
    {id : 3, question : "Explain about Virtual Memory Unit?"},
]
const GiveTest = () => {
  return (
    <Box>
      <Typography mt={10} align="center" variant='h2' color="#256" fontWeight="medium">Mid Term</Typography>
      <Typography mt={1} align="center" variant='h4' color="#256" fontWeight="small">Fall - 2022 </Typography>
      <Typography mt={1} align="center" variant='h6' color="#256" fontWeight="small">Points: 100(2hr)  </Typography>

      <Box>
      <Question values={questionAndAnswer}/>
      </Box>
    </Box>
  )
}

export default GiveTest