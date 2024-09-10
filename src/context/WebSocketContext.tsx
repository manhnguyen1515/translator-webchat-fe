import { Client } from "@stomp/stompjs";
import React, { createContext, ReactNode, useEffect, useState } from "react";
import { WebSocketContextType } from "../constants/types";
import { useAuth } from "./AuthContext";
import { initWebSocket } from "../config/webSocketConfig";

const WebSocketContext = createContext<WebSocketContextType | undefined>(undefined);

const WebSocketContextProvider: React.FC<{ children: ReactNode }> = ({children}) => {
  const [wsClient, setWsClient] = useState<Client | undefined>(undefined);
  const [isWsConnected, setWsConnected] = useState<boolean>(false);
  const authContext = useAuth();
  const userInfo = authContext?.userInfo;

  useEffect(() => {
    if (userInfo) {
      initWs();
    }

    return () => {
      setWsConnected(false);
      if (wsClient) {
        wsClient.deactivate();
      }
    }
  }, [userInfo]);

  async function initWs() {
    const wsObj = await initWebSocket();
    setWsClient(wsObj);
    if (wsObj) {
      wsObj.onConnect = () => {
        setWsConnected(true);
      }
  
      wsObj.onWebSocketClose = (evt) => {
        console.log("ERROR DURING HANDSHAKE WITH SERVER")
      };
  
      wsObj.onStompError = (error) => {
          console.error("Cannot connect to STOMP server")
      }
  
      wsObj.onWebSocketError = (evt) => {
          console.log("Cannot connect to server")
      }
      wsObj.activate();
    }
}

  return (
      <WebSocketContext.Provider value={{
          wsClient,
          isWsConnected,
          setWsClient,
          setWsConnected
      }}>
          {children}
      </WebSocketContext.Provider>
  )
}

export { WebSocketContext, WebSocketContextProvider }
