import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
// Import components
import {isAuthenticated} from '../auth/helper';
import CustomButton from '../components/custom-button/CustomButton';
import FormInput from '../components/form-input/FormInput';
import {getCategories, getProduct, updateProduct} from './helper/adminapicall';
// Import scss
import "./admin.scss"

const UpdateProduct = ({match}) => {
    const {user, token} = isAuthenticated();

    const [values, setValues] = useState({
        name: "",
        description: "",
        price: "",
        stock: "",
        photo: "",
        size: "",
        categories: [],
        category: "",
        loading: false,
        error: "",
        createdProduct: "",
        getaRedirect: false,
        formData: ""
    });
    
    const {
        name, 
        description, 
        price, 
        stock, 
        categories, 
        size,
        photo,
        category, 
        loading, 
        error,
        createdProduct,
        getaRedirect,
        formData
    } = values;

    const preload = (productId) => {
        getProduct(productId)
        .then(data => {
            if(data.error) {
                setValues({...values, error: data.error})
            } else {
                setValues({
                    ...values,
                    name: data.name,
                    description: data.description,
                    price: data.price,
                    size: data.size,
                    category: data.category._id,
                    stock: data.stock,
                    formData: new FormData()
                })
                preloadCategories();
            }
        })
        .catch(err => console.log(err))
    }

    const preloadCategories = () => {
        getCategories()
        .then(data => {
            if(data.error) {
                setValues({...values, error: data.error})
            } else {
                setValues({categories: data, formData: new FormData()})
            }
        })
    }

    useEffect(() => {
        preload(match.params.productId);
    }, [])

    const onSubmit = (event) => {
        event.preventDefault()
        setValues({...values, error:"", loading: true})

        updateProduct(match.params.productId, user._id, token, formData)
        .then(data => {
            if(data.error) {
                setValues({...values, error: data.error})
            } else if (data.message) {
                setValues({...values, error: data.message})
            } else {
                setValues({
                    ...values,
                    name: "",
                    price: "",
                    description: "",
                    photo: "",
                    stock: "",
                    size: "",
                    error: "",
                    loading: false,
                    createdProduct: data.name
                })
            }
        })
        .catch(err => console.log(err))
    };
    const handleChange = name => event => {
        const value = name === "photo" ? event.target.files[0] : event.target.value
        formData.set(name, value);
        setValues({...values, [name]: value})
    };

    const SuccessMesage = () => (
        <div
         className="message"
         style={{display: createdProduct ? "" : "none"}}
         >
         <p>{createdProduct} updated successfully</p>
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
            <h1 className="title">Update your existing product</h1>
            {SuccessMesage()}
            {ErrorMesage()}
            <div className="formWrap">
            <div className="data">
            <form>
                <span>Post Photo</span>
                <FormInput
                 type="file"
                 name="photo"
                 accept="image"
                 placeholder="choose a file"
                 onChange={handleChange("photo")}
                 required
                />
                <FormInput
                 name="name"
                 placeholder="Name"
                 value={name}
                 required
                 onChange={handleChange("name")}
                />
                <textarea
                 onChange={handleChange("description")}
                 className="form-item description"
                 placeholder="Description" 
                 value={description}
                />
                <FormInput
                 type="text"
                 name="size"
                 placeholder="Size"
                 value={size}
                 required
                 onChange={handleChange("size")}
                />
                <FormInput
                 type="number"
                 name="price"
                 placeholder="Price"
                 value={price}
                 required
                 onChange={handleChange("price")}
                />
                <select
                  onChange={handleChange("category")}
                  className="form-control"
                  placeholder="Category"
                  className="form-item"
                  required
                >
                <option>Select Category</option>
                {categories && 
                    categories.map((category, index) => {
                    return <option key={index} value={category._id}>
                    {category.name}
                    </option>
                })}
                </select>
                <FormInput
                 type="number"
                 placeholder="Stock"
                 required
                 value={stock}
                 onChange={handleChange("stock")}
                />
                <CustomButton
                 onClick={onSubmit} 
                 type="submit">
                 Update Product
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
    )
};

export default UpdateProduct;