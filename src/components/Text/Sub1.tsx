import * as React from 'react';
import { ITextProps } from './ITextProps';
const Sub1: React.FunctionComponent<ITextProps> = ({ className='', children, ...props }) => {
    return <div className={`text-[18px] font-7 leading-[22px] ${className}`} {...props}>
        {children}
    </div>;
};

export default Sub1;

