import React from 'react'
import { IIconProps } from '../../constants/types'

const SearchOutline: React.FC<IIconProps> = ({color = "currentColor"}) => {
    return <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.33336 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33336C12.6667 4.38783 10.2789 2 7.33336 2C4.38783 2 2 4.38783 2 7.33336C2 10.2789 4.38783 12.6667 7.33336 12.6667Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.0001 14.0001L11.1001 11.1001" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
}

export default SearchOutline