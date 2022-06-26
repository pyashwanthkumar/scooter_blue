import { FormControl, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const TextFieldComp = (props) => {
  const {label, type, required} = props
  const handleChange = () => {

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