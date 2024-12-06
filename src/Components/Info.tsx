import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegEnvelope } from "react-icons/fa";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";


function Icon({ id, open }: { id: number; open: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform xl:hidden`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export default function Info({open, setOpen}: {open:number, setOpen: React.Dispatch<React.SetStateAction<number>>}) {
  

  const isXL = window.matchMedia("(min-width: 1280px)").matches;

  const handleOpen = (value: React.SetStateAction<number>) =>
    !isXL && setOpen(open === value ? 0 : value);

  return (

      <Accordion
        open={isXL || open === 1}
        icon={<Icon id={1} open={open} />}
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
        className="gap-[2rem] xl:gap-0 border-[2px] w-full border-green rounded-[2.4rem] py-[2.4rem] xl:py-[3.2rem] px-[2.4rem] xl:w-[36rem] md:px-[4rem] h-full flex flex-col items-center justify-between "
      >
        <AccordionHeader
          onClick={() => handleOpen(1)}
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          <div className="text-left justify-between gap-[3.2rem] xl:w-full xl:text-center xl:cursor-default">
            <h1 className="text-[2.4rem] text-white">
              Irakli Zhordania
            </h1>
            <h2 className="text-[1.6rem] text-green mt-[0.8rem]">
              Web Developer
            </h2>
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div
            className={`${
              isXL || open === 1 ? "opacity-1" : "opacity-0"
            } transition-opacity duration-500 flex flex-col gap-[2rem]`}
          >
            <div className="w-full md:flex md:justify-center">
              <img
                src="/img/sphynxo.jpg"
                alt=""
                className="w-full rounded-[2.4rem] md:w-[48rem] xl:w-full"
              />
            </div>
            <div className="text-center flex flex-col items-center gap-[0.8rem]">
              <h3 className="text-[2rem] text-white">
                iraklijordania@gmail.com
              </h3>
              <div className="flex items-center gap-[0.8rem]">
                <span>
                  <IoLocationOutline className="text-green text-[1.6rem]" />
                </span>
                <p className="text-[1.6rem] text-green">
                  Brooklyn, NY
                </p>
              </div>
            </div>
            <div className="flex gap-[2rem] justify-center">
              <a
                href="https://www.linkedin.com/in/irakli-zhordania-88b042123/"
                target="blank"
                className="inline-flex"
              >
                <BsLinkedin className="text-[2.4rem] text-white hover:text-green transition-all duration-300 hover:scale-110" />
              </a>
              <a
                href="https://www.linkedin.com/in/irakli-zhordania-88b042123/"
                target="blank"
                className="inline-flex"
              >
                <FaGithub className="text-[2.4rem] text-white hover:text-green transition-all duration-300 hover:scale-110" />
              </a>
            </div>
            <button className="text-dark w-full bg-green flex items-center justify-center gap-[0.4rem] text-[1.6rem] rounded-[2.4rem] py-[1.4rem] border-[1px] border-green hover:bg-transparent hover:text-green  transition-all duration-300 ">
              <FaRegEnvelope /> Contact Me
            </button>
          </div>
        </AccordionBody>
      </Accordion>

  );
}
