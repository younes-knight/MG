import './../components-styles/2-services-card.css'
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';

function Card(props){
    const {ref: card, inView: isCardVisible} =useInView();
    return(
        <>
            <div ref={card} className={`services-card ${isCardVisible ? "services-card1" : ""}`}>
                <i className="material-icons" 
                style={{color: 'white',fontSize: '2em',padding:'0.2em',
                backgroundColor: props.bgColor ,borderRadius:'0.3em',margin: '0 0 0 0.5em'}}
                >
                    {props.icon}
                </i>
                <p className="services-card-title">
                    {props.title}
                </p>
                <p className="services-card-description">
                    {props.description}
                </p>
            </div>
        </>
    )
}

export default Card
Card.propTypes={
    icon : PropTypes.string,
    title : PropTypes.string,
    description : PropTypes.string,
    bgColor :PropTypes.string,
}