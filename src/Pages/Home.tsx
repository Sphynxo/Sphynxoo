export default function Home() {
  return (
    <div className="flex flex-col text-center gap-[2.4rem] lg:text-left relative w-full">
      <h1 className="text-[2.4rem]">
        Empowering Web Experiences: Unleashing Digital Magic.
      </h1>
      <p className="text-[1.6rem] text-green mt-[2.4rem] lg:mt-[4.8rem]">
        Code. Design. Magic. Your Web Dreams, Brought to Life! Let's
        Collaborate!
      </p>
      <button className="w-full text-[1.6rem] bg-green text-dark rounded-[2.4rem] border-[1px] border-green py-[1.6rem] mt-[4.8rem] lg:mt-[5.6rem] lg:px-[6.8rem] lg:w-[24rem] lg:hover:bg-transparent lg:hover:text-white lg:transition-all lg:duration-300">
        let's start
      </button>
      <div className="w-[40rem] absolute xl:opacity-5 xl:top-[-10%] xl:right-[-8%] 3xl:top-[-20%] 3xl:right-0 3xl:opacity-20 hidden xl:block " >
        <img src="/img/sphynxo_poster.png" alt="" />
      </div>
    </div>
  );
}
