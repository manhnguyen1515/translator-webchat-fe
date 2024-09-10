import * as React from 'react';
import { ITextProps } from './ITextProps';
const Body1: React.FunctionComponent<ITextProps> = ({  className, children, ...props }) => {
    return <div className={`text-[18px] font-4 leading-[30px] ${className}`} {...props}>
        {children}
    </div>;
};

export default Body1;

