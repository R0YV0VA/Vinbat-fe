import React from "react";
import { Link } from "react-router-dom";
import routes from "../../routes";

const NotFound = () => {
    return (
        <div>
        <h1>404 - Not Found!</h1>
        <Link to={routes.HOME}>Go home</Link>
        </div>
    );
    };

export default NotFound;