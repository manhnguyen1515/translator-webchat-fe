import * as React from 'react';
import { ITextProps } from './ITextProps';
const Sub2: React.FunctionComponent<ITextProps> = ({ className='', children, ...props }) => {
    return <div className={`text-[16px] font-7 leading-[19px] ${className}`} {...props}>
        {children}
    </div>;
};

export default Sub2;
