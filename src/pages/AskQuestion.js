import { Box, Button, TextField, Typography } from "@mui/material"
import React, { useState } from "react"
import { useLocation } from "react-router-dom"
import { useAskQuestionMutation } from "../apis/askQuestion.api"

const AskQuestion = (props) => {
    const {state} = useLocation()
    // console.log(state)
    const [question, set_question] = useState("")
    const [askQuestion] = useAskQuestionMutation()
    const handleSubmit = async () => {
        const res = await askQuestion({
            question,
            student_id: state.student_id,
            test_name: state.test_name,
            test_question: state.test_question,
            feedback: state.feedback
        })
        // console.log(res)
    }
    
    return(
       <Box>
         <Box mt={10}>
            <Typography mt={2} variant="h6" color="#245" fontWeight="medium">Test Question Information</Typography>
            <Typography mt={1} color="#245" fontWeight="medium"><u>Student:</u> {state.student_name}(id: {state.student_id}) </Typography>
            <Typography ><u>Test question:</u> {state.test_question}</Typography>
            <Typography><u>Instructor's note:</u> {state.feedback}</Typography>
        </Box>
            <Typography mt={2} align="center" variant="h5" color="#245" fontWeight="medium">Ask Question</Typography>
            <Box mt={1}>
                <TextField 
                    placeholder="Ask for additional info if you are not satisied with Instructor's note"
                    fullWidth 
                    size="large"
                    value={question}
                    onChange={
                        (e) => {
                            set_question(e.target.value)
                        }
                    }
                />
            </Box>
            <Box mt={3}>
                <Button variant="contained" onClick={handleSubmit}>Submit</Button>
            </Box>
       </Box>
    )
}

export default AskQuestion