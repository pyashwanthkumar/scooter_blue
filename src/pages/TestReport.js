import { Box, Button, CircularProgress, createTheme, ThemeProvider, Typography } from "@mui/material"
import React, { useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { useGetTestReportQuery } from "../apis/getTestReport.api"
import ListField from "../components/ListOptions"

const TestReport = () => {
    
    const {state} = useLocation()
    // const [question, setQuestion] = useState()
    const navigate = useNavigate()
    const {data, isLoading, isError, isSuccess} = useGetTestReportQuery({student_id: 10212, test_name: state.test_name })
    const toTitleCase = (str) => {
        return str.replace(
          /\w\S*/g,
          function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          }
        );
    }
    if(isLoading){
        return(<CircularProgress/>)
    }

    const theme = createTheme({
        typography: {
          subtitle1: {
            fontSize: 14,
          },
          subtitle2: {
            fontSize: 17,
          },
          body1: {
            fontWeight: 500,
          },
          button: {
            fontStyle: 'italic',
          },
        },
    });

    // const handleAskQuestion = () => {
    //     navigate("/question",{state: {
    //         question: data 
    //     }})
    // }

    return(
        <Box>
            <ThemeProvider theme={theme}>
            <Typography mt={2} align="center" variant="h3" color="#245" fontWeight="medium">{toTitleCase(data.test_name)} Report</Typography>
            <Typography mt={10} variant='h6' color="#22" fontWeight="light">{toTitleCase("Student:  " + data.student_name)}</Typography>
            <Typography variant='h6' color="#22" fontWeight="light">{toTitleCase("Semester:  " + data.semester)}</Typography>
            <Typography variant='h6' color="#22" fontWeight="light">{toTitleCase("Subject:  " + data.subject)}</Typography>
            <Typography mt={2} align="center" variant='h4' color="#245" fontWeight="light">Submission</Typography>
            {
               data.ques_ans_feed.map((entry, id) => {
                    return(
                    <Box mt={7} key={id}>
                       {/* <Typography mt={2} variant='h6'>Question:</Typography> */}
                        <Typography variant='subtitle2'>  {entry.question}</Typography>
                        <Box mt={2}>
                            <ListField options={entry.options}/>
                        </Box>
                        <Box mt={1}>
                            <Typography variant="subtitle1"><u>Points:</u> {entry.points}</Typography>
                        </Box>
                        {entry.correct_answer && 
                        <Box mt={0.5}>
                            <Typography variant="subtitle1"><u>Selected Answer:</u> {entry.selected_answer}</Typography>
                            <Typography variant="subtitle1"><u>Correct Answer:</u> {entry.correct_answer}</Typography>
                            <Typography variant="subtitle1"><u>Instructor's Note:</u> {toTitleCase(entry.feedback)}</Typography>
                            <Box mt={1} display="flex" justifyContent="space-between">
                            <Button variant="contained">Helpful</Button>
                            <Button variant="contained" onClick={(e) => {
                                e.preventDefault()
                                navigate("/question", {
                                    state: {
                                        test_question: entry.question,
                                        feedback: entry.feedback,
                                        test_name: data.test_name,
                                        student_name: data.student_name,
                                        student_id: data.student_id
                                    }
                                })
                            }}>Ask a question</Button>
                            </Box>
                        </Box>}
                    </Box>)
               }) 
            }
            </ThemeProvider>
        </Box>
    )
}

export default TestReport