import './../pages-styles/1-home.css'

function Home(){
    return(
        <>
            <section className="home" id='home'>
                <div className="home-sentences-container">
                    <p className="home-sentence1">
                        upgrade
                    </p>
                    <p className="home-sentence2">
                        development Mastery
                    </p>
                    <p className="home-sentence3">
                        welcome to mega galactica agency, your gateway
                        to upgrading your business
                    </p>
                    <p className="home-sentence4">
                        here in our website you can see our avaible services,
                        story,experience and work, take a good look then give us 
                        a call if you are intrested or have any question.
                    </p>
                    <button className="home-services" >
                        <a href="#services" style={{color: "white"}}>services</a>
                    </button>
                </div>
                <img src="src/images/gg.jpg" alt="home picture" className='home-image' />
            </section>
        </>
    )
}

export default Home