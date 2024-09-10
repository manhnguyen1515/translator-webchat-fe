import * as React from 'react';
import { ITextProps } from './ITextProps';
const LoginTitleS: React.FunctionComponent<ITextProps> = ({ className='', children, ...props }) => {
    return <div className={`text-[18px] font-3 leading-[24px] ${className}`} {...props}>
        {children}
    </div>;
};

export default LoginTitleS;

