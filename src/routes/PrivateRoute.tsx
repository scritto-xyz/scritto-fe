// private route component for solidjs that wraps the route component and checks local storage for a jwt
// if the jwt is not present, the user is redirected to the login page

import { Component } from "solid-js";
import { Route, RouteProps, useNavigate } from "@solidjs/router";
import { useAuth } from "../context/AuthContext";

const PrivateRoute: Component<RouteProps<any>> = (props) => {
    const auth = useAuth();
    const navigate = useNavigate();

    if (!auth) {
        navigate('/login');
    }

    return (
        <Route { ...props }/>
    )
};

export default PrivateRoute;
