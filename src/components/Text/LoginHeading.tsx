import * as React from 'react';
import { ITextProps } from './ITextProps';
const LoginHeading: React.FunctionComponent<ITextProps> = ({ className='', children, ...props }) => {
    return <div className={`text-[38px] font-7 leading-[48px] ${className}`} {...props}>
        {children}
    </div>;
};

export default LoginHeading;

