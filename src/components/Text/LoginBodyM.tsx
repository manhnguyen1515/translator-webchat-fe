import * as React from 'react';
import { ITextProps } from './ITextProps';
const LoginBodyM: React.FunctionComponent<ITextProps> = ({ className='', children, ...props }) => {
    return <div className={`text-[22px] font-5 leading-[32px] ${className}`} {...props}>
        {children}
    </div>;
};

export default LoginBodyM;

