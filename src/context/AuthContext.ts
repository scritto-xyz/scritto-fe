import { createSignal } from "solid-js";

export const useAuth = () => {
    const [token, setToken] = createSignal();
    setToken(localStorage.getItem('jwt'));
    return token();
}