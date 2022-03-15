import React from "react";
import { StyledTextarea, LabelWrapper, StyledLabel } from "../Commons";

export default function Textarea({value, onChange, name, placeholder, required }){
    return (
        // <InputWrapper>
        <>
            <LabelWrapper>
                <StyledLabel>
                    What's in the page?
                </StyledLabel>
            </LabelWrapper> 
            <StyledTextarea 
                value={value} 
                onChange={onChange} 
                name={name} 
                placeholder={placeholder}
                required={required}
            >
            </StyledTextarea>
        </>
        // {/* </InputWrapper> */}
    )
}