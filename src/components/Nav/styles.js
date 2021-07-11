import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const NavButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 20px;
    position: relative;
    z-index: 3;
`;

export const NavLink = styled(Link)`
    margin-right: 40px;
    @media (min-width: 0px) and (max-width: 767px) {
        padding-left: 20px;
    }
`;

export const DesktopNavWrapper = styled.div`
    display: flex;
    padding: 20px;
    font-size: 20px;
    text-underline-offset: 4px;

    a {
        color: #000;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;

export const MobileNavWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    padding-top: 60px;
    display: flex;
    z-index: 2;
    flex-direction: column;
    background-color: #fff;
    overflow: hidden;

    a {
        color: #000;
        text-decoration: none;
        padding-bottom: 16px;
    }
`;
