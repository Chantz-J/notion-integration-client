import styled from 'styled-components';


//Card Components
export const ListItem = styled.li`
    scroll-snap-align: none;
    width: 100%;
    min-width: 0;
    border-right: 0;
    display: flex;
    flex-direction: column;
    white-space: normal;
`;

export const CardLink = styled.a`
    color: ${props => props.theme.text.secondary};
    padding-bottom: 3rem;
    padding: 1.5rem;
    border-color: ${props => props.theme.text.secondary};
    border: 1px solid rgba(84, 149, 255, 0.3);
    border-color: #3eeaf1;
    border-radius: .125rem;
    white-space: normal;
    flex: 1 1 0%;
    display: flex;
    position: relative;
    cursor: pointer;

    h2 {
        &:hover {
            border-bottom: #3901F1;
        }
    }

`;

export const ArticleSec = styled.article`
    height: 100%;

    p {
        color: ${props => props.theme.text.tertiary};
        font-size: .875rem;
        line-height: 1.25rem;
        white-space: normal;
        margin-bottom: 1.25rem;
        margin-top: 1.25rem;
    }

    time {
        font-size: .75rem;
        line-height: 1rem;
        // left: 1.5rem;
        // bottom: 1.5rem;
        // position: absolute;
        color: ${props => props.theme.text.quarternary};
    }
`;

