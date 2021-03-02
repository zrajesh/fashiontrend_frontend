import React, {useState} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Provider} from "react-redux";
// Import components
import AdminRoute from './auth/helper/AdminRoutes';
import PrivateRoute from './auth/helper/PrivateRoutes';
import Header from './components/header/Header';
import SideHeader from './components/header/SideHeader';
import Home from "./core/Home"
import ShopPage from './core/shop/ShopPage';
import MenPage from './components/categoryPage/MenPage';
import WomenPage from './components/categoryPage/WomenPage';
import AccessoriesPage from './components/categoryPage/AccessoriesPage';
import WinterPage from './components/categoryPage/WinterPage';
import FooterComponent from './components/footer/FooterComponent';
import SigninPage from './user/SigninPage';
import SignupPage from './user/SignupPage';
import CheckOut from './core/checkout/CheckOut';
import UserDashboard from './user/UserDashBoard';
import AdminDashboard from './user/AdminDashBoard';
import AddCategory from './admin/AddCategory';
import ManageCategories from './admin/ManageCategories';
import AddProduct from './admin/AddProduct';
import ManageProducts from './admin/ManageProducts';
import UpdateProduct from './admin/UpdateProduct';
// Import store
import store from "./redux/store";

const Routes = () => {
    const [drawerOpen, setdrawerOpen] = useState(false);

    const drawerToggler = () => {
        setdrawerOpen(!drawerOpen);
    }

    let Sidedrawer;

    if(drawerOpen) {
        Sidedrawer = <SideHeader />;
    }

    return (
        <Provider store={store}>
        <BrowserRouter>
            <Header drawerClickHandler={drawerToggler} />
            {Sidedrawer}
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/shop" component={ShopPage} />
                <Route exact path="/shop/men" component={MenPage} />
                <Route exact path="/checkout" component={CheckOut} />
                <Route exact path="/shop/women" component={WomenPage} />
                <Route exact path="/shop/accessories" component={AccessoriesPage} />
                <Route exact path="/shop/winterstore" component={WinterPage} />
                <Route exact path="/signin" component={SigninPage} />
                <Route exact path="/signup" component={SignupPage} />
                <PrivateRoute exact path="/user/dashboard" component={UserDashboard} />
                <AdminRoute exact path="/admin/dashboard" component={AdminDashboard} />
                <AdminRoute exact path="/admin/create/category" component={AddCategory} />
                <AdminRoute exact path="/admin/categories" component={ManageCategories} />
                <AdminRoute exact path="/admin/categories" component={ManageCategories} />
                <AdminRoute exact path="/admin/create/product" component={AddProduct} />
                <AdminRoute exact path="/admin/products" component={ManageProducts} />
                <AdminRoute exact path="/admin/product/update/:productId" component={UpdateProduct} />
            </Switch>
            <FooterComponent />
        </BrowserRouter>
        </Provider>
    );
}

export default Routes;
