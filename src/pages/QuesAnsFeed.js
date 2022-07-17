import { Box, Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import OptionAndFeedback from '../components/OptionAndFeedback'


const QuesAnsFeed = () => {

    const {
        num_of_questions
    } = useSelector((state) => state.create_test)
    const [questionIndex, setQuestionIndex] = useState(1)
    const [options, setOptions] = useState([{},{},{},{}])
    const [points, setPoints] = useState(0)
    const [answer, setAnswer] = useState(0)
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(options)
        if(questionIndex < num_of_questions){
            setQuestionIndex(questionIndex + 1)
        }
    }

    const handleUpdate =  async (label, option, feedback) => {
        const choice  = {
          option,
          feedback
        }
        options[label - 1] = choice
        await setOptions(options)
    }


    return (
        <Box 
            component="form"
            onSubmit={handleSubmit}
        >
            <Typography variant='h6'>Question {questionIndex}</Typography>
            <TextField fullWidth size="large"></TextField>
            <OptionAndFeedback label={1} updateOptions={handleUpdate}/>
            <OptionAndFeedback label={2} updateOptions={handleUpdate} />
            <OptionAndFeedback label={3} updateOptions={handleUpdate}/>
            <OptionAndFeedback label={4} updateOptions={handleUpdate}/>
            <Box mt={3}></Box>
            <TextField
                size='small'
                label="Correct Answer"
                value={answer}
                onChange={(e) => {
                    setAnswer(e.target.value)
                }}
            />
            <Box mt={1}></Box>
            <TextField 
                size='small'
                label="Points"
                value={points}
                onChange={(e) => {
                    setPoints(e.target.value)
                }}
            />
            <Box mt={3}>
            <Button variant="outlined" type="submit">
              Next
            </Button>
            </Box>
        </Box>
    )
}

export default QuesAnsFeed