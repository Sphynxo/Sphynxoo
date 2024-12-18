import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Success from "../Components/Success";
import EmailError from "../Components/EmailError";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (form.current) {
      emailjs
        .sendForm(
          "service_cwlw81p",
          "template_uomqlcw",
          form.current,
          "lQtg-DzvddEalpCrT"
        )
        .then(
          () => {
            setSuccess(true);
            form.current?.reset();
            setTimeout(() => setSuccess(false), 3000);
          },
          (error) => {
            console.error("FAILED...", error.text);
            setError(true);
            setTimeout(() => setError(false), 5000);
          }
        );
    } else {
      console.error("Form reference is not available.");
    }
  };
  

  return (
    <div className="w-full relative">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col w-full gap-[2.4rem] 3xl:gap-[4.8rem]"
      >
        <div className="flex flex-col gap-[0.4rem] 3xl:gap-[1.2rem]">
          <label className="text-[1.6rem]">Name</label>
          <input
            type="text"
            name="user_name"
            required
            className="text-[1.6rem] outline-none px-[1.6rem] py-[1.2rem] bg-transparent border-[1px] border-green rounded-[1.2rem] focus:ring-2"
          />
        </div>
        <div className="flex flex-col gap-[0.4rem] 3xl:gap-[1.2rem]">
          <label className="text-[1.6rem]">Email</label>
          <input
            type="email"
            name="user_email"
            required
            className="text-[1.6rem] outline-none px-[1.6rem] py-[1.2rem] bg-transparent border-[1px] border-green rounded-[1.2rem] focus:ring-2"
          />
        </div>
        <div className="flex flex-col gap-[0.4rem] 3xl:gap-[1.2rem]">
          <label className="text-[1.6rem]">Message</label>
          <textarea
            name="message"
            required
            className="text-[1.6rem] outline-none px-[1.6rem] py-[1.2rem] bg-transparent border-[1px] border-green rounded-[1.2rem] focus:ring-2 resize-none"
          />
        </div>

        <input
          type="submit"
          value="Send"
          className="w-full text-[1.6rem] bg-green text-dark rounded-[2.4rem] border-[1px] border-green py-[1rem] lg:px-[6.8rem] lg:w-[24rem] lg:hover:bg-transparent lg:hover:text-white lg:transition-all lg:duration-300 hover:cursor-pointer"
        />
      </form>

      {success && (
        <div className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] w-[full] h-[full] xl:w-[40rem] xl:h-[30rem] flex items-center justify-center bg-dark  rounded-[1.2rem] z-10">
          <div className="checkmark-container flex flex-col items-center gap-[2.4rem] py-[2.4rem]">
            <Success />
            <p className="text-[1.6rem] text-green">Thank You!</p>
          </div>
        </div>
      )}

      {error && (
        <div className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] w-[full] h-[full] xl:w-[40rem] xl:h-[30rem] flex items-center justify-center bg-dark  rounded-[1.2rem] z-10">
          <div className="checkmark-container flex flex-col items-center gap-[2.4rem] py-[2.4rem]">
            <EmailError />
            <p className="text-[1.6rem] text-red-600">
              Sorry, Something Went Wrong!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
