import { Route, Router, Routes } from "@solidjs/router";
import Login from "../views/login/Login";
import Landing from "../views/landing/Landing";
import NotFound from "../views/notFound/NotFound";
import Home from "../views/home/Home";
import PrivateRoute from "../routes/PrivateRoute";
import Signup from "../views/signup/Signup";

const ScrittoRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" component={ Landing }/>
                <Route path="/login" component={ Login }/>
                <Route path="/signup" component={ Signup }/>
                <Route path="*" component={ NotFound }/>
                <Route path="" component={ PrivateRoute }>
                    <Route path="/home" component={ Home }/>
                </Route>
            </Routes>
        </Router>
    );
};

export default ScrittoRoutes;