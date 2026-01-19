import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const AuthGuard = ({ children }) => {
    const navigate = useNavigate()
    const {jwt} = useUserStore()
    useEffect(() => {
        if (!jwt) navigate("/signin")
    }, [])
    return children
}

export default AuthGuard
