import {useLocation} from "@solidjs/router";
import {createSignal, Show} from "solid-js";
import {User} from "../../model/entity/User";


const Home = () => {
    const location = useLocation();
    const [user, setUser] = createSignal<User>(location.state['user'] as User);
    createSignal(() => {
        setUser(useLocation().state as User);
    });

    return (
        <div>
            <Show when={user().username} fallback={<NameDisplay name={user().firstName}/>}>
                <NameDisplay name={user().username}/>
            </Show>
        </div>
    );
};

interface NameDisplayProps {
    name: string;
}

const NameDisplay = (props: NameDisplayProps) => {
    return (
        <div>
            <h1>Welcome, {props.name}</h1>
        </div>
    );
}

export default Home;