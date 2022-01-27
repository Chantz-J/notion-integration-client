import React from "react";
import { StyledTextarea } from "../Commons";

export default function Textarea({value, onChange, name, placeholder}){
    return (
        <StyledTextarea 
            value={value} 
            onChange={onChange} 
            name={name} 
            placeholder={placeholder}
        >
        </StyledTextarea>
    )
}