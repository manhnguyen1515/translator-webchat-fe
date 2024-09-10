import * as React from 'react';
import { ITextProps } from './ITextProps';
const H3: React.FunctionComponent<ITextProps> = ({ className='', children, ...props }) => {
    return <div className={`text-[48px] font-8 leading-[58px] ${className}`} {...props}>
        {children}
    </div>;
};

export default H3;

