import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Import components
import {isAuthenticated} from '../auth/helper';
import CustomButton from '../components/custom-button/CustomButton';
import FormInput from '../components/form-input/FormInput';
import {createCategory} from './helper/adminapicall';

// Import scss
import "./admin.scss";

const AddCategory = () => {
    const [name, setName] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const {user, token} = isAuthenticated();

    const handleChange = (event) => {
        setError("");
        setName(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        setError("");
        setSuccess(false);
        // Backend request
        createCategory(user._id, token, {name})
        .then(data => {
            if(data.err) {
                setError(data.err);
            } else if (data.error) {
                setError(data.error);
            } else {
                setError("");
                setSuccess(true);
                setName("");
            }
        })
        .catch(err => console.log(err));
    }

    const SuccessMesage = () => (
        <div
         className="message"
         style={{display: success ? "" : "none"}}
         >
         <p>Category created successfully</p>
        </div>
    )

    const ErrorMesage = () => (
        <div
         className="message"
         style={{display: error ? "" : "none"}}
         >
         <p>{error}</p>
        </div>
    )

    return (
        <div className="globalAdmin">
            <h1 className="title">Create a new category</h1>
            {SuccessMesage()}
            {ErrorMesage()}
            <div className="formWrap">
            <div className="data">
            <p>Enter the category</p>
            <form>
                <FormInput
                 type="text"
                 placeholder="For Ex. Summer"
                 onChange={handleChange}
                 value={name}
                 autoFocus
                 required
                />
                <CustomButton
                 onClick={onSubmit} 
                 type="submit">
                 Create Category
                 </CustomButton>
            </form>
            <div className="adminHome">
            <Link to="/admin/dashboard">
            <CustomButton type="submit">Admin Home</CustomButton>
            </Link>
            </div>
            </div>
            </div>
        </div>    
    );
}

export default AddCategory;
