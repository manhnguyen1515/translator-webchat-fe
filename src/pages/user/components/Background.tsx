import * as React from "react";
import { LOGIN_BG_IMAGE, LOGO_IMAGE_BLACK } from "../../../constants/constant";
import LoginBodyS from "../../../components/Text/LoginBodyS";
import LoginHeading from "../../../components/Text/LoginHeading";

interface IBackground {
  Element: React.FC
  title: string
  subtitle: string
}
const Background: React.FC<IBackground> = ({ Element, title, subtitle }) => {
  return (
    <div className="w-full h-fit min-h-screen flex desktop:justify-between justify-start desktop:pr-[300px] desktop:py-[6rem] desktop:pl-[6rem] desktop:flex-row py-[1rem] px-[1rem] flex-col overflow-x-hidden" style={{
      backgroundImage: `url(${LOGIN_BG_IMAGE})`,
      backgroundSize: 'cover',
    }}>
      <div className="w-[200px] h-fit">
        <img src={LOGO_IMAGE_BLACK} alt="logo"/>
      </div>
      <div className="h-fit bg-neutral-White flex flex-col desktop:mt-0 desktop:w-[659px] desktop:p-[2rem] mt-[3rem] w-full p-4 rounded-[8px]">
        <LoginHeading>{title}</LoginHeading>
        <LoginBodyS className="mt-[0.5rem] text-neutral-D01">{subtitle}</LoginBodyS>
        <Element />
      </div>
    </div>
  );
};

export default Background;
