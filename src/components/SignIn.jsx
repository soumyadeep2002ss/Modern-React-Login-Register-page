import React from "react";
import SocialHandle from "./SocialHandle";
import img from "../images/signup.svg";

function SignInForm() {
    return (
        <form action="/" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" />
            <SocialHandle />
        </form>
    );
}

function SignInPrompt(props) {
    const { setState } = props;
    return (
        <div className="panel right-panel">
            <div className="content">
                <h3>One of us ?</h3>
                <p>Simply Go to login page by pressing SIGN IN button</p>
                <button onClick={() => setState("")} className="btn transparent" id="sign-in-btn">
                    Sign in
                </button>
            </div>
            <img src={img} className="image" alt="" />
        </div>
    );
}

export { SignInForm, SignInPrompt };
