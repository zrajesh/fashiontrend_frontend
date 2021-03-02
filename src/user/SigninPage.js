import React from "react";
import {Link, Redirect} from "react-router-dom";
// Import Components
import FormInput from "../components/form-input/FormInput";
import CustomButton from "../components/custom-button/CustomButton";
import {signin, authenticate, isAuthenticated} from "../auth/helper";
// Import scss
import "./signinAndSignupPage.scss";

class SigninPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            error: "",
            loading: false,
            didRedirect: false
        }
    }
    handleSubmit = event => {
        event.preventDefault();
        const {email, password, error, loading, didRedirect} = this.state;

        this.setState({error: false, loading: true,})
        signin({email, password})
        .then(data => {
            if(data.error) {
                this.setState({error: data.error, loading: false,})
            } else if (data.err) {
                this.setState({error: data.err, loading: false,})
            } else {
                authenticate(data, () => {
                    this.setState({didRedirect: true})
                })
            }
        })
        .catch(err => console.log(err))
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({error: false, [name]: value});
    }

    render() {
        const {email, password, didRedirect, loading, error} = this.state;
        const LoadingMesage = () => {
            return (
                loading && (
                    <div
                     className="message" 
                     style={{display: loading ? "" : "none"}}
                     >
                        <h3>Loading...</h3>
                    </div>
                )
            )
        }
        const ErrorMesage = () => (
            <div
             className="message"
             style={{display: error ? "" : "none"}}
             >
             <p>{error}</p>
            </div>
        )
        const performRedirect = () => {
            const {user} = isAuthenticated();
            if(didRedirect) {
                if(user && user.role === 1) {
                    return <Redirect to="/admin/dashboard" />
                } else {
                    return <Redirect to="/" />
                }
            }
            if(isAuthenticated()) {
                return <Redirect to="/" />
            }
        }
        return (
            <div className="signin-signup">
            {LoadingMesage()}
            {ErrorMesage()}
            <div className="content">
                <h2 className="title">I already have an account</h2>
                <span className="subtitle">Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
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
                    <CustomButton type="submit">
                    Sign in
                    </CustomButton>
                </form>
                {performRedirect()}
                <div className="mini-section">
                    <p>New to Fashion Hub?</p>
                    <button className="button-link">
                    <Link to="/signup">
                    Create new account
                    </Link>
                    </button>
                </div>
            </div>
            </div>
        )
    }
}

export default SigninPage;
