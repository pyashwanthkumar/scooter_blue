import { Box, Button, Typography } from "@mui/material"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

export const GetTest = () => {

    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        navigate("/give-test", {
            state :{
                year: 2022,
                semester: "fall",
                test_name: "midterm"
            }
        })
    }

    return(
        <Box 
            component="form"
            sx={{
                '& .MuiTextField-root': { width: '25ch' },
            }}
            // onSubmit={handleSubmit}
            // noValidate
            autoComplete="off"
        >
            <Typography mt={10} variant='h4' color="#256" fontWeight="medium">Your Tasks</Typography>
            <Box mt={3} width="25ch">
                <Button variant="outline" type="submit" onClick={handleSubmit}>
                    <u>Midterm</u>
                </Button>
                <div></div>
                <Button variant="outline" type="submit">
                    <u>Assignment</u>
                </Button>
            </Box>
        </Box>
    )
}