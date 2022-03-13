import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";

function DemoLogIn() {

    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);


    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential: "Demo-lition", password: "password" })).catch(
          async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors);
          }
        );
      };

      return (
          <button
          onClick={handleSubmit}
          className="login-button button"
          style={{ textDecoration: 'none', color: 'white', fontFamily: "'Assistant', sans-serif",
                                    letterSpacing: "0.5px", fontSize: "15px"}}>
              Demo
          </button>
      )

}

export default DemoLogIn
