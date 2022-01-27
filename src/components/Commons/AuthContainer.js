import styled from "styled-components";

export const AuthWrapper = styled.form`
    padding: 2rem;
    border: 1px solid rgba(84, 149, 255, 0.3);
    max-width: 500px;
    justify-self: flex-end;
`;

export const StyledInput = styled.input`
    padding: 1.2rem;
    color: ${props => props.theme.text.primary};
    border: 1px solid ${props => props.theme.bg.secondary};
    background: ${props => props.theme.bg.primary};
    // width: 100%;
`;

export const StyledTextarea = styled.textarea`
    padding: 1.2rem;
    border: 1px solid ${props => props.theme.bg.secondary};
    background: ${props => props.theme.bg.primary};
    width: 100%;
`;

