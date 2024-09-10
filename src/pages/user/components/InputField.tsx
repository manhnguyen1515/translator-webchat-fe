import * as React from 'react';
import LoginTitleS from '../../../components/Text/LoginTitleS';
import BoxInput from '../../../components/Input/BoxInput';

interface IInputFieldProps {
    title: string
    isError: boolean
    hasValue: boolean
    onChangeValue: (v: string) => void
    errorText: string
    type?: 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week'
    placeholder?: string
    isDisabled?: boolean
}

const InputField: React.FunctionComponent<IInputFieldProps> = ({title, isError, hasValue, onChangeValue, errorText, type, placeholder, isDisabled}) => {
    return <div className='flex-col'>
        <LoginTitleS>{title}</LoginTitleS>
        <div className='mt-[0.5rem]'>
            <BoxInput isError={isError} errorText={errorText} onValueChange={onChangeValue} hasValue={hasValue} type={type} placeholder={placeholder} isDisabled={isDisabled} />
        </div>
    </div>;
};

export default InputField;
