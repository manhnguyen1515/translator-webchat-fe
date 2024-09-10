import * as React from 'react';
import { MessageBox } from 'react-chat-elements';
import { TMessage, eRegion } from '../../../../constants/types';
import { useSearchParams } from 'react-router-dom';

interface IChatMesgProps {
    input: TMessage
}

const ChatMesg: React.FunctionComponent<IChatMesgProps> = ({ input }) => {
    const [searchParams] = useSearchParams();
    const [text, setText] = React.useState<string>(input.data.text);
    const language = searchParams.get('language');

    React.useEffect(() => {
        if (language === eRegion.VN) {
            setText(input.data.textVi);
        } else if (language === eRegion.KR) { 
            setText(input.data.textKo);
        } else {
            setText(input.data.text);
        }
    }, [input.data.textKo, input.data.textVi, language])

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
