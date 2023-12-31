import {Component, createEffect, createSignal, Show} from "solid-js";
import Logo from '../../assets/Logo.svg';
import Burger from '../../assets/HamburgerMenu.svg';
import './index.scss';
import {Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@suid/material";
import CalendarMonthIcon from '@suid/icons-material/CalendarMonth';
import ColorLensIcon from '@suid/icons-material/ColorLens';
import CategoryIcon from '@suid/icons-material/Category';
import ForumIcon from '@suid/icons-material/Forum';
import AccountBoxIcon from '@suid/icons-material/AccountBox';
import LogoutIcon from "@suid/icons-material/Logout";
import LoginIcon from '@suid/icons-material/Login';
import {useAuth} from "../../context/AuthContext";
import {A} from "@solidjs/router";

const NavBar: Component = () => {
    const [isOpen, setIsOpen] = createSignal<boolean>(false);
    const [isLoggedIn, setIsLoggedIn] = createSignal<boolean>(false);

    createEffect(() => {
        const auth = useAuth();
        if (auth) {
            setIsLoggedIn(true);
        }
    });

    return (
        <div class="navbar-container">
            <div class="name-and-icon no-select">
                <img src={Logo} alt="logo" class="logo"/>
                <h1 class="name">seekr</h1>
            </div>
            <div class="burger-container" onClick={() => setIsOpen(true)}>
                <img src={Burger} alt="menu" class="burger-icon"/>
            </div>
            <Drawer
                anchor="left"
                open={isOpen()}
                onClose={() => setIsOpen(false)}
            >
                <List>
                    <MenuListItem text="Artists" icon={<ColorLensIcon/>}/>
                    <MenuListItem text="Styles" icon={<CategoryIcon/>}/>
                </List>
                <Divider/>
                <List>
                    <MenuListItem text="My Profile" icon={<AccountBoxIcon/>}/>
                    <MenuListItem text="Appointments" icon={<CalendarMonthIcon/>}/>
                    <MenuListItem text="Messages" icon={<ForumIcon/>}/>
                    <Show when={isLoggedIn()}
                          fallback={<MenuListItem text="Login" routeTo={'/login'} icon={<LoginIcon/>}/>}>
                        <MenuListItem text="Logout" icon={<LogoutIcon/>}/>
                    </Show>
                </List>
            </Drawer>
        </div>
    );
};

interface MenuListItemProps {
    text: string;
    icon: any;
    routeTo?: string;
    onclick?: () => void;
}

const MenuListItem = (props: MenuListItemProps) => {
    return (
        <Show when={props.routeTo}
              fallback={<SeekrListItem text={props.text} icon={props.icon} onclick={props.onclick}/>}>
            <A href={props.routeTo}>
                <SeekrListItem text={props.text} icon={props.icon} onclick={props.onclick}/>
            </A>
        </Show>
    );
};

interface SeekrListItemProps {
    text: string;
    icon: any;
    onclick?: () => void;
}

const SeekrListItem = (props: SeekrListItemProps) => {
    return (
        <ListItem onClick={props.onclick} disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    {props.icon}
                </ListItemIcon>
                <ListItemText primary={props.text}/>
            </ListItemButton>
        </ListItem>
    );
}
export default NavBar;