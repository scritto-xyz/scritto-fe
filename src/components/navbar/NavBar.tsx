import {Component} from "solid-js";
import Logo from '../../assets/LogoWhite.svg';
import Burger from '../../assets/HamburgerMenu.svg';
import './index.scss';

const NavBar: Component = () => {
    return (
        <div class='navbar-container'>
            <div class='name-and-icon no-select'>
                <img src={Logo} alt='logo' class='logo'/>
                <h1 class='name'>seekr</h1>
            </div>
            <div class='burger-container'>
                <img src={Burger} alt='menu' class='burger-icon no-select'/>
            </div>
        </div>
    );
}

export default NavBar;