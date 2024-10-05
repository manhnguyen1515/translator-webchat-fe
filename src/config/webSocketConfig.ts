import { Client } from "@stomp/stompjs";
import { API_URL } from "../constants/constant";

const WS_URL = process.env.NODE_ENV === "development" ? "localhost:8080" : API_URL.replace(/^https?:\/\//, '');
const WS_BROKER = process.env.NODE_ENV === "development" ? "ws" : "wss";

export async function initWebSocket(): Promise<Client | undefined> {
  let client: Client | undefined;
  try {
    client = new Client({
      brokerURL: `${WS_BROKER}://${WS_URL}/ws`,
      connectionTimeout: 100000,
      reconnectDelay: 500000,
      heartbeatIncoming: 0,
      heartbeatOutgoing: 20000,
    });
  } catch (ex) {
    console.error("Connect to WebSocket has failed.");
  }
  return client;
}
