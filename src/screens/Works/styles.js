import styled from 'styled-components';

export const WorkLinks = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;

export const LinkTitle = styled.h2`
    margin-bottom: 20px;
`;

export const PortfolioLink = styled.a`
    text-decoration: none;
    padding-bottom: 8px;

    &:hover {
        text-decoration: underline;
    }
`;

export const LinkToTop = styled.a`
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #000;

    &:hover {
        text-decoration: underline;
    }

`;