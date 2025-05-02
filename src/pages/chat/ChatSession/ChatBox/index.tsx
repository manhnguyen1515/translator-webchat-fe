import * as React from 'react';
import { Button, Input } from 'react-chat-elements';
import { ChatContext } from '../../../../context/ChatContext';
import { eRegion, TMessage, TMessageResponse, TUserInfoDesign } from '../../../../constants/types';
import { AuthContext } from '../../../../context/AuthContext';
import { WebSocketContext } from '../../../../context/WebSocketContext';
import { useParams, useSearchParams } from 'react-router-dom';
import { IMessage } from '@stomp/stompjs';
import ComponentService from '../../../../services/shared/componentService';

interface IChatBoxProps {
  selectedUser: TUserInfoDesign;
}
const ChatBox: React.FunctionComponent<IChatBoxProps> = (props) => {
  const { setLiveMessageDesign } = React.useContext(ChatContext)!
  const { userInfo } = React.useContext(AuthContext)!;
  const { wsClient, isWsConnected } = React.useContext(WebSocketContext)!;
  const [value, setValue] = React.useState<string>();
  const params = useParams();
  const { sessionId } = params;
  const { selectedUser } = props;
  const ref = React.useRef<HTMLInputElement>(null);
  const [searchParams] = useSearchParams();
  const regionValue = selectedUser?.user.regionCountry;
  const language = searchParams.get('language');
  const regionKey = Object.entries(eRegion).find(([_, value]) => value === regionValue)?.[0]?.toLowerCase();
  const region = language || regionKey || 'en';

  let onClear = () => {
    if (ref.current) {
      ref.current.value = "";
    }
    setValue("");
  }
  
  const onSend = () => {
    onClear();
    if (value && wsClient?.connected) {
      wsClient.publish({
        destination: "/message",
        body: JSON.stringify({
          sender: userInfo?.user.username,
          recipient: selectedUser.user.username,
          sessionId: sessionId,
          content: value,
          language: region
        })
      });

      const temp = {
        data: {
          date: new Date(),
          messageId: userInfo?.user.userId,
          status: 'waiting',
          textEn: value,
          // textVi: value,
          // textJa: value,
          userId: userInfo?.user.userId
        },
        design: {
          position: "right",
          title: userInfo?.user.nickname
        }
      } as TMessage;
      
      setLiveMessageDesign((prev) => {
        return [
          ...prev,
          temp
        ]
      });
    }
  }

  React.useEffect(() => {
    if (wsClient && isWsConnected) {
      // Update the message the user just sent
      wsClient.subscribe(`/topic/user/${selectedUser.user.username}`, (res: IMessage) => {
        const messageReponse = JSON.parse(res.body) as TMessageResponse;
        const newMessage = {
          data: {
            date: messageReponse.createdAt,
            messageId: messageReponse.id,
            status: 'sent',
            textEn: messageReponse.contentEn,
            textVi: messageReponse.contentVi,
            textJa: messageReponse.contentJa,
            userId: userInfo?.user.userId
          },
          design: {
            position: "right",
            title: userInfo?.user.nickname
          }
        } as TMessage;

        setLiveMessageDesign((prev) => {
          const newLiveMessages = prev.filter(message => message.data.messageId !== userInfo?.user.userId )
          return [
            ...newLiveMessages,
            newMessage
          ]
        })
      });

      // Handle the message received from other user
      wsClient.subscribe(`/topic/user/${userInfo?.user.username}`, (res: IMessage) => {
        const messageReponse = JSON.parse(res.body) as TMessageResponse;
        const newMessage = {
          data: {
            date: messageReponse.createdAt,
            messageId: messageReponse.id,
            status: 'received',
            textEn: messageReponse.contentEn,
            textVi: messageReponse.contentVi,
            textJa: messageReponse.contentJa,
            userId: selectedUser.user.userId
          },
          design: {
            position: "left",
            title: selectedUser.user.nickname
          }
        } as TMessage;

        setLiveMessageDesign((prev) => {
          return [
            ...prev,
            newMessage
          ]
        })
      })
    }
  }, [wsClient, isWsConnected, selectedUser, userInfo, setLiveMessageDesign]);

  return <>
    <div>
      <Input
        referance={ref}
        maxHeight={60}
        placeholder='Type here...'
        multiline={true}
        value={value}
        rightButtons={<Button color='white' backgroundColor='black' text='Send' onClick={onSend} />}
        className='border'
        onChange={(e: any) => {
          setValue(e.target.value)
        }}
        clear={(clear: any) => (onClear = clear)}
      />
    </div>
  </>;
};

export default ChatBox;
