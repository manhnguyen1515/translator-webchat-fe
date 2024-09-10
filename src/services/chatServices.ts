
import { TGetFriendInput, TGetFriendOutput, TGetMessagesInput, TGetMessagesOutput } from "../constants/types";
import { http } from "../http-common";

const searchFriend = (input: TGetFriendInput) => {
  return http.get<TGetFriendInput, TGetFriendOutput>(`v1/api/user/getuser?usernameOrNickname=${input.usernameOrNickname}`);
};

const getMessages = (input: TGetMessagesInput) => {
  return http.get<TGetMessagesInput, TGetMessagesOutput>(`v1/api/messages/?username=${input.username}&friend=${input.friend}`);
};

const ChatService
  = {
  searchFriend,
  getMessages,
};

export default ChatService;