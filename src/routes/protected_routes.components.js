import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { selectCurrentUser } from "../slices/auth.slice"



const ProtectedRoute = ({children}) => {
    const user = useSelector((state) => selectCurrentUser(state))

    return user ? children : <Navigate to="/login" />
}

export {ProtectedRoute}