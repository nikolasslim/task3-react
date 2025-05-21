import channelIcon from '/public/chanel_icon.png'
import "./VideoDescription.css"

const VideoDescription = () => {
    return (
        <div className="video-description">
            <div className="chanel-logo">
                <img src={channelIcon} alt="chanel-logo"/>
            </div>
            <div className="description-details">
                <h3 className="description-header">Food & Drink</h3>
                <span className="description-date">Published on 14 Jun 2019</span>
                <span className="description-date mobile">245K subscribed</span>
                <p className="description-text">A successful marketing plan relies heavily on the pulling-power of
                    advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and
                    convince consumers to take action. There is no magic formula to write perfect ad copy; it is based
                    on a number of factors, including ad placement, demographic, even the consumer's mood when they see
                    your ad.
                </p>
                <button className="description-btn">Show more</button>
            </div>
            <div>
                <button className="subscribe-btn">Subscribe 2.3m</button>
                <button className="subscribe-btn mobile">Subscribe</button>
            </div>
        </div>
    )
}

export default VideoDescription