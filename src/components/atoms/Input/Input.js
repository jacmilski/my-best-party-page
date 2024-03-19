// @ts-nocheck
import React from 'react';
import { StyledError, StyledInputWrapper, StyledLabel, StyledTextarea, StyledInput } from './Input.styles';

const Input = ({ name, type, error, label, register }) => {

    return (
        <StyledInputWrapper>
            {label ? <StyledLabel htmlFor={name}>{label}</StyledLabel> : null}
            {(() => {
                switch(type) {
                    case 'textarea': 
                        return <StyledTextarea id={name} {...register} />
                    default:
                        return <StyledInput id={name} type={type} {...register} />
                }
            })()}
            {error ? <StyledError>{error}</StyledError> : null}
        </StyledInputWrapper>
    )
}

export default Input;