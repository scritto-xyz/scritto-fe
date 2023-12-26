import {useLocation} from "@solidjs/router";
import {createEffect, createSignal, Show} from "solid-js";
import {User} from "../../model/entity/User";
import {getArtists} from "../../service/seekr/Users";


const Home = () => {
    const location = useLocation();
    const [user, setUser] = createSignal<User>(location.state['user'] as User);
    const [artists, setArtists] = createSignal<User[]>([]);
    createSignal(async () => {
        setUser(useLocation().state as User);
    });

    createEffect(async () => {
        const artists = await getArtists();
        setArtists(artists);
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