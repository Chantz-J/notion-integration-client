import React from "react";
import { StyledButton } from "../Commons";


export default function Button({ text, onClick, disabled, background }){
    return(
        <StyledButton 
            onClick={onClick} 
            disabled={disabled}
            style={{ background: background }}
        >{
            text}
        </StyledButton>
    )
}