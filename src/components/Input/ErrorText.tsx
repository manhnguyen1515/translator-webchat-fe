import * as React from 'react';
import LoginBodyS from '../Text/LoginBodyS';
import XIcon from '../Icons/XIcon';

interface IErrorTextProps {
    isShow: boolean
    text: string
}

const ErrorText: React.FunctionComponent<IErrorTextProps> = ({ isShow, text }) => {
    return <>
        {isShow && <>
            <div className='w-full mt-[0.5rem] bg-sys-alert-light p-[1rem] flex gap-[0.5rem]'>
                <div className='w-[1.5rem] h-[1.5rem]'>
                    <XIcon />
                </div>
                <LoginBodyS className='text-sys-alert-bold'>{text}</LoginBodyS>
            </div>
        </>}
    </>;
};

export default ErrorText;
