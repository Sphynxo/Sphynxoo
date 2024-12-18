import tools from "../Data/tools.json";
export default function Tools() {
  return (
    <div className="grid grid-cols-3 gap-y-[3.2rem] place-items-center justify-items-center w-full h-full py-[2.4rem] xl:py-0">
      {tools.map((tool, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-[1.6rem] group"
        >
          <p className="text-green xl:text-[1.2rem] xl:opacity-0 xl:group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            {tool.name}
          </p>
          <img
            src={tool.image}
            alt={tool.name}
            className={`h-[4rem] lg:h-[6.4rem] animate-scale infinite drop-shadow-lg`}
            style={{
              animationDelay: `${index * 0.5}s`,
            }}
          />
        </div>
      ))}
    </div>
  );
}



