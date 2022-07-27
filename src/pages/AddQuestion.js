import { Box, Button, TextField, Typography } from '@mui/material'
import React, {useRef, useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useAddQuestionMutation } from '../apis/addQuestion.api'
import OptionAndFeedback from '../components/OptionAndFeedback'


const AddQuestion = () => {
    
    const navigate = useNavigate()
    const optAndFeedref = useRef()
    const [addQuestion] = useAddQuestionMutation()
    const {
        num_of_questions,
        id
    } = useSelector((state) => state.create_test)
    const [questionIndex, setQuestionIndex] = useState(1)
    const [options, setOptions] = useState([{},{},{},{}])
    const [question, setQuestion] = useState("")
    const [points, setPoints] = useState(0)
    const [answer, setAnswer] = useState(0)
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        await addQuestion({id, questionObj:{
            question, 
            options_with_feedback:options, 
            answer,
            points
        }})
        setQuestion("")
        setOptions([{},{},{},{}])
        optAndFeedref.current.deleteState()
        setAnswer(0)
        setPoints(0)
        if(questionIndex < num_of_questions){
            setQuestionIndex(questionIndex + 1)
        }else{
            navigate("/finish")
        }
    }

    const handleUpdate =  async (label, option, feedback) => {
        const choice  = {
          option,
          feedback
        }
        let currOptions = [...options]
        currOptions[parseInt(label - 1)] = choice
        await setOptions(currOptions)
    }


    return (
        <Box 
            component="form"
            onSubmit={handleSubmit}
        >
            <Typography variant='h6'>Question {questionIndex}</Typography>
            <TextField 
                label="question"
                value={question}
                fullWidth 
                size="large"
                onChange={async (e) => {
                    await setQuestion(e.target.value)
                }}
            />
            <OptionAndFeedback ref={optAndFeedref} label={1} updateOptions={handleUpdate} />
            <OptionAndFeedback ref={optAndFeedref} label={2} updateOptions={handleUpdate} />
            <OptionAndFeedback ref={optAndFeedref} label={3} updateOptions={handleUpdate} />
            <OptionAndFeedback ref={optAndFeedref} label={4} updateOptions={handleUpdate} />
            <Box mt={3}></Box>
            <TextField
                size='small'
                label="answer"
                value={answer}
                onChange={async (e) => {
                    await setAnswer(parseInt(e.target.value))
                }}
            />
            <Box mt={1}></Box>
            <TextField 
                size='small'
                label="points"
                value={points}
                onChange={async (e) => {
                    await setPoints(parseInt(e.target.value))
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

export default AddQuestion