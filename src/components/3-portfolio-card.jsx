import { useInView } from 'react-intersection-observer';
import './../components-styles/3-portfolio-card.css'
import PropTypes from 'prop-types';

function Card(props){
    const {ref: card, inView: isCardVisible} =useInView();
    return(
        <>
            <div ref={card} className={`portfolio-card ${isCardVisible ? "portfolio-card1" :""}`}>
                <img src={props.imageSource} alt={props.imageName} className='portfolio-card-image' />
                <p className="portfolio-card-title">{props.title}</p>
                <p className="portfolio-card-sub-title">{props.subTitle}</p>
            </div>
        </>
    )
}

export default Card

Card.propTypes={
    imageSource : PropTypes.string,
    imageName :PropTypes.string,
    title : PropTypes.string,
    subTitle : PropTypes.string,
}