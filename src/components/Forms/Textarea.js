import React from "react";
import { StyledTextarea, InputWrapper, LabelWrapper, StyledLabel } from "../Commons";

export default function Textarea({value, onChange, name, placeholder}){
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
            >
            </StyledTextarea>
        </>
        // {/* </InputWrapper> */}
    )
}