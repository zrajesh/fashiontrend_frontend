import React from "react";
import {Link} from "react-router-dom";
// Import Components
import FormInput from "../components/form-input/FormInput";
import CustomButton from "../components/custom-button/CustomButton";
import { signup } from "../auth/helper";
// Import scss
import "./signinAndSignupPage.scss";

class SignupPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            lastname: "",
            email: "",
            password: "",
            error: "",
            success: false
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        const {name, lastname, email, password} = this.state;


        this.setState({error: false})
        signup({name, lastname, email, password})
        .then(data => {
            if(data.error) {
                this.setState({error: data.error, success: false})
            } else {
                this.setState({name: "", lastname: "", email: "", password: "", error: "", success: true})
            }
        })
        .catch(err => console.log(err))
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({error: false, [name]: value});
    }

    render() {
        const {name, lastname, email, password, error, success} = this.state;
        const SuccessMesage = () => (
            <div
             className="message"
             style={{display: success ? "" : "none"}}
             >
             <h3>Account created successfully</h3>
             <p>Please <Link 
              to="/signin">
              <button className="login">
              Login here
              </button>
              </Link>
              </p>
            </div>
        )
        const ErrorMesage = () => (
            <div
             className="message"
             style={{display: error ? "" : "none"}}
             >
             <h3>Failed to create account</h3>
             <p>{error}</p>
            </div>
        )
        return (
            <div className="signin-signup">
            {SuccessMesage()}
            {ErrorMesage()}
            <div className="content">
                <h2 className="title">I do not have an account</h2>
                <span className="subtitle">Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                     name="name" 
                     type="name" 
                     value={name} 
                     label="Name"
                     required 
                     handleChange={this.handleChange}
                    />
                    <FormInput
                     name="lastname" 
                     type="lastname" 
                     value={lastname} 
                     label="Last name"
                     required 
                     handleChange={this.handleChange}
                    />
                    <FormInput
                     name="email" 
                     type="email" 
                     value={email} 
                     label="Email"
                     required 
                     handleChange={this.handleChange}
                    />
                    <FormInput
                     name="password" 
                     type="password" 
                     value={password} 
                     label="Password"
                     required 
                     handleChange={this.handleChange}
                    />
                    <CustomButton type="submit">Sign up</CustomButton>
                </form>
                
                <div className="mini-section">
                    <p>Already have an account?</p>
                    <button className="button-link">
                    <Link to="/signin">
                    Sign in
                    </Link>
                    </button>
                </div>
            </div>
            </div>
        )
    }
}

export default SignupPage;
