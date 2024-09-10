import { Input } from 'antd';
import * as React from 'react';

interface IFieldProps {
    value: string
    type?: 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week'
}

const Field: React.FunctionComponent<IFieldProps> = ({ value, type }) => {
    return <>
        <Input type={type} className={`w-full h-[2rem] border-b-blue-Primary !border-x-0 border-t-0 border-b-[1px] bg-neutral-White rounded-[0px] text-[22px] font-5 leading-[32px]  focus:shadow-none`} value={value} disabled={true} />
    </>;
};

export default Field;
