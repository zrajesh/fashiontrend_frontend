import React from 'react';
import {Link} from 'react-router-dom';
// Import components
import { isAuthenticated } from '../auth/helper';
// Import scss
import "./AdminDashboard.scss";

const AdminDashboard = () => {
    const {user: {name, email, role}} = isAuthenticated();
    return (
        <div className="admindashboard">
            <div className="title">
            <h1>Admin Dashboard: Manage all your inventory</h1>
            </div>
            <div className="admininfo">
            <div className="adminright">
            <div className="navigation"><h3>Admin Navigation</h3></div>
            <ul>
                <li>
                    <Link
                     to="/admin/create/category" 
                     className="option">
                     Create Category
                    </Link>
                </li>
                <li>
                    <Link
                     to="/admin/categories" 
                     className="option">
                     Manage Categories
                    </Link>
                </li>
                <li>
                    <Link
                     to="/admin/create/product" 
                     className="option">
                     Create Product
                    </Link>
                </li>
                <li>
                    <Link
                     to="/admin/products" 
                     className="option">
                     Manage Products
                    </Link>
                </li>
            </ul>
            </div>
            <div className="adminleft">
                <div className="information"><h3>Admin Information</h3></div>
                <ul>
                <li>
                <span className="badge">Name:</span> {name}
                </li>
                <li>
                <span className="badge">Email:</span> {email}
                </li>
                </ul>
            </div>
        </div>
        </div>
    );
};

export default AdminDashboard;
