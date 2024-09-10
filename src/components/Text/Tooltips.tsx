import * as React from 'react';
import { ITextProps } from './ITextProps';
const Tooltips: React.FunctionComponent<ITextProps> = ({  className = '', children, ...props }) => {
    return <div className={`text-[10px] font-6 leading-[12px] tracking-[0.04em] ${className}`} {...props}>
        {children}
    </div>;
};

export default Tooltips;

