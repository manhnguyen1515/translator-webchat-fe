import * as React from 'react';

interface ISquareCheckProps {
  isChecked?: boolean
}

const SquareCheck: React.FunctionComponent<ISquareCheckProps> = ({ isChecked }) => {
  return <>
    {isChecked === undefined ?
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" fill="#F4F4F5" stroke="#A0A1AB" strokeLinecap="round" strokeLinejoin="round" />
      </svg> : isChecked === true ?
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" fill="#E4F7EA" stroke="#11CE52" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7.5 12.2308L10.3421 15L16.5 9" stroke="#11CE52" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        :
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" fill="#F7E1E1" stroke="#F03F3F" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 8L8 16" stroke="#F03F3F" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 8L16 16" stroke="#F03F3F" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    }
  </>;
};

export default SquareCheck;
