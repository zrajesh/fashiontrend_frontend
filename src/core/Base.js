import React from 'react';

const Base = ({
    title="",
    className="",
    children
}) => (
    <div>
        <div className="container">
            <div className="jumbotron">
                <h2 className="">{title}</h2>
            </div>
            <div className={className}>{children}</div>
        </div>
    </div>
);

export default Base;