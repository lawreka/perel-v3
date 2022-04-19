import React from 'react';

import { ScreenWrapper } from '../../screens/styles';

import { BioImage, BioTextWrapper, BioImageWrapper, BioWrapper } from './styles';

export const Home = () => {
    return (
        <ScreenWrapper>
            <BioWrapper>
                <BioImageWrapper>
                    <BioImage src="https://res.cloudinary.com/klawkloud/image/upload/v1623783394/perel-v3/McN_Marissa_DoNotDespair12171_iyikij.jpg" />
                </BioImageWrapper>
                <BioTextWrapper>
                    Perel is an interdisciplinary artist whose work is centered on disability and queerness as they relate to care, consent, sexuality, and personal and historic trauma. Utilizing choreography to examine power exchange between the artist and audience, “Perel is a master at timing, of tension, relief, and intimacy while creating a space of learning and unlearning.” (Victoria DeJaco, Spike Magazine).<br/>
                    <br/>
                    Their work includes performance, installation, criticism and curatorial projects. They often use collaboration as a platform for the exchange of disciplines, working methods and discourses with other choreographers, composers and visual artists. Perel asks, “How do we move across space and time with respect to our collected histories?” Their work has been shown for more than a decade at numerous galleries, theaters and performance spaces in the U.S. and abroad.<br />
                    <br />
                    Perel tours and teaches internationally, as a university lecturer and mentor to emerging disabled artists at organizations in New York and Berlin. They recently received the distinguished award of Disability Futures Fellow (2020-2022) from United States Artists, and the Ford and Mellon Foundations. They were a 2020 All-In AIR at Mousonturm (DE), a Mertz-Gilmore AIR at Movement Research (2018-2020), and a 2018 Dance in Process AIR at Gibney Dance, where they received the Beth Silverman-Yam Award for Social Justice (NY). They were the first International AIR for Disabled Artists in the Making a Difference program at Sophiensaele (DE), and a selected disabled choreographer for Choreo-Lab, a pilot program of the integrated dance company, AXIS Dance (2018). Their recent work, Life (Un)Worthy of Life: A Queer, Dis/Crip Talkshow premiered at No Limits, a disability centered festival in Berlin and at Kampnagel for the Tage der Judisch-Muslimischen Leitkultur in October 2020. The artist‘s previous work, Pain Threshold, was presented at the American Realness Festival in New York in 2019, Tanztage at Sophiensaele, and Impulstanz. Notable previous commissions have been presented at Abrons Art Center for American Realness 2018, The Chocolate Factory Theater co-presented with the New York International Queer Performance Festival, numerous Movement Research festivals and showings at the Judson Church, The Elizabeth Foundation for the Arts (NY), and for the 25th Anniversary of the Americans with Disabilities Act at the Chicago Humanities Festival. They have most recently presented keynotes and conversations at Princeton and Syracuse Universities, Marymount Manhattan College, University of Vienna, and for the IntegrArt Conference: Rethinking Structures (Zurich).
                </BioTextWrapper>
            </BioWrapper>
        </ScreenWrapper>
    );
};
