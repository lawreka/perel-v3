import styled from 'styled-components';

export const BioWrapper = styled.div`
    @media (min-width: 0px) and (max-width: 767px) {
        displax: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export const BioImage = styled.img`
    max-width: 400px;
    @media (min-width: 0px) and (max-width: 767px) {
        max-width: 300px;
    }
`;

export const BioImageWrapper = styled.div`
    float: left;
    padding: 0px 20px 10px 0px;
    @media (min-width: 0px) and (max-width: 767px) {
        float: unset;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
    }
`;

export const BioTextWrapper = styled.div`
    max-width: 1200px;
    @media (min-width: 0px) and (max-width: 767px) {
         padding: 0px 20px 20px 20px;
         margin-bottom: 20px;
    }
`;
