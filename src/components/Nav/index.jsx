import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { NavToggleButton, NavWrapper } from './styles';

export const Nav = () => {
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
                <NavToggleButton onClick={toggleNav}>
                    {mobileNavOpen ? `Close Navigation` : `Open Navigation`}
                </NavToggleButton>
            )}
            {((isMobile && mobileNavOpen) || !isMobile) && (
                <NavWrapper>
                    <Link to="/" onClick={handleNavClick}>
                        Perel
                    </Link>
                    <Link to="/works" onClick={handleNavClick}>
                        Selected recent works
                    </Link>
                    <Link to="/links" onClick={handleNavClick}>
                        Links to panels and lectures
                    </Link>
                    <Link to="/workshops" onClick={handleNavClick}>
                        Workshops
                    </Link>
                    <Link to="/upcoming" onClick={handleNavClick}>
                        Upcoming appearances
                    </Link>
                </NavWrapper>
            )}
        </>
    );
};
