import * as React from 'react';
import { ChatContext } from '../../../context/ChatContext';
import ChatHeader from './header';
import ChatBox from './ChatBox';
import ChatMesg from './ChatMesg';

interface IChatSessionProps {
}

const ChatSession: React.FunctionComponent<IChatSessionProps> = (props) => {
    const { selectedUser, messageDesign, liveMessageDesign, isReload, setIsReload } = React.useContext(ChatContext)!;
    const windowHeight = window.innerHeight;
    
    const onScroll = (e: any) => {
        const target = e.target as HTMLElement
        if (target && target.scrollTop + target.scrollHeight === target.clientHeight) {
            !isReload && setIsReload(true)
        }
    }
    return <div className='flex flex-col flex-1 p-[8px] w-full'>
        {
            selectedUser &&
            <div className='flex flex-col flex-1 justify-between'>
                <ChatHeader user={selectedUser} />
                <div className='flex flex-col-reverse gap-[8px] w-full flex-1 justify-start'>
                    <ChatBox selectedUser={selectedUser} />
                    <section className={`overflow-auto flex flex-col-reverse`} style={{
                        height: windowHeight - 180 + "px"
                    }} onScroll={onScroll}>
                        <div>
                            {liveMessageDesign.map((m, id) => {
                                return <ChatMesg key={id} input={m} />
                            })}
                        </div>
                        <div className=''>
                            {messageDesign.map((m, id) => {
                                return <ChatMesg key={id} input={m} />
                            })}
                        </div>
                    </section>
                </div>
            </div>
        }
    </div>;
};

export default ChatSession;
