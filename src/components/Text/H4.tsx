import * as React from 'react';
import { ITextProps } from './ITextProps';
const H4: React.FunctionComponent<ITextProps> = ({ className='', children, ...props }) => {
    return <div className={`text-[34px] font-7 leading-[41px] ${className}`} {...props}>
        {children}
    </div>;
};

export default H4;
