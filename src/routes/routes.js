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
            <Route path="/create-test" element={<CreateTest/>}/>
            <Route path="/qaf" element={<AddQuestion/>}/>     
            <Route path="/finish" element={<CreateTestFinish/>}/> 
            <Route path="/submission" element={<Finish/>}/> 
        </ReactRouterRoutes>
    )
}

export { Routes }