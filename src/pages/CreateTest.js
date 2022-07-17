import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import TextFieldComp from '../components/TextFieldComp'
import axios from 'axios'
import { handleIdChange } from '../redux/CreateTestRed'

const CreateTest = () => {
    const navigate = useNavigate()
    
    const {
        name,
        year,
        semester,
        time,
        num_of_questions,
        points
      } = useSelector(state => state.create_test)

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios
            .post('http://0.0.0.0:3002/create-test',{
                name,
                year,
                semester,
                time,
                num_of_questions,
                points
            })
            .then((response) => {
                dispatch(handleIdChange(response.data._id))
                console.log("response" + response.data._id)
            })
            .catch((error) => {
                console.log("error" + error)
            })

        setTimeout(() => {  console.log("World!"); }, 10000);    
        navigate("/qaf")
    }

    const handleData = (e) => {
        console.log(e.target.value)
    }

    return (
        <Box 
            component="form"
            sx={{
                '& .MuiTextField-root': { width: '25ch' },
            }}
            onSubmit={handleSubmit}
            // noValidate
            autoComplete="off"
            >
            <Typography mt={10} variant='h4' color="#256" fontWeight="medium">Test Creation Settings</Typography>
                <TextFieldComp required={true} id="name" label="Test Name" type="text"/>
                <TextFieldComp required={true} id="year" label="Year" type="text" />
                <TextFieldComp required={true} id="semester" label="Semester" type="text" />
                <TextFieldComp required={true} id="time" label="Time" type="number"/>
                <TextFieldComp required={true} id="num_of_questions" label="Amount Of Questions" type="number" />
                <TextFieldComp required={true} id="points" label="Total Points" type="number" />
                <Box mt={3} width="25ch">
                    <Button fullWidth variant="contained" type="submit">
                        Next
                    </Button>
                </Box>

        </Box>
  )
}

export default CreateTest