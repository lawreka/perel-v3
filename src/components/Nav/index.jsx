import React, { useState } from 'react';

import { Hamburger } from './Hamburger';
import { Close } from './Close';
import { NavButtonWrapper, DesktopNavWrapper, MobileNavWrapper, NavLink } from './styles';

export const Nav = ({ children }) => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const width = window.innerWidth;
    const isMobile = width < 767;

    const toggleNav = () => {
        setMobileNavOpen(!mobileNavOpen);
    }

    const handleNavClick = () => {
        if (mobileNavOpen) {
            setMobileNavOpen(false);
        }
    }

    return (
        <>
            {isMobile && (
                <NavButtonWrapper>
                    <div onClick={toggleNav}>
                        {mobileNavOpen ? <Close /> : <Hamburger />}
                    </div>
                        
                </NavButtonWrapper>
                
            )}
            {!isMobile && (
                <DesktopNavWrapper>
                    <NavLink to="/" onClick={handleNavClick}>
                        Perel
                    </NavLink>
                    <NavLink to="/works" onClick={handleNavClick}>
                        Selected recent works
                    </NavLink>
                </DesktopNavWrapper>
            )}
            {isMobile && mobileNavOpen && (
                <MobileNavWrapper>
                    <NavLink to="/" onClick={handleNavClick}>
                        Perel
                    </NavLink>
                    <NavLink to="/works" onClick={handleNavClick}>
                        Selected recent works
                    </NavLink>
                </MobileNavWrapper>
            )}
        </>
    );
};
