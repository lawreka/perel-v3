import styled from 'styled-components';

export const BioTextWrapper = styled.div`
    display: flex;
    align-items: center;

    @media (min-width: 0px) and (max-width: 767px) {
        flex-direction: column;
    }
`;

export const BioText = styled.div`
    padding: 20px;
    max-width: 30em;
`;