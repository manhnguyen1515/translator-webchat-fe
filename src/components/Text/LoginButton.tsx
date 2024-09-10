import * as React from 'react';
import { ITextProps } from './ITextProps';
const LoginButton: React.FunctionComponent<ITextProps> = ({ className='', children, ...props }) => {
    return <div className={`text-[22px] font-6 leading-[32px] ${className}`} {...props}>
        {children}
    </div>;
};

export default LoginButton;

