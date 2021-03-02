import React from 'react';
import {withRouter} from "react-router-dom";

// Import scss
import "./MenuItem.scss"

const MenuItem = ({title, imageUrl, linkUrl, history, match}) => {
    return (
        <div 
        className="menu-item"
        onClick={() => history.push(`${match.url}${linkUrl}`)}
        >
            <div
            style = {{
                backgroundImage: `url(${imageUrl})`
            }}
            className="background-image"
             />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="sub-title">SHOP NOW</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem);