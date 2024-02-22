import { useInView } from 'react-intersection-observer';
import './../pages-styles/3-about-us.css'

function About(){
    const {ref: experience, inView: isExperienceVisible} = useInView();
    const {ref: values, inView: isValuesVisible} = useInView();
    const {ref: title, inView: isTitleVisible} =useInView();
    return(
        <>
            <section className="about-us" id='about-us'>
                <p ref={title} 
                className={`about-us-title ${isTitleVisible ? 'about-us-title1' :''}`}>about us</p>
                <div ref={experience}
                className={`about-us-experience ${isExperienceVisible ? 'about-us-experience1' :''}`}>
                    <div className="about-us-experience-article">
                        <p className="about-us-experience-title1">our experience</p>
                        <p className="about-us-experience-title2">The story of our History: buttom to top</p>
                        <p className="about-us-experience-description">
                            our experience talks about its self thats why
                            we have this att yea its real in there this is 
                            the real word weither you like it or you dont,
                            we care this much believe it or not 
                        </p>
                        <p className="about-us-experience-description">
                            our experience yea nigga the outsider
                            baby dont mess with us too much
                            we care this much believe it.
                        </p>
                    </div>
                    <img src="src/images/experience.png" alt="experience" 
                    className='about-us-experience-image'/>
                </div>
                <div ref={values} 
                className={`about-us-values ${isValuesVisible ? 'about-us-values1' :''}`}>
                    <img src="src/images/values.jpg" alt="experience" 
                    className='about-us-experience-image'/>
                    <div className="about-us-experience-article">
                        <p className="about-us-experience-title1">our values</p>
                        <p className="about-us-experience-title2">The story of our History: buttom to top</p>
                        <p className="about-us-experience-description">
                            our experience talks about its self thats why
                            we have this att yea its real in there this is 
                            the real word weither you like it or you dont,
                            we care this much believe it or not 
                        </p>
                        <p className="about-us-experience-description">
                            our experience yea nigga the outsider
                            baby dont mess with us too much
                            we care this much believe it.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;