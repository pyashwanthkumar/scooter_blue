import React, { useState } from "react";
import { Box, Typography, Button, CircularProgress, TextField } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useGetQuestionListQuery } from "../apis/getQuestionList.api";
const StudentQuestions = () => {
  
  const location = useLocation()
  const {data, isError, isSuccess, isLoading} = useGetQuestionListQuery({test_name: "midterm"})
  const [answer, setAnswer] = useState("")
  if(isLoading){
    return(<CircularProgress/>)
  }

  const handleSubmit = () => {

  }
  return(
    <Box>
      {
        data.map((entry, id) => {
          return(
            <Box key={id}>
              <Box mt={10}>
                <Typography mt={2} variant="h6" color="#245" fontWeight="medium">Test Question Information</Typography>
                <Typography mt={1} color="#245" fontWeight="medium"><u>Student id:</u> {entry.student_id} </Typography>
                <Typography ><u>Test question:</u> {entry.test_question}</Typography>
                <Typography><u>Instructor's note:</u> {entry.feedback}</Typography>
              </Box>
                <Box mt={2}>
                    <Typography mt={3} variant="h6" color="#245" fontWeight="medium">Question {entry.question_num}: {entry.question} </Typography>
                </Box>
                <Box mt={1}>
                  <TextField 
                    placeholder="Respond to student question"
                    fullWidth 
                    size="large"
                    value={answer}
                    onChange={
                      (e) => {
                        setAnswer(e.target.value)
                      }
                    }
                  />
                </Box>
                <Box mt={3}>
                  <Button variant="contained" onClick={handleSubmit}>Submit</Button>
                </Box>
            </Box>
          )
        })
      }
    </Box>
  )
}



export default StudentQuestions