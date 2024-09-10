import * as React from 'react';
import { ITextProps } from './ITextProps';
const LoginBodyS: React.FunctionComponent<ITextProps> = ({ className='', children, ...props }) => {
    return <div className={`text-[18px] font-3 leading-[24px] ${className}`} {...props}>
        {children}
    </div>;
};

export default LoginBodyS;

