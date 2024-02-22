import './../pages-styles/5-contact.css'

export default function Contact(){
    return(
        <>
            <section className="contact" id="contact">
                <div className="contact-containers">
                    <img src="src/images/logo-ws.png" alt="logo" className='contact-logo' />
                    <p className="agency-name">Mega Galactica</p>
                </div>
                <div className="contact-containers">
                    <p className="contact-titles">services</p>
                    <p className="contact-description">development</p>
                    <p className="contact-description">design</p>
                    <p className="contact-description">branding</p>
                    <p className="contact-description">maintenance</p>
                </div>
                <div className="contact-containers">
                    <p className="contact-titles">about us</p>
                    <p className="contact-description">experience</p>
                    <p className="contact-description">values</p>
                </div>
                <div className="contact-containers">
                    <p className="contact-titles">portfolio</p>
                    <p className="contact-description">all works</p>
                    <p className="contact-description">web/app</p>
                    <p className="contact-description">design</p>
                </div>
                <div className="contact-containers">
                    <div className="contact-icons">
                        <a href='https://www.instagram.com/mega_galactica/' target='blank'>
                            <img src="src/images/instagram.png" alt="instagram-link" className='social-icon' />
                        </a>
                        <a>
                            <img src="src/images/tiktok1.png" alt="tiktok-link" className='social-icon' />
                        </a>
                        <a href='https://www.facebook.com/mega.galactica/' target='blank'>
                            <img src="src/images/facebook.png" alt="facebook-link" className='social-icon' />
                        </a>
                    </div>
                    <p className="copyright">©copyright, all rights are reserved</p>
                </div>
            </section>
        </>
    )
}