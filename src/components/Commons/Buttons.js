import styled from "styled-components";

export const StyledButton = styled.button`
    background: ${({ theme }) => theme.bg.secondary};
    color: ${({ theme }) => theme.bg.primary};
    border: none;
    padding: 1rem;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 600;
    border-radius: 15px;
`;