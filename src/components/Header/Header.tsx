import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './Header.scss';

export default function Header() {

    return (
        <header className='header__container'>
            <div className='header__content'>
                <Link to="/" className='header__logo'>
                    <img className='header__logo-image' src='/logo192.png' alt='logo'></img>
                </Link>
                <Navigation></Navigation>
            </div>
        </header>
    )
}