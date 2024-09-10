import { FC } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import LeftBar from '../LeftBar';

const Layout: FC = ({ children }) => (
    <LayoutWrapper>
        <Header />
        <main className='flex flex-row flex-1'>
            <LeftBar />
            {children}
        </main>
        <Footer />
    </LayoutWrapper>
)
export default Layout;

const LayoutWrapper: FC = ({ children }) => (
    <div className='flex flex-col h-screen'>{children}</div>
)