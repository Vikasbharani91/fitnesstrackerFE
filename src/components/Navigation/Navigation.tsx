import React from "react";
import { NavLink } from 'react-router-dom';
import { MyThemeContext } from "../../contexts/theme-context";
import './Navigation.scss';

export default function Navigation() { 

    const theme = React.useContext(MyThemeContext);

    const navStyles = {
        color: theme.background
    }

    const activeStyles = ({isActive}: {isActive: boolean}) => isActive ? ({...navStyles, fontWeight: 600}) : navStyles

    return ( <nav className="navigation__container">
        <ul className="navigation__list">
        <li className="navigation__list-item">
            <NavLink className="navigation__link" style={activeStyles} to='/'>Dashboard</NavLink> | {' '}
        </li>
        <li className="navigation__list-item">
            <NavLink className="navigation__link" style={activeStyles} to='/data'>Data</NavLink> | {' '}
        </li>
        <li className="navigation__list-item">
            <NavLink className="navigation__link" style={activeStyles} to='/blogs'>Blogs</NavLink>
        </li>
    </ul>
    </nav> )
    
}