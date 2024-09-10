import React from 'react'
import { IIconProps } from '../../constants/types'

const DefaultUser: React.FC<IIconProps> = ({ color = "#FFD57E", width = 26, height = 26 }) => {
    return <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" style={{
        width: width,
        height: height
    }}>
        <g clipPath="url(#clip0_40_5702)">
            <rect width="128" height="128" transform="translate(0 -0.0012207)" fill={color} />
            <path d="M64.0002 86.2208C112 86.221 121.778 113.776 121.778 127.999H64.0002H7.11133C7.11133 113.776 16.0002 86.2206 64.0002 86.2208Z" fill="white" />
            <circle cx="64.0002" cy="49.7765" r="26.6667" fill="white" />
        </g>
        <defs>
            <clipPath id="clip0_40_5702">
                <rect width="128" height="128" fill="white" transform="translate(0 -0.0012207)" />
            </clipPath>
        </defs>
    </svg>
}

export default DefaultUser