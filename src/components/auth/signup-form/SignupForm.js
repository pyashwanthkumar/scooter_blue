import React, { useState } from "react";
import {Button, TextField, Link as MuiLink} from "@mui/material"
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserMutation } from "../../../apis/users.api";
import { useLoginMutation } from "../../../apis/auth.api";
import { useDispatch } from "react-redux";
import { handleAuthState } from "../../../slices/auth.slice";



export const SignupForm = () => {

    const [email, setEmail] = useState("")
    const [emailErrored, setEmailErrored] = useState(false)
    const [password, setPassword] = useState("")
    const [passwordErrored, setPasswordErrored] = useState(false)
    const [createUser] = useCreateUserMutation()
    const [login] = useLoginMutation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const handleSignup = async () => {
        if(!email){
            setEmailErrored(true)
        }else{
            setEmailErrored(false)
        }

        if(!password){
            setPasswordErrored(true)
        }else{
            setPasswordErrored(false)
        }
        try {
            await createUser({email, password})
            const response = await login({email, password})
            dispatch(handleAuthState({user: response.data}))
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div className="flex justify-center items-center flex-col h-screen gap-8">
            <h1 className="text-6xl">Vespa</h1>
            <div className="flex flex-col gap-2">
                <TextField 
                    label="Email" 
                    type="email" 
                    className="w-80" 
                    required 
                    helperText={emailErrored && "Please enter a valid email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={emailErrored}
                />
                <TextField
                    label="Password" 
                    type="password" 
                    className="w-80" 
                    required 
                    helperText={passwordErrored && "Password may not be empty."}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    error={passwordErrored}
                />
                <Link to="/login" className="justify-self-start self-start mt-2">
                    <MuiLink>Login</MuiLink>
                </Link>
            </div>
            <Button variant="contained" className="w-80" onClick={handleSignup}>
                <span className="p-1">Login</span>
            </Button>
        </div>
    )
}