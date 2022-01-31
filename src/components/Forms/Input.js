import React from 'react';
import { InputWrapper, StyledInput } from '../Commons';

export default function Input ({ 
    type, 
    value, 
    onInput, 
    name, 
    placeholder}){
    return (
        <StyledInput 
            type={type} 
            value={value} 
            onInput={onInput}
            name={name} 
            placeholder={placeholder}
        />
    )
}