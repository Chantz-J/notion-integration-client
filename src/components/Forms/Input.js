import React from 'react';
import { StyledInput } from '../Commons';

export default function Input ({ 
    type, 
    value, 
    onInput, 
    name, 
    placeholder,
    required
}){
    return (
        <StyledInput 
            type={type} 
            value={value} 
            onInput={onInput}
            name={name} 
            placeholder={placeholder}
            required={required}
        />
    );
};