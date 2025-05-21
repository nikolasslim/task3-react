import "./MobileNavigation.css"
import homeIcon from '/public/home.svg'
import trendingIcon from '/public/trending.svg'
import subscriptionsIcon from '/public/subscrioptions.svg'
import libraryIcon from '/public/library.svg'

const MobileNavigation = () => {
    return (
        <nav className="mobile-navbar">
            <ul className="mobile-nav-links">
                <li>
                    <a href="/" className="mobile-nav-link active" aria-label="Go to home page">
                        <img src={homeIcon} alt="Home icon"/>
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a href="/" className="mobile-nav-link" aria-label="Go to trending page">
                        <img src={trendingIcon} alt="Trending icon"/>
                        <span>Trending</span>
                    </a>
                </li>
                <li>
                    <a href="/" className="mobile-nav-link" aria-label="Go to subscriptions page">
                        <img src={subscriptionsIcon} alt="Subscriptions icon"/>
                        <span>Subscriptions</span>
                    </a>
                </li>
                <li>
                    <a href="/library" className="mobile-nav-link" aria-label="Go to library page">
                        <img src={libraryIcon} alt="Library icon"/>
                        <span>Library</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default MobileNavigation