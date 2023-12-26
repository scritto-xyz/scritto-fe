import {useLocation} from "@solidjs/router";
import {createSignal} from "solid-js";
import {User} from "../../model/entity/User";


const Home = () => {
    const location = useLocation();
    const [user, setUser] = createSignal<User>(location.state as User);
    createSignal(() => {
        setUser(useLocation().state as User);
    });
    console.log(user());

    return (
        <div>
            <h1>Home</h1>
        </div>
    );
};

export default Home;