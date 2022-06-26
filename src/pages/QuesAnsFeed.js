import { Box, TextField, Typography } from '@mui/material'
import React from 'react'

const QuesAnsFeed = () => {
  return (
    <Box>
        <Typography variant='h6'>Question 1</Typography>
        <TextField fullWidth></TextField>
        <Typography variant='h6'>Answer 1</Typography>
        <TextField fullWidth></TextField>
        <Typography variant='h6'>Feedback</Typography>
        <TextField fullWidth></TextField>
    </Box>
  )
}

export default QuesAnsFeed