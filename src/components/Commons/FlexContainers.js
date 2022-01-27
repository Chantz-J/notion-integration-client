import styled from 'styled-components';

export const FlexRow = styled.div`
    width: 100%;
    max-width: 1920px;
    padding: 64px 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const FlexColumn = styled.div`
    width: 100%;
    max-width: 1920px;
    padding: 64px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.div`
    width: 100%;
    max-width: 1268px;
    // border: 1px solid black;
    display: flex;
    align-items: center;

    .list-grid {
        padding-left: 0;
        padding-right: 0;
        white-space: normal;
        grid-template-columns: repeat(3,minmax(0,1fr));
        display: grid;
        scroll-snap-type: none;
        width: 100%;
        overflow-x: scroll;
        gap: 1.25rem;
        list-style: none;
    }

    p {
        font-size: 1rem;
        line-height: 1.5rem;
        color: ${props => props.theme.text.primary};
        letter-spacing: -.01em;
        // margin-top: 2rem;
        max-width: 20rem;

    }
`;