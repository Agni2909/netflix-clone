import React,{useState,useEffect} from 'react'
import './Navbar.css';

function Navbar() {
    const [show,handleShow]=useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    
  return (
    <div className={`nav ${show&&"nav_black"}`}>
        <img className='nav_logo' src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png" alt="Netflix Logo"/>
        <img className="nav_avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="profile_image" />

    </div>
  )
}

export default Navbar