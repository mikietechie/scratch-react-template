import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null);
    const { setUser } = useContext(AuthContext)
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        setError(null)
        if (username === '' || password === '') {
            setError('Username and password required')
            return
        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters')
            return
        }
        setUser({username, password})
        navigate('/admin')
    }

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-12 mb-5">
                    <h1 className="text-center">Login</h1>
                </div>
                <div className="col-md-6 mx-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="mb-3 text-center">
                            <button type="submit" className="btn btn-primary px-5">
                                Login&nbsp;<i className="fa fa-sign-in"></i>
                            </button>
                        </div>
                        {error && <div className="alert alert-danger">{error}</div>}
                    </form>
                </div>
            </div>
        </div>
    );
}