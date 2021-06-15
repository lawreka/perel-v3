import styled from 'styled-components';

export const NavWrapper = styled.div`
    display: flex;
    justify-content: space-between;
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

    @media (min-width: 0px) and (max-width: 767px) {
        position: fixed;
        width: 100%;
        flex-direction: column;
        padding-top: 0px;
        background-color: #fff;

        a {
            padding-bottom: 16px;
        }
    }
`;

export const NavToggleButton = styled.button`
    margin: 20px;
`;
