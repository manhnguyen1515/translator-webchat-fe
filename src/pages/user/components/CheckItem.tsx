import * as React from 'react';
import LoginTitleS from '../../../components/Text/LoginTitleS';
import SquareCheck from '../../../components/Icons/SquareCheck';

interface ICheckItemProps {
    text: string
    isChecked?: boolean
}

const CheckItem: React.FunctionComponent<ICheckItemProps> = ({ text, isChecked }) => {
    return <>
        <div className='flex flex-row gap-[0.5rem]'>
            <SquareCheck isChecked={isChecked} />
            <LoginTitleS className={`font-3 ${isChecked === undefined ? 'text-neutral-D01': isChecked === true ? 'text-success' : 'text-sys-alert-bold'}`}>{text}</LoginTitleS>
        </div>
    </>;
};

export default CheckItem;
