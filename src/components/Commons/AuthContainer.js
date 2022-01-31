import styled from "styled-components";

export const AuthWrapper = styled.form`
    padding: 2rem;
    max-width: 2000px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const InputWrapper = styled.div`
    width: 100%;
    margin-bottom: 1.5rem;
    margin-right: 0px;
`;

export const LabelWrapper = styled.div`
    display: flex;
    -webkit-box-align: baseline;
    align-items: baseline;
`;

export const StyledLabel = styled.label`
-webkit-box-align: center;
    align-items: center;
    font-weight: 600;
    padding: 6px 0px;
    font-size: 14px;
    line-height: 20px;
    color: ${props => props.theme.text.primary};
    display: block;
`;



export const StyledTextarea = styled.textarea`
    padding: 1.2rem;
    border: 1px solid ${props => props.theme.bg.secondary};
    margin: .5rem 0;
    border-radius: 6px;
    background: ${props => props.theme.bg.primary};
    width: 100%;
    min-height: 500px;
    color: ${props => props.theme.text.primary};
    font-size: ${props => props.theme.fontSizes[0]};
    line-height: 2.4rem;

    &::-webkit-input-placeholder {
        color: ${props => props.theme.bg.tertiary};
        
    }

    // &:focus {
    //     outline: none;
    // }
`;


export const StyledInput = styled.input`
    width: 100%;
    flex-grow: 1;
    background: inherit;
    color: ${props => props.theme.text.primary};
    font-size: ${props => props.theme.fontSizes[0]};
    line-height: 2.4rem;
    vertical-align: middle;
    padding: 1.2rem;
    border: 1px solid ${props => props.theme.bg.secondary};
    border-radius: 6px;
    &::-webkit-input-placeholder {
        color: ${props => props.theme.bg.tertiary};
        border: none;
    }
    // &:focus {
    //     outline: none;
    // }
`;

export const StyledSelect = styled.select`
    background: ${props => props.theme.bg.primary};
    padding: 1.2rem;
    width: 100%;
    margin: 1rem 0;
    color: ${props => props.theme.text.primary};
    border: 1px solid ${props => props.theme.bg.secondary};
`;

export const StyledOption = styled.option`
    background: ${props => props.theme.bg.primary};
    padding: 1.2rem;
`;