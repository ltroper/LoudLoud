import { useEffect, useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom"

import './SignupForm.css'



const SignUpFormPage = () => {

    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);


    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("")
    const [fullName, setFullName] = useState("")

    const [errors, setErrors] = useState([]);

    if (sessionUser) {
        return (
            <Redirect to="/" />
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPass){
            return dispatch(sessionActions.signUp({ username, email, fullName, password }))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors)
            })
        }
        return setErrors(["'Confirm Password field must be the same as the Password field'"])
    }

    return (
        <form className="signup-form" onSubmit={handleSubmit}>
            <ul>
                {errors.map((error) =>
                <li>{error}</li>
                )}
            </ul>
            <input
            className="signup-input"
            type="text"
            placeholder="Username"
            value={username}
            onChange={e=>setUserName(e.target.value)}
            required
            />
            <input
            className="signup-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={e=>setEmail(e.target.value)}
            required
            />
            <input
            className="signup-input"
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={e=>setFullName(e.target.value)}
            required
            />
            <input
            className="signup-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={e=>setPassword(e.target.value)}
            required
            />
            <input
            className="signup-input"
            type="password"
            placeholder="Confirm Password"
            value={confirmPass}
            onChange={e=>setConfirmPass(e.target.value)}
            required
            />
            <button className="signup-button">
                Sign Up
            </button>
        </form>
    )
}

export default SignUpFormPage
