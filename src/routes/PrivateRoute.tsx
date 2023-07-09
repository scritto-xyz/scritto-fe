import { Outlet, useNavigate } from "@solidjs/router";
import { useAuth } from "../context/AuthContext";
import { Show } from "solid-js";
import NotAuthorized from "./NotAuthorized";

const PrivateRoute = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    console.log(auth);
    console.log("PRIVATE ROUTE");

    return (
        <Show when={ auth } fallback={ <NotAuthorized/> }>
            <Outlet/>
        </Show>
    );
};

export default PrivateRoute;
