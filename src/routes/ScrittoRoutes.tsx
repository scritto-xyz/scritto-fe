import { Route, Router, Routes } from "@solidjs/router";
import Login from "../views/login/Login";
import RequiresAuthComponent from "../views/RequiresAuthComponent";
import PrivateRoute from "./PrivateRoute";
import Landing from "../views/landing/Landing";

const ScrittoRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" component={ Landing }/>
                <Route path="/login" component={ Login }/>
                <PrivateRoute path="/requiresAuth" component={ RequiresAuthComponent }/>
            </Routes>
        </Router>
    )
}

export default ScrittoRoutes;