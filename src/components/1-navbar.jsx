import { useState,useRef,useEffect } from 'react'
import './../components-styles/1-navbar.css'

function Nav() {
    const [menu,setMenu] = useState('menu');
    const [navColor,setNavColor] = useState('transparent')
    const menuRef = useRef();
    const opcl = ()=>{
        if(menu === 'menu'){
            setMenu('close');
            menuRef.current.classList.add('navbar-links-1');
            menuRef.current.classList.remove('navbar-links');
        }else{
            setMenu('menu');
            menuRef.current.classList.add('navbar-links');
            menuRef.current.classList.remove('navbar-links-1');
        }
    }
    useEffect(() => {
        const handleScroll = () => {
            if(scrollY>0){
                setNavColor('#222222')
            }
            else{
                setNavColor('transparent')
            }        
        };
        window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
    }, []);
    return (
        <>
            <header className="navbar" style={{backgroundColor: navColor}}>
                <a href="#home" className='navbar-logo'>
                    <img src="src/images/logo-ws.png" alt="logo" className='navbar-logo-image' />
                </a>
                <i className='material-icons' id='menu-icon' onClick={opcl}>{menu}</i>
                <nav className="navbar-links" ref={menuRef}>
                    <a href="#services" className="navbar-link" onClick={opcl}>services</a>
                    <a href="#about-us" className="navbar-link" onClick={opcl}>about us</a>
                    <a href="#portfolio" className="navbar-link" onClick={opcl}>portfolio</a>
                    <a href="#contact" className="navbar-link" onClick={opcl}>contact</a>
                </nav>
                <button className="navbar-call" >
                    <a href="tel:0697133715" style={{color: "white"}}>lets talk</a>
                </button>
            </header>
        </>
    )
}

export default Nav