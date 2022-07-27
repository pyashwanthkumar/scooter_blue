import { Box, CircularProgress, TextField, Typography, Button } from '@mui/material'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useGetTestQuery } from '../apis/getTest.api'
import { useGiveTestMutation } from '../apis/giveTest.api'
import SelectField from '../components/SelectField'

const GiveTest = () => {

    const {state} = useLocation()
    const {data, isError, isLoading, isSuccess, } = useGetTestQuery(state)
    const [answers, setAnswers] = useState([])
    const [giveTest] = useGiveTestMutation()
    const navigate = useNavigate()
    
    if(isLoading){
        return(
            <Box mt={20}>
                <CircularProgress/>
            </Box>
        )
    }

    const toTitleCase = (str) => {
        return str.replace(
          /\w\S*/g,
          function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          }
        );
    }

    const handleSubmit = () => {
        const request = {
            test_name: data.name,
            student_name: "Yashwanth",
            student_id: 1212,
            semester: data.semester,
            year:data.year,
            subject: "OS",
            answers
        }
        giveTest(request)
        navigate("/finish")

    }

    return (
        <Box>
            <Typography mt={10} align="center" variant='h2' color="#256" fontWeight="medium">{toTitleCase(data.name)}</Typography>
            <Typography mt={1} align="center" variant='h4' color="#256" fontWeight="small">{toTitleCase(data.semester)} - {data.year} </Typography>
            <Typography mt={1} align="center" variant='h6' color="#256" fontWeight="small">Points: {data.points}({data.time})  </Typography>
                {
                    data.ques_ans_feed.map((question, id ) => {
                        return (
                            <Box key={id} mt={5}>
                                <Typography variant='h6'>Question:</Typography>
                                <Typography mt={2} variant='h6'>  {question.question}</Typography>
                                <Box mt={2}>
                                    <SelectField options={question.options_with_feedback} updateAnswer={(selected) => {
                                        const ques = {
                                            question: question.question,
                                            selected
                                        }
                                        let ans = [...answers]
                                        ans[id] = ques
                                        setAnswers(ans)
                                        console.log(ans)
                                    }}/>
                                </Box>
                                
                            </Box>
                        )
                    })
                }
            <Box mt={3}>
                <Button variant='outlined' onClick={handleSubmit}>
                    Submit
                </Button>
            </Box>
        </Box>
    )
}

export default GiveTest

// <FormControl>
// <RadioGroup
// aria-labelledby="demo-radio-buttons-group-label"
// defaultValue="female"
// name="radio-buttons-group"
// >
//     {question.options_with_feedback.map((choice, id) => {
//         <FormControlLabel key={id} value={choice.option} control={<Radio/>} label={id}/>
//     })}
// </RadioGroup>
// </FormControl>