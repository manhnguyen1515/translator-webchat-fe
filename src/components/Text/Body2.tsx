import * as React from 'react';
import { ITextProps } from './ITextProps';
const Body2: React.FunctionComponent<ITextProps> = ({ className='', children, ...props }) => {
    return <div className={`text-[16px] font-4 leading-[30px] ${className}`} {...props}>
        {children}
    </div>;
};

export default Body2;

