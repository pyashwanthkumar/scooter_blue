import { Box, FormControl, FormControlLabel, InputLabel, Radio, RadioGroup } from '@mui/material'
import React, { useEffect, useState } from 'react'

const SelectField = (props) => {
    const {options} = props
    const [value, setValue] = useState(-1)
    const handleChange = (e) => {
        setValue(e.target.value)
    }

    useEffect(() => {
        props.updateAnswer(parseInt(value))
    }, [value])

    return (
        <Box width="75%">
            <FormControl size="small" fullWidth>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                    onChange={handleChange}
                    value={value}
                >
                    {options.map((data, id) => (
                        <FormControlLabel key={id} value={id} label={data.option} control={<Radio/>}>
                        </FormControlLabel>
                    ))}
                </RadioGroup>
            </FormControl>
        </Box>
    )
}

export default SelectField