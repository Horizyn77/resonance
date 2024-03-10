import { FaStar } from 'react-icons/fa';
import { IconContext } from 'react-icons';

function FeaturedAlbumItem() {
    return (
        <div className="featured-album-item">
            <div>
                <img src="https://e.snmc.io/i/600/w/c35380cce1da542736217d06689877ec/2557124/nine-inch-nails-the-downward-spiral-Cover-Art.jpg" alt="" />
            </div>
            <div className="featured-album-content">

                <h3>The Downward Spiral <span>(1994)</span></h3>
                <h3>Nine Inch Nails</h3>
                <div className="reviewed-by">
                    <small>Review by <span>jshopa</span></small>
                </div>
                <div className="review-rating">
                    <IconContext.Provider value={{ style: { color: "orange" } }}>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </IconContext.Provider>
                    <FaStar />
                    <FaStar />
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus quidem veritatis eligendi provident sint neque, totam vitae, consequuntur architecto porro ratione impedit aliquam fuga natus harum explicabo nobis voluptatum. Ipsum quos nemo, perspiciatis molestiae temporibus quas pariatur odio labore obcaecati.</p>
            </div>
        </div>
    )
}

export default FeaturedAlbumItem;