import React from 'react';

const Base = ({
    title ="my title",
    description = "my description",
    className = "bg-dark text-white p4",
    children
}) => {
    return (
        <div>
            <div className="container-fluid">
                <div className="jumbotron bg-dark text-white text-center">
                    <h2 className="display-4">{title}</h2>
                    <p className="lead">{description}</p>
                </div>
                <div className={className}>{children}</div>
            </div>
            <footer className="footer bg-dark mt-auto py-3">
                <div className="container-fluid bg-success text-white text-center py-3">
                <h4>any query contact us now</h4>
                <button className="btn btn-warning btn-lg">Contact us</button>
                <div className="container">
                    <span className="text-muted">Welcome to farmdeal</span>

                </div>
                </div>
            </footer>
        </div>
    );
}

export default Base;
