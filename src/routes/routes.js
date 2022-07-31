import React from "react"
import {Routes as ReactRouterRoutes, Route } from "react-router-dom"
import { Login } from "../pages/Login"
import GiveTest from "../pages/GiveTest"
import CreateTest from "../pages/CreateTest"
import { Signup } from "../pages/Signup"
import HomePage from "../pages/HomePage"
import { ProtectedRoute } from "./protected_routes.components"
import { CircularProgress } from "@mui/material"
import CreateTestFinish from "../pages/CreateTestFinish"
import AddQuestion from "../pages/AddQuestion"
import { GetTest } from "../pages/GetTest"
import Finish from "../pages/Finish"
import { Reports } from "../pages/Reports"
import TestReport from "../pages/TestReport"
import AskQuestion from "../pages/AskQuestion"
import StudentQuestions from "../pages/StudentQuestions"
import ListQuestions from "../pages/ListQuestions"

const Routes = () => {
    return(
        <ReactRouterRoutes>
            <Route path="/" element={
            <ProtectedRoute>
                <HomePage/>
            </ProtectedRoute>
            } />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/test" element={<GetTest />}/>
            <Route path="/give-test" element={<GiveTest />}/>
            <Route path="/reports" element={<Reports/>}/> 
            <Route path="/report" element={<TestReport/>}/> 
            <Route path="/create-test" element={<CreateTest/>}/>
            <Route path="/qaf" element={<AddQuestion/>}/>     
            <Route path="/finish" element={<CreateTestFinish/>}/> 
            <Route path="/submission" element={<Finish/>}/> 
            <Route path="/question" element={<AskQuestion/>}/> 
            <Route path="/student-question" element={<StudentQuestions/>}/> 
            <Route path="/question-list" element={<ListQuestions/>}/> 
        </ReactRouterRoutes>
    )
}

export { Routes }