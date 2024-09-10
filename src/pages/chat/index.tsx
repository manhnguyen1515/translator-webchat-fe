import * as React from 'react';
import NoContent from './NoContent';
import ChatSession from './ChatSession';
import { ChatContext } from '../../context/ChatContext';
import { Outlet, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { PAGE_CHAT_SESSION } from '../../constants/constant';
import { WebSocketContextProvider } from '../../context/WebSocketContext';

interface IChatFrameProps {
}

const ChatFrame: React.FunctionComponent<IChatFrameProps> = (props) => {
    // const { component } = React.useContext(ChatContext)!
    const location = useLocation();

    const { pathname } = location;
    const navigate = useNavigate();
    React.useEffect(() => {
        if (pathname === "/") {
            navigate("/");
        }
    }, [pathname, navigate]);


    return <>
        {/* {component} */}
        {/* <NoContent /> */}
        {/* <div>co cao lz &#128513;</div> */}
        {/* <ChatSession /> */}
        <Routes>
            <Route path="/" element={<Outlet />}>
                <Route path="/*" element={<NoContent />} />
                <Route path={PAGE_CHAT_SESSION + "/:sessionId"} element={ <WebSocketContextProvider><ChatSession /></WebSocketContextProvider>} />
            </Route>
        </Routes>
    </>;
};

export default ChatFrame;
