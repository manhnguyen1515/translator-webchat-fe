import * as React from 'react';
import TextInput from './TextInput';
import ErrorText from './ErrorText';

interface IBoxInputProps {
    isError?: boolean
    errorText: string
    onValueChange: (value: string) => void
    hasValue: boolean
    type?: 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week'
    placeholder?: string
    isDisabled?: boolean
}

const BoxInput: React.FunctionComponent<IBoxInputProps> = ({ isError, errorText, onValueChange, hasValue, type, placeholder, isDisabled }) => {
    return <>
        <TextInput hasValue={hasValue} onValueChange={onValueChange} type={type} placeholder={placeholder} isDisabled={isDisabled} />
        <ErrorText isShow={isError || false} text={errorText} />
    </>;
};

export default BoxInput;
