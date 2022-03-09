import { useEffect, useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom"

import './LoginForm.css'



const LogInFormPage = () => {

    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);


    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const [errors, setErrors] = useState([]);

    if (sessionUser) {
        return (
            <Redirect to="/" />
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        return dispatch(sessionActions.login({credential: username, password}))
        .catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors)
        })
    }

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <ul>
                {errors.map((error) =>
                <li>{error}</li>
                )}
            </ul>
            <input
            className="login-input"
            type="text"
            placeholder="Username"
            value={username}
            onChange={e=>setUserName(e.target.value)}
            required
            />
            <input
            className="login-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={e=>setPassword(e.target.value)}
            required
            />
            <button >
                Sign In
            </button>
        </form>
    )
}

export default LogInFormPage
