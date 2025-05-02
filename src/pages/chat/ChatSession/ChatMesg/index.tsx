import * as React from 'react';
import { MessageBox } from 'react-chat-elements';
import { TMessage, eRegion } from '../../../../constants/types';
import { useSearchParams } from 'react-router-dom';
import { ChatContext } from '../../../../context/ChatContext';
import ComponentService from '../../../../services/shared/componentService';

interface IChatMesgProps {
    input: TMessage
}

const ChatMesg: React.FunctionComponent<IChatMesgProps> = ({ input }) => {
    const [searchParams] = useSearchParams();
    const { selectedUser } = React.useContext(ChatContext)!;
    const regionValue = selectedUser?.user.regionCountry;
    const language = searchParams.get('language');
    const regionKey = Object.entries(eRegion).find(([_, value]) => value === regionValue)?.[0]?.toLowerCase();

    const region: eRegion =  ComponentService.getRegionFromString(language || regionKey || 'en') as eRegion;
    const [text, setText] = React.useState<string>("");

    React.useEffect(() => {
        setText(ComponentService.getMessageData(input.data, region));
    }, [input.data.textJa, input.data.textVi, input.data.textEn, region, input.data])

    return <>
        <div>
            <MessageBox position={input.design.position} type={'text'} id={input.data.messageId} date={input.data.date} focus={false} text={text} title={input.design.title} titleColor={input.design.position === "left" ? "black" : "white"} status={input.data.status} forwarded={false} notch={false} retracted={false} removeButton={false} replyButton={false} styles={{
                backgroundColor: input.design.position === "left" ? "#E9E9EB" : "#2E9DFB",
                color: `${input.design.position === "left" ? "black"  : "white"}`,
            }}/>
        </div>
    </>;
};

export default ChatMesg;
