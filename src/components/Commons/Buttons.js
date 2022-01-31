import styled from "styled-components";

export const StyledButton = styled.button`
    background: ${({ theme }) => theme.bg.secondary};
    background: rgb(57, 1, 241);
    color: ${({ theme }) => theme.bg.primary};
    border: none;
    border-radius: 4px;
    display: inline-block;
    font-size: 1.2rem;
    font-weight: 700;
    padding: 8px 16px;
    text-decoration: none;
    cursor: pointer;
`;