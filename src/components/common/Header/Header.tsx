import HeaderBar from "./HeaderBar";

interface HeaderProps {
}

export default function Header({ }: HeaderProps) {
    return <>
        <div className='w-full h-[44px] bg-[#350D36]'>
            <HeaderBar />
        </div>
    </>
}