import styled from 'styled-components';

export const PortfolioSectionWrapper = styled.div`
    margin-bottom: 60px;
`;

export const Title = styled.h1`
    margin-bottom: 20px;
`;

export const ImageWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    img {
        margin: 8px;
    }

    @media (min-width: 0px) and (max-width: 767px) {
        justify-content: center;

        img {
            max-width: 100%;    
        }
    }
`;

export const VideoEmbed = styled.iframe`
    margin: 8px;
`;

export const ContentWrapper = styled.div`
    padding: 20px;
    max-width: 40em;

    a {
        text-decoration: none;
        padding-bottom: 8px;

        &:hover {
            text-decoration: underline;
        }
    }
`;
