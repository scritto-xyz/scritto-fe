import { Outlet } from "@solidjs/router";
import { useAuth } from "../context/AuthContext";
import { Show } from "solid-js";
import NotAuthorized from "./NotAuthorized";

const PrivateRoute = () => {
    const auth = useAuth();

    return (
        <Show when={ auth } fallback={ <NotAuthorized/> }>
            <Outlet/>
        </Show>
    );
};

export default PrivateRoute;
