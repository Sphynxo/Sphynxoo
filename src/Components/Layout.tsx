import { Outlet, useLocation } from "react-router-dom";
import Info from "./Info";
import Header from "./Header";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Layout() {
  const [open, setOpen] = useState(0);
  const location = useLocation();

  return (
    <main
      className={`${
        open === 1 ? "h-auto" : "h-screen"
      } relative xl:h-screen py-[6.4rem] mb-[6.4rem] px-[2rem] xl:flex md:px-[12rem] md:pt-[12rem] xl:px-[6rem] xl:pr-[6rem] xl-mid:pr-[12rem] overflow-x-hidden xl:py-0 xl:items-center xl:mb-0`}
    >
      <div className="xl:flex xl:gap-[12rem] w-full h-full xl:h-[80%]">
        <div className="xl:h-full">
          <Info open={open} setOpen={setOpen} />
        </div>
        <div className="w-full xl:flex xl:flex-col xl:justify-between gap-[2rem] 3xl:gap-[8rem]">
          <Header />
          <div
            className=" py-[2.4rem] px-[2.4rem] mt-[2.4rem] border-[2px] border-green rounded-[2.4rem] h-full flex items-center box-border xl:mt-0 xl:py-[4rem] xl:px-[5.6rem] 3xl:px-[7.2rem] xl:overflow-y-hidden "
            style={{ scrollbarGutter: "stable" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ opacity: 1, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                
                transition={{ duration: 1, ease: 'easeInOut' }}
                className="w-full h-full"
              >
                <Outlet />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </main>
  );
}
