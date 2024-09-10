import * as React from 'react';
import { ITextProps } from './ITextProps';
const LoginTextLink: React.FunctionComponent<ITextProps> = ({ className='', children, ...props }) => {
    return <div className={`text-[18px] font-6 leading-[24px] cursor-pointer underline ${className}`} {...props}>
        {children}
    </div>;
};

export default LoginTextLink;

