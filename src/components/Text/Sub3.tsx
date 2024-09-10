import * as React from 'react';
import { ITextProps } from './ITextProps';
const Sub3: React.FunctionComponent<ITextProps> = ({  children, className, ...props }) => {
    return <div className={`text-[14px] font-7 leading-[17px] ${className}`} {...props}>
        {children}
    </div>;
};

export default Sub3;

