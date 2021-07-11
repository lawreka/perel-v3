import React from 'react';

import { ScreenWrapper } from '../../screens/styles';
import { PortfolioSection } from '../../components/PortfolioSection';

import { portfolioContent } from './constants';
import { WorkLinks, LinkTitle, PortfolioLink, LinkToTop } from './styles';

export const Works = () => {
    return (
        <ScreenWrapper>
            <WorkLinks>
                <LinkTitle>
                    Selected recent works
                </LinkTitle>
                {portfolioContent && portfolioContent.map((work) =>
                    <PortfolioLink key={work.key} href={`/works#${work.key}`}>
                        {work.title}
                    </PortfolioLink>
                )}
            </WorkLinks>
            
            {portfolioContent && portfolioContent.map((work) =>
                <PortfolioSection key={work.key} portfolioContent={work} />
            )}
            
            <LinkToTop href="/works#top">↑</LinkToTop>
        </ScreenWrapper>
    );
};
