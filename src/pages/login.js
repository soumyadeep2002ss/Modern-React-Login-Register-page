import React, { useState } from "react";

import { SignInForm, SignInPrompt } from "../components/SignIn";
import { SignUpForm, SignUpPrompt } from "../components/SignUp";

function Login() {
    const [state, setState] = useState("");

    return (
        <div>
            <div className={"container" + state}>
                <div className="forms-container">
                    <div className="signin-signup">
                        <SignInForm />
                        <SignUpForm />
                    </div>
                </div>

                <div className="panels-container">
                    <SignUpPrompt setState={setState} />
                    <SignInPrompt setState={setState} />
                </div>
            </div>
        </div>
    );
}

export default Login;
