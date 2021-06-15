import React from 'react';

import { Image } from '../../components/Image';
import { ScreenWrapper } from '../../screens/styles';

import { homepageContent } from './constants';
import { BioTextWrapper, BioText } from './styles';

export const Home = () => {
    return (
        <ScreenWrapper>
            <BioTextWrapper>
                <Image imgId={homepageContent.homeImage} />
                <BioText>
                    Perel is an interdisciplinary artist whose work is centered on disability and queerness as they relate to care, consent, sexuality, and personal and historic trauma. Utilizing choreography to examine power exchange between the artist and audience, “Perel is a master at timing, of tension, relief, and intimacy while creating a space of learning and unlearning.” (Victoria DeJaco, Spike Magazine).<br/>
                    <br/>
                    Their work includes performance, installation, criticism and curatorial projects. They often use collaboration as a platform for the exchange of disciplines, working methods and discourses with other choreographers, composers and visual artists. Perel asks, “How do we move across space and time with respect to our collected histories?” Their work has been shown for more than a decade at numerous galleries, theaters and performance spaces in the U.S. and abroad.</BioText>
            </BioTextWrapper>
            
            
        </ScreenWrapper>
    );
};
