import React from 'react';

import { Image } from '../Image';
import {
    PortfolioSectionWrapper,
    Title,
    ImageWrapper,
    VideoEmbedWrapper,
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
                    <VideoEmbedWrapper key={link}>
                        <VideoEmbed
                            width={imageWidth}
                            height="315"
                            src={link}
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        />
                    </VideoEmbedWrapper>
                )}
                {portfolioContent.Vimeolinks && portfolioContent.Vimeolinks.map((link) =>
                    <VideoEmbedWrapper key={link}>
                        <VideoEmbed
                            src={link}
                            width="640"
                            height="360"
                            frameborder="0"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowfullscreen
                        />
                    </VideoEmbedWrapper>
                )}
            </ImageWrapper>
            <ContentWrapper>
                {portfolioContent.content}
            </ContentWrapper>
        </PortfolioSectionWrapper>
    );
};
