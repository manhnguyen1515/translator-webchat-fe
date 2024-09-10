import * as React from 'react';
import { ITextProps } from './ITextProps';
const H5: React.FunctionComponent<ITextProps> = ({ className='', children, ...props }) => {
    return <div className={`text-[24px] font-7 leading-[40px] ${className}`} {...props}>
        {children}
    </div>;
};

export default H5;

