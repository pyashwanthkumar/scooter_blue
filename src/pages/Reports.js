import { Box, Button, Typography } from "@mui/material"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Reports = () => {

    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        navigate('/report', {state : {
            test_name: "midterm"
        }})
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
            <Typography mt={10} variant='h4' color="#256" fontWeight="medium">Your Reports</Typography>
            <Box mt={3} width="25ch">
                <Button variant="outline" id="midterm" type="submit" onClick={handleSubmit}>
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