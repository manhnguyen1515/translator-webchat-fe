import * as React from 'react';
import { Body1, Body2, H5 } from '../../components/Text';
import { THRESH_NO_CONTENT_IMG } from '../../constants/constant';

interface INoContentProps {
}

const NoContent: React.FunctionComponent<INoContentProps> = (props) => {
    return <>
        <div className='flex flex-col flex-1 bg-neutral-White'>
            <div className='h-[49px] px-[17px] flex items-center w-full border border-[#E2E2E2] border-t-0 border-l-0 border-r-0 border-b-1'>
                <H5>Threads</H5>
            </div>
            <div className='flex flex-1 justify-center'>
                <div className='h-[295px] w-fit mt-[20px] items-center flex flex-col justify-center'>
                        <img src={THRESH_NO_CONTENT_IMG} alt="NoContent" />
                        <H5>Tend to your threads</H5>
                        <Body2>Threads you're involved in will be collected right here.</Body2>
                </div>
            </div>
        </div>
    </>;
};

export default NoContent;
