import * as React from 'react';
import { ITextProps } from './ITextProps';
const Label1: React.FunctionComponent<ITextProps> = ({ className='', children, ...props }) => {
    return <div className={`text-[14px] font-6 leading-[17px] tracking-[0.02em] ${className}`} {...props}>
        {children}
    </div>;
};
export default Label1;
