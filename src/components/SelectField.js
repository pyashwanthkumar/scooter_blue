import { Box, FormControl, InputLabel } from '@mui/material'
import React from 'react'

const SelectField = (props) => {
    const {label} = props
    return (
        <Box mt={3} width="75%">
            <FormControl size="small" fullWidth>
                <InputLabel>
                    {label}
                </InputLabel>
            </FormControl>
        </Box>
    )
}

export default SelectField