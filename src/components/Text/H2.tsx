import * as React from 'react';
import { ITextProps } from './ITextProps';
const H2: React.FunctionComponent<ITextProps> = ({  className, children, ...props }) => {
    return <div className={`text-[64px] font-8 leading-[78px] ${className}`} {...props}>
        {children}
    </div>;
};

export default H2;

