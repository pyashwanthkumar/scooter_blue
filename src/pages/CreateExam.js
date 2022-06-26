import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import SelectField from '../components/SelectField'
import TextFieldComp from '../components/TextFieldComp'

const CreateExam = () => {
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        navigate("/qaf", {
            test: {
                name:e.target.value
            }
        })
    }

    return (
        <Box 
            component="form"
            sx={{
                '& .MuiTextField-root': { width: '25ch' },
            }}
            onSubmit={handleSubmit}
            noValidate
            autoComplete="off"
            >
            <Typography mt={10} variant='h4' color="#256" fontWeight="medium">Test Creation Settings</Typography>
                <TextFieldComp name={this.handleData} required={true} label="Test Name" type="text" />
                <TextFieldComp time={this.handleData} label="Time" type="number"/>
                <TextFieldComp number={this.handleData} label="Number of question" type="number" />
                <TextFieldComp label="Total Points" type="number" />
                <Box mt={3} width="25ch">
                    <Button fullWidth variant="contained" type="submit">
                        Submit
                    </Button>
                </Box>

        </Box>
  )
}

export default CreateExam