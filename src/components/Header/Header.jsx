import './Header.css';
import burgerMenu from '/public/burger_menu.svg'
import youtubeLogo from '/public/youtube_logo.svg'
import searchIcon from '/public/search.svg'
import cameraIcon from '/public/camera.svg'
import dotsIcon from '/public/dots.svg'
import ringIcon from '/public/ring.svg'
import userAvatar from '/public/user.png'
import profileImg from '/public/profile-img-1.svg'

const Header = () => {
    return (
        <header className="header">
            <nav className="navbar">
                <div className="navbar-section">
                    <button
                        className="burger-menu"
                        aria-label="Navigation menu"
                    >
                        <img src={burgerMenu} alt="Navigation menu icon"/>
                    </button>
                    <a href="/" className="logo">
                        <img src={youtubeLogo} alt="YouTube logo"/>
                    </a>
                </div>

                <form
                    className="search-form"
                    role="search"
                    method="get"
                >
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search"
                        aria-label="Search on YouTube"
                    />
                    <button
                        type="submit"
                        className="search-button"
                        aria-label="Search"
                    >
                        <img src={searchIcon} alt="Search icon"/>
                    </button>

                </form>

                <div className="navbar-section">
                    <button className="nav-button" aria-label="Create video">
                        <img src={cameraIcon} alt="Create video icon"/>
                    </button>
                    <button className="nav-button" aria-label="More actions">
                        <img src={dotsIcon} alt="More actions icon"/>
                    </button>
                    <button className="nav-button" aria-label="Notifications">
                        <img src={ringIcon} alt="Notifications icon"/>
                    </button>
                    <button className="user-avatar" aria-label="User profile">
                        <img src={userAvatar} alt="User photo"/>
                    </button>
                    <button className="mobile-menu" aria-label="Mobile menu">
                        <img src={profileImg} alt="Mobile menu icon"/>
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header