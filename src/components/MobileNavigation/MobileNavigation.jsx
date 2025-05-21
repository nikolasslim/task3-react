import "./MobileNavigation.css";

const MobileNavigation = () => {
    return (
        <nav className="mobile-navbar">
            <ul className="mobile-nav-links">
                <li>
                    <a href="/" className="mobile-nav-link active" aria-label="Go to home page">
                        <img src="src/assets/icons/home.svg" alt="Home icon"/>
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a href="/" className="mobile-nav-link" aria-label="Go to trending page">
                        <img src="src/assets/icons/trending.svg" alt="Trending icon"/>
                        <span>Trending</span>
                    </a>
                </li>
                <li>
                    <a href="/" className="mobile-nav-link" aria-label="Go to subscriptions page">
                        <img src="src/assets/icons/subscrioptions.svg" alt="Subscriptions icon"/>
                        <span>Subscriptions</span>
                    </a>
                </li>
                <li>
                    <a href="/library" className="mobile-nav-link" aria-label="Go to library page">
                        <img src="src/assets/icons/library.svg" alt="Library icon"/>
                        <span>Library</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default MobileNavigation