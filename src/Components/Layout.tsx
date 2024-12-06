import { Outlet } from "react-router-dom";
import Info from "./Info";
import Header from "./Header";
import { useState } from "react";

export default function Layout() {
  const [open, setOpen] = useState(0);
  return (
    <div
      className={`${
        open === 1 ? "h-auto" : "h-screen"
      } xl:h-screen py-[6.4rem] px-[2rem] xl:flex md:px-[12rem] md:pt-[12rem] xl:px-[6rem] xl:pr-[6rem] xl-mid:pr-[12rem] overflow-x-hidden xl:py-0 xl:items-center`}
    >
      <div className="xl:flex xl:gap-[12rem] w-full h-full xl:h-[80%] 3xl:h-[64%] ">
        <div className="xl:h-full">
          <Info open={open} setOpen={setOpen} />
        </div>
        <div className="w-full xl:flex xl:flex-col xl:justify-between gap-[2rem]">
          <Header />
          <div className="py-[2.4rem] px-[2.4rem] mt-[2.4rem] border-[2px] border-green rounded-[2.4rem] h-full flex items-center xl:mt-0 xl:py-0">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
