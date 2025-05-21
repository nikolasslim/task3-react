import './Header.css';

const Header = () => {


    return (
        <header className="header">
            <nav className="navbar">
                <div className="navbar-section">
                    <button
                        className="burger-menu"
                        aria-label="Navigation menu"
                    >
                        <img src="src/assets/icons/burger_menu.svg" alt="Navigation menu icon"/>
                    </button>
                    <a href="/" className="logo">
                        <img src="src/assets/icons/youtube_logo.svg" alt="YouTube logo"/>
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
                        <img src="src/assets/icons/search.svg" alt="Search icon"/>
                    </button>

                </form>

                <div className="navbar-section">
                    <button className="nav-button" aria-label="Create video">
                        <img src="src/assets/icons/camera.svg" alt="Create video icon"/>
                    </button>
                    <button className="nav-button" aria-label="More actions">
                        <img src="src/assets/icons/dots.svg" alt="More actions icon"/>
                    </button>
                    <button className="nav-button" aria-label="Notifications">
                        <img src="src/assets/icons/ring.svg" alt="Notifications icon"/>
                    </button>
                    <button className="user-avatar" aria-label="User profile">
                        <img src="src/assets/icons/user.png" alt="User photo"/>
                    </button>
                    <button className="mobile-menu" aria-label="Mobile menu">
                        <img src="src/assets/icons/profile-img-1.svg" alt="Mobile menu icon"/>
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header