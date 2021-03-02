import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
// Import components
import {isAuthenticated} from '../auth/helper';
import CustomButton from '../components/custom-button/CustomButton';
import {deleteCategory, getCategories} from './helper/adminapicall';
// Import scss
import "./admin.scss";
import "./Manage.scss"

const ManageCategories = (props) => {
    const [categories, setCategories] = useState([]);
    const {user, token} = isAuthenticated();

    const preload = () => {
        getCategories()
        .then(data => {
            if(data.error) {
                console.log(data.error);
            } else {
                setCategories(data);
            }
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        preload();
    }, []);

    const deleteUserCategory = categoryId => {
        deleteCategory(categoryId, user._id, token)
        .then(data => {
            if(data.error) {
                console.log(data.error);
            } else {
                preload();
            }
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="globalAdmin">
            <h1 className="title">Manage all your categories</h1>
            <div className="adminHome adminHomeupdate">
                <Link to="/admin/dashboard">
                    <CustomButton type="submit">
                    Admin Home
                    </CustomButton>
                </Link>
            </div>
            <div className="manage-container">
            {categories.map((category, index) => (
                <div key={index} className="container-row">
                    <div className="item col1">
                        <h3>{category.name}</h3>
                    </div>
                    <div className="item">
                        <button
                        className="btn del" 
                        onClick={() => {
                            deleteUserCategory(category._id)
                        }}>
                        DELETE
                        </button>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
};

export default ManageCategories;
