import React from "react";
import { StyledButton } from "../Commons";


export default function Button({ text, onClick }){
    return(
        <StyledButton onClick={onClick}>{text}</StyledButton>
    )
}