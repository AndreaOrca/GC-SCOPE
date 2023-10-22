import React, { Component } from "react";
<<<<<<< HEAD
import './Login.css';
import school from "../assets/gc_school.JPG";
=======
import './css_pages/Login.css';
import logo from "../assets/logos/gc-logo.png";
>>>>>>> a4ae406e8c15de639a2a996fe2cb629bdd8c928a
import LoginForm from '../components/LoginForm';

export class Login extends Component {
    render() {
        return (
            <div className="login_page_container">
                <div class="left_section"></div>
                <div class="right_section">
                    <LoginForm/>
                </div>
            </div>
        );
    }
}

export default Login;
