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

    return (
        <>
            {isMobile && (
                <NavToggleButton onClick={toggleNav}>
                    {mobileNavOpen ? `Close Navigation` : `Open Navigation`}
                </NavToggleButton>
            )}
            {((isMobile && mobileNavOpen) || !isMobile) && (
                <NavWrapper>
                    <Link to="/">Perel</Link>
                    <Link to="/works">Selected recent works</Link>
                    <Link to="/links">Links to panels and lectures</Link>
                    <Link to="/workshops">Workshops</Link>
                    <Link to="/upcoming">Upcoming appearances</Link>
                </NavWrapper>
            )}
        </>
    );
};
