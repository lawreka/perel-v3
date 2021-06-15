import React from 'react';

import { Image } from '../Image';
import {
    PortfolioSectionWrapper,
    Title,
    ImageWrapper,
    VideoEmbed,
    ContentWrapper
} from './styles';

export const PortfolioSection = ({ portfolioContent }) => {
    const width = window.innerWidth;
    const isMobile = width < 767;
    const imageWidth = isMobile ? `${width}` : "500";
    return (
        <PortfolioSectionWrapper>
            <hr />
            <div id={portfolioContent.key}>
                <Title>{portfolioContent.title}</Title>
            </div>            
            <ImageWrapper>
                {portfolioContent.images && portfolioContent.images.map((img) =>
                    <Image key={img} imgId={img} width={imageWidth} />
                )}
            </ImageWrapper>
            <ImageWrapper>
                {portfolioContent.YTlinks && portfolioContent.YTlinks.map((link) =>
                    <VideoEmbed key={link} width={imageWidth} height="315" src={link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></VideoEmbed>
                )}
                {portfolioContent.Vimeolinks && portfolioContent.Vimeolinks.map((link) =>
                    <VideoEmbed key={link} src={link} width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></VideoEmbed>
                )}
            </ImageWrapper>
            <ContentWrapper>
                {portfolioContent.content}
            </ContentWrapper>
        </PortfolioSectionWrapper>
    );
};
