import * as React from 'react';
import LoginTitleS from '../../../../../../Text/LoginTitleS';
import Field from './Field';
import { Body1 } from '../../../../../../Text';

interface IDataFieldProps {
  title: string
  value: string
  type?: 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week'
}

const DataField: React.FunctionComponent<IDataFieldProps> = ({ title, value, type }) => {
  return <>
    <div className='flex-col mt-[1rem]'>
      <LoginTitleS>{title}</LoginTitleS>
      <div className='mt-[0.5rem]'>
        <Field value={value} type={type} />
      </div>
    </div>
  </>;
};

export default DataField;
