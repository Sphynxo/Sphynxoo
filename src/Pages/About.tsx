export default function About() {
  return (
    <div className="xl:flex xl:flex-col 3xl:pt-[4rem]">
      <h1 className="text-[2.4rem]">
        Hi there! My name is{" "}
        <span className="text-[3.2rem] text-green">
          Irakli Zhordania
        </span>
      </h1>
      <article className="text-[1.6rem] mt-[4.8rem] md:mt-[6.4rem] lg:leading-[3.2rem] 3xl:text-[2rem]">
        <p className="indent-[1.6rem]">
          I am a Front-End Web Developer with a background in Computer
          Engineering and over 8 years of IT experience. My path has
          led me through UI/UX design and into front-end development,
          where I now focus on building clean, responsive interfaces
          with React.js, Next.js, TypeScript, and Tailwind CSS.
        </p>
        <p className="indent-[1.6rem] mt-[2.4rem] md:mt-[4rem]">
          I’m passionate about crafting user-friendly, visually
          appealing web applications and approach my work with a
          responsible, detail-oriented, and hardworking mindset. Let’s
          create impactful digital experiences together!
        </p>
      </article>
    </div>
  );
}
