import styled from "styled-components";

export const StyledH1 = styled.h1`
    line-height: 1;
    font-size: 4.5rem;
    font-size: ${props => props.theme.fontSizes[6]};
    color: #3eeaf1;
    color: ${props => props.theme.text.primary};
    max-width: 1024px;
    letter-spacing: -.025em;
    font-weight: 600;
`;

export const StyledH2 = styled.h2`
    letter-spacing: -.01em;
    font-size: 1.25rem;
    line-height: 1.75rem;
    color: ${props => props.theme.text.primary};
`;