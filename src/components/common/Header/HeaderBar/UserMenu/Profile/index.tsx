import * as React from 'react';
import ProfileModal from './ProfileModal';

interface IProfileProps {
}

const Profile: React.FunctionComponent<IProfileProps> = ({ ...props }) => {
    const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false)
    const onOpenModal = () => {
        // alert("click")
        setIsModalOpen(true)
    }
    React.useEffect(() => {
        console.log(isModalOpen)
    }, [isModalOpen])
    return <>
        <div className='w-[100px] h-[2rem] flex items-center' onClick={onOpenModal}>
            <div>Profile</div>
        </div>
        <ProfileModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </>;
};

export default Profile;
