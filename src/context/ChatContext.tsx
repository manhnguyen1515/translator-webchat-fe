/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import { TMessage, TMessageData, TMessageDesign, TUserInfo, TUserInfoDesign } from '../constants/types';
import NoContent from '../pages/chat/NoContent';
import ChatSession from '../pages/chat/ChatSession';
import { useNavigate } from 'react-router-dom';
import { FAKE_MESSAGE, PAGE_CHAT_SESSION } from '../constants/constant';
import ChatService from '../services/chatServices';
import { AuthContext, useAuth } from './AuthContext';

export interface IChatContext {
  selectedUser: TUserInfoDesign | null
  setSelectedUser: React.Dispatch<React.SetStateAction<TUserInfoDesign | null>>
  messageDesign: TMessage[]
  liveMessageDesign: TMessage[]
  setLiveMessageDesign: React.Dispatch<React.SetStateAction<TMessage[]>>
  isReload: boolean
  setIsReload: React.Dispatch<React.SetStateAction<boolean>>
}

export const ChatContext = React.createContext<IChatContext | null>(null);

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedUser, setSelectedUser] = React.useState<TUserInfoDesign | null>(null);
  const [messageData, setMessageData] = React.useState<TMessageData[]>([]);
  const [messageDesign, setMessageDesign] = React.useState<TMessage[]>([]);
  const [liveMessageDesign, setLiveMessageDesign] = React.useState<TMessage[]>([]);
  const [isReload, setIsReload] = React.useState<boolean>(false)
  const navigate = useNavigate();
  const { userInfo } = React.useContext(AuthContext)!
  React.useMemo(() => {
    if (messageData.length === 0 || userInfo === null) return
    const convertData = [] as TMessage[]
    messageData.map((m, _id) => {
      const temp = {
        data: m,
        design: {
          title: userInfo!.user.nickname,
          position: userInfo!.user.userId === m.userId ? "right" : "left"
        }
      } as TMessage
      convertData.push(temp)
    })
    setMessageDesign(convertData)
  }, [messageData, userInfo])


  const getMessage = async () => {
    setMessageData([])
    if (!selectedUser || !userInfo) return
    try {
      const result = await ChatService.getMessages({ username: userInfo.user.username, friend: selectedUser?.user.username });
      const sessionId = result?.data?.data?.sessionId;
      const messages = result?.data?.data?.messages;
      if (sessionId) {
        navigate(PAGE_CHAT_SESSION + "/" + sessionId)
      }
      if (messages) {
        const messageData = messages.map(m => {
          return {
            messageId: m.id,
            date: new Date(),
            status: "received",
            text: m.content,
            textVi: m.contentVi,
            textKo: m.contentKo,
            userId: m.sender
          } as TMessageData
        })
        setMessageData(messageData);
      }
    } catch (error) {

    }
  }

  React.useEffect(() => {
    if (selectedUser && userInfo) {
      getMessage();
    }
  }, [selectedUser, userInfo])

  React.useMemo(()=>{
    if (!isReload) return
    //TODO: get more message
  },[isReload])

  const data = {
    selectedUser,
    setSelectedUser,
    messageDesign,
    liveMessageDesign,
    setLiveMessageDesign,
    isReload, 
    setIsReload,
  };
  return <ChatContext.Provider value={data}>{children}</ChatContext.Provider>;
};
