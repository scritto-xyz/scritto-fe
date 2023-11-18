import { List, MenuItem, Select, TextField } from "@suid/material";
import { createSignal } from "solid-js";

const SeekrSearch = () => {
    const [style, setStyle] = createSignal<string>('All');

    const handleStyleChange = (e: Event) => {
        const inputTarget = e.target as HTMLInputElement;
        const { value } = inputTarget;
        setStyle(value);
    };
    return (
        <div class="search-container">
            <List>

                <TextField
                    placeholder="What are you looking for?"
                    sx={ { backgroundColor: 'white' } }
                    fullWidth
                />
                <TextField
                    placeholder="Location"
                    sx={ { backgroundColor: 'white' } }
                    fullWidth
                />
                <Select
                    value={ style() }
                    label="Style"
                    onChange={ handleStyleChange }
                    sx={ { backgroundColor: 'white' } }
                    fullWidth
                >
                    <MenuItem value="All">All Styles</MenuItem>
                    <MenuItem value="Black and Grey">Black and Grey</MenuItem>
                    <MenuItem value="Traditional">Traditional</MenuItem>
                    <MenuItem value="Realism">Realism</MenuItem>
                    <MenuItem value="Watercolor">Watercolor</MenuItem>
                    <MenuItem value="New School">New School</MenuItem>
                    <MenuItem value="Japanese">Japanese</MenuItem>
                    <MenuItem value="Tribal">Tribal</MenuItem>
                    <MenuItem value="Illustrative">Illustrative</MenuItem>
                    <MenuItem value="Neo Traditional">Neo Traditional</MenuItem>
                    <MenuItem value="Geometric">Geometric</MenuItem>
                    <MenuItem value="Dotwork">Dotwork</MenuItem>
                    <MenuItem value="Script">Script</MenuItem>
                    <MenuItem value="Trash Polka">Trash Polka</MenuItem>
                    <MenuItem value="Blackwork">Blackwork</MenuItem>
                </Select>
            </List>

        </div>
    );
};

export default SeekrSearch;