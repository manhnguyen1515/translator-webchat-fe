import * as React from 'react';
import { ITextProps } from './ITextProps';
const Label2: React.FunctionComponent<ITextProps> = ({ className='', children, ...props }) => {
    return <div className={`text-[12px] font-4 leading-[15px] tracking-[0.02em] ${className}`} {...props}>
        {children}
    </div>;
};

export default Label2;
