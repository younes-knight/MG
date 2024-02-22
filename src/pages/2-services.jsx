import './../pages-styles/2-services.css'
import { useInView } from 'react-intersection-observer'
import Card from '../components/2-services-card'
function Services(){
    const {ref: title, inView: isTitleVisible} =useInView();
    return(
        <>
            <section className='services' id='services'>
                <p ref={title} className={`services-title ${isTitleVisible ? "services-title1" : ""}`} >
                    services
                </p>
                <div className='services-cards-container'>
                <Card icon='web' title='websites' bgColor='orange'
                description='Websites Development: make your brand more professional.'/>
                <Card icon='travel_explore' title='seo' bgColor='rgb(91, 126, 232)'
                description='search engine optimization: boost your traffic.'/>
                <Card icon='smartphone' title='apps' bgColor='#7FFFD4'
                description='applications development: enter the apps world with us.'/>
                <Card icon='brush' title='logo' bgColor='#880ED4'
                description='logo design: make a logo that describes your brand the best.'/>
                <Card icon='slideshow' title='slides' bgColor='#E84B4F'
                description='slides presentation: design stunning shows with us.'/>
                <Card icon='add_photo_alternate' title='SM posts' bgColor='#C0C0F2'
                description='social media posts: go viral with our posts designs.'/>
                </div>
            </section>
        </>
    )
}

export default Services