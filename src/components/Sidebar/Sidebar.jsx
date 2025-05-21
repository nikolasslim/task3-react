import "./Sidebar.css";

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar-controls">
                <span className="controls-left">Next</span>
                <div className="controls-toggle">
                    <span className="toggle-text">AUTOPLAY</span>
                    <button className="toggle-btn" aria-label="Toggle autoplay">
                        <img src="../../../public/toggle-btn.svg" alt="Toggle button"/>
                    </button>
                </div>
            </div>
            <div className="sidebar-content">
                <article className="video-card">
                    <div className="video-thumbnail">
                        <img
                            src="../../../public/1_1_baby.png"
                            alt="Baby Monitor Technology thumbnail"
                        />
                    </div>
                    <div className="video-details">
                        <h3 className="video-title">Baby Monitor Technology</h3>
                        <div className="video-data">
                            <span className="video-views">123k views</span>
                            <span className="video-channel">Dollie Blair</span>
                        </div>
                    </div>
                </article>
                <article className="video-card">
                    <div className="video-thumbnail">
                        <img
                            src="../../../public/1_2_good.png"
                            alt="A Good Autoresponder thumbnail"
                        />
                    </div>
                    <div className="video-details">
                        <h3 className="video-title">A Good Autoresponder</h3>
                        <div className="video-data">
                            <span className="video-views">123k views</span>
                            <span className="video-channel">Dollie Blair</span>
                        </div>
                    </div>
                </article>
                <article className="video-card">
                    <div className="video-thumbnail">
                        <img
                            src="../../../public/1_3_selecting.png"
                            alt="Selecting The Right Hotel thumbnail"
                        />
                    </div>
                    <div className="video-details">
                        <h3 className="video-title">Selecting The Right Hotel</h3>
                        <div className="video-data">
                            <span className="video-views">123k views</span>
                            <span className="video-channel">Dollie Blair</span>
                        </div>
                    </div>
                </article>
                <article className="video-card">
                    <div className="video-thumbnail">
                        <picture>
                            <source
                                media="(max-width: 1260px)"
                                srcSet="../../../public/1_4-full.png"
                            />
                            <img
                                className="video-img"
                                src="../../../public/1_4.png"
                                alt="Selecting The Right Hotel thumbnail"
                            />
                        </picture>
                    </div>
                    <div className="video-details hidden">
                        <h3 className="video-title">Selecting The Right Hotel</h3>
                        <div className="video-data">
                            <span className="video-views">123k views</span>
                            <span className="video-channel">Dollie Blair</span>
                        </div>
                    </div>
                </article>
            </div>
        </aside>
    );
};

export default Sidebar;