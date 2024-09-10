import * as React from 'react';
import { ITextProps } from './ITextProps';
const Body3: React.FunctionComponent<ITextProps> = ({ className='', children, ...props }) => {
    return <div className={`text-[14px] font-4 leading-[20px] ${className}`} {...props}>
        {children}
    </div>;
};

export default Body3;
