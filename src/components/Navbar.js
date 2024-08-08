import './Navbar.css';
import React, { useState } from 'react';

const Navbar = () => {

  const [isOpen1, setIsOpen1] = useState(false);

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };

  const closeDropdown1 = () => {
    setIsOpen1(false);
  };

  const [isOpen2, setIsOpen2] = useState(false);

  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };

  const closeDropdown2 = () => {
    setIsOpen2(false);
  };



  return (
    <div className='navCover'>
      <nav className="navbar">
        <a href="/" aria-current="page" className="brand w-nav-brand w--current" aria-label="home">
          <img
            src="https://cdn.prod.website-files.com/6529141f1a0ce7d8914cc79a/653b93b1cbe9639e1d6a3c6d_light.svg"
            alt="MarianaAI's Official Logo"
            className="brand-logo"
          />
        </a>



        <ul className="navbar-links">
          <li>
            <div className="dropdown-container">
              <a href='#none' onMouseEnter={toggleDropdown1} onMouseLeave={closeDropdown1} className="dropdown-button">
                SOLUTIONS
              </a>
              <div className="icom"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg></div>
              {isOpen1 && (
                <ul className={`dropdown-menu ${isOpen1 ? 'open' : ''}`}>
                  <li className="dropdown-item" onClick={closeDropdown1}>
                    <div>
                      <img src="https://cdn.prod.website-files.com/6529141f1a0ce7d8914cc79a/653f403c57ddfa38a53bdb8d_user-profile-voice.svg" loading="lazy" alt="" /></div>
                    AI MEDICAL SCRIBE
                  </li>
                  <li className="dropdown-item" onClick={closeDropdown1}>
                  <div>
                  <img src="https://cdn.prod.website-files.com/6529141f1a0ce7d8914cc79a/653f4047febcba79e34c8ad8_Heartbeat%2C%20Heart.svg" loading="lazy" alt="" /></div>
                    PATIENT PORTRAIT
                    </li>
                  <li className="dropdown-item" onClick={closeDropdown1}>
                  <div>
                  <img src="https://cdn.prod.website-files.com/6529141f1a0ce7d8914cc79a/653f404749859d6302e5e5ef_Medical%20cross.svg" loading="lazy" alt="" /></div>
                  AUTONOMOUS MEDICAL CODING</li>
                  <li className="dropdown-item" onClick={closeDropdown1}>
                  <div>
                  <img src="https://cdn.prod.website-files.com/6529141f1a0ce7d8914cc79a/653f405b6fbd1f7f7b208ecf_star-light-sparkle-circle.svg" loading="lazy" alt="" /></div>MARIANGPT</li>
                  <li className="dropdown-item" onClick={closeDropdown1}>
                  <div>
                  <img src="https://cdn.prod.website-files.com/6529141f1a0ce7d8914cc79a/653f40345c907fd6c4181152_email-mail-letter.svg" loading="lazy" alt="" /></div>PATIENT COMMUNICATION ASSIS</li>
                </ul>
              )}
            </div>
          </li>
          <li>
            <div className="dropdown-container">
              <a href='#none' onMouseEnter={toggleDropdown2} onMouseLeave={closeDropdown2} className="dropdown-button">
                RESOURCES
              </a>
              <div className="icom"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg></div>
              {isOpen2 && (
                <ul className={`dropdown-menu ${isOpen2 ? 'open' : ''}`}>
                  <li className="dropdown-item" onClick={closeDropdown2}>BLOG</li>
                  <li className="dropdown-item" onClick={closeDropdown2}>KNOWLEDGE HUB</li>
                </ul>
              )}
            </div>
          </li>
          <li><a href="/community" className="">COMMUNITY</a></li>
          <li><a href="/about-us" className="">ABOUT US</a></li>
          <li><a href="/contact-us" className="">Contact</a></li>
        </ul>
       
      <div className='flexx'>
        <a href="https://app.marianaai.com/" className="button"><div className="nav-button">Sign In</div><img src="https://cdn.prod.website-files.com/6529141f1a0ce7d8914cc79a/652922ee1c309ba460d3cf8d_Left%2C%20Arrow.svg" loading="lazy" alt="" className="white-arrow" /></a>
        <div className="navigation-button-wrap">
      <div
        className="menu-button w-nav-button"
        style={{ WebkitUserSelect: "text" }}
        aria-label="menu"
        role="button"
        tabIndex="0"
        aria-controls="w-nav-overlay-0"
        aria-haspopup="menu"
        aria-expanded="false"
      >
        <div className="icon w-icon-nav-menu">=</div>
      </div>
    </div>

    </div>
      </nav>

        <div className='w-nav-overlay'>
          
        <ul className="navbar-links">
          <li>
            <div className="dropdown-container">
              <a href='#none' onMouseEnter={toggleDropdown1} onMouseLeave={closeDropdown1} className="dropdown-button">
                SOLUTIONS
              </a>
              <div className="icom"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg></div>
              {isOpen1 && (
                <ul className={`dropdown-menu ${isOpen1 ? 'open' : ''}`}>
                  <li className="dropdown-item" onClick={closeDropdown1}>
                    <div>
                      <img src="https://cdn.prod.website-files.com/6529141f1a0ce7d8914cc79a/653f403c57ddfa38a53bdb8d_user-profile-voice.svg" loading="lazy" alt="" /></div>
                    AI MEDICAL SCRIBE
                  </li>
                  <li className="dropdown-item" onClick={closeDropdown1}>
                  <div>
                  <img src="https://cdn.prod.website-files.com/6529141f1a0ce7d8914cc79a/653f4047febcba79e34c8ad8_Heartbeat%2C%20Heart.svg" loading="lazy" alt="" /></div>
                    PATIENT PORTRAIT
                    </li>
                  <li className="dropdown-item" onClick={closeDropdown1}>
                  <div>
                  <img src="https://cdn.prod.website-files.com/6529141f1a0ce7d8914cc79a/653f404749859d6302e5e5ef_Medical%20cross.svg" loading="lazy" alt="" /></div>
                  AUTONOMOUS MEDICAL CODING</li>
                  <li className="dropdown-item" onClick={closeDropdown1}>
                  <div>
                  <img src="https://cdn.prod.website-files.com/6529141f1a0ce7d8914cc79a/653f405b6fbd1f7f7b208ecf_star-light-sparkle-circle.svg" loading="lazy" alt="" /></div>MARIANGPT</li>
                  <li className="dropdown-item" onClick={closeDropdown1}>
                  <div>
                  <img src="https://cdn.prod.website-files.com/6529141f1a0ce7d8914cc79a/653f40345c907fd6c4181152_email-mail-letter.svg" loading="lazy" alt="" /></div>PATIENT COMMUNICATION ASSIS</li>
                </ul>
              )}
            </div>
          </li>
          <li>
            <div className="dropdown-container">
              <a href='#none' onMouseEnter={toggleDropdown2} onMouseLeave={closeDropdown2} className="dropdown-button">
                RESOURCES
              </a>
              <div className="icom"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg></div>
              {isOpen2 && (
                <ul className={`dropdown-menu ${isOpen2 ? 'open' : ''}`}>
                  <li className="dropdown-item" onClick={closeDropdown2}>BLOG</li>
                  <li className="dropdown-item" onClick={closeDropdown2}>KNOWLEDGE HUB</li>
                </ul>
              )}
            </div>
          </li>
          <li><a href="/community" className="">COMMUNITY</a></li>
          <li><a href="/about-us" className="">ABOUT US</a></li>
          <li><a href="/contact-us" className="">Contact</a></li>
        </ul>
              </div>      
    </div>
  );
};

export default Navbar;



