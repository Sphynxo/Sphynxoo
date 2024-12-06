import tools from "../Data/tools.json";
export default function Tools() {
  return (
    <div className="grid grid-cols-3 gap-y-[3.2rem] place-items-center justify-items-center w-full h-full py-[2.4rem]">
      {tools.map((tool) => (
        <div className="flex flex-col items-center gap-[1.6rem]">
          <p className="text-green">{tool.name}</p>
          <img
            src={tool.image}
            alt={tool.name}
            className="h-[4rem] lg:h-[6.4rem]"
          />
        </div>
      ))}
    </div>
  );
}
