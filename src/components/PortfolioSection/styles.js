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

export const VideoEmbedWrapper = styled.div`
    margin: 8px;
    
    @media (min-width: 0px) and (max-width: 767px) {
        width: 100%;
        padding:56.25% 0 0 0;
        position:relative;
    }
`;

export const VideoEmbed = styled.iframe`
    @media (min-width: 0px) and (max-width: 767px) {
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
    }
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

    @media (min-width: 0px) and (max-width: 767px) {
        padding: 0px;
        padding-top: 20px;
        max-width: 100%;
    }
`;
