import * as React from 'react';

interface IUserMenuLayoutProps {
    Children: React.FC
}

const UserMenuLayout: React.FunctionComponent<IUserMenuLayoutProps> = ({ Children, ...props }) => {
    return <>
        <div className='w-[100px] h-[2rem] flex items-center'>
            <Children {...props} />
        </div>
    </>;
};

export default UserMenuLayout;
