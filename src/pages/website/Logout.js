import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";

export default function Logout() {
    const { setUser } = useContext(AuthContext)
    const navigate = useNavigate()
    
    useEffect(() => {
        setUser(null)
        navigate('/')
    })

    return (
        <Alert variant="info">
            You have been logged out!
        </Alert>
    )
    
}