import React, { useEffect, useState } from "react";
import projects from "../Data/projects.json";
import { FaGithub } from "react-icons/fa6";

interface Project {
  id: number;
  title: string;
  liveLink: string;
  codeLink: string;
}

const Works: React.FC = () => {
  const [thumbnails, setThumbnails] = useState<
    Record<number, string>
  >({}); // Explicit type

  useEffect(() => {
    const fetchThumbnails = async () => {
      const updatedThumbnails: Record<number, string> = {}; // Explicit type
      for (let project of projects as Project[]) {
        const apiKey = "P1850YK-3AS4NVW-QQ8N5YV-E5NHCV3";
        const apiUrl = `https://shot.screenshotapi.net/screenshot?token=${apiKey}&url=${project.liveLink}&output=image&width=300&height=200`;

        updatedThumbnails[project.id] = apiUrl;
      }
      setThumbnails(updatedThumbnails);
    };
    fetchThumbnails();
  }, []);

  return (
    <section className="w-full h-full overflow-y-auto xl:px-[4rem]" id="works">
        <div className="grid place-items-center justify-items-center gap-[4rem] md:grid-cols-2 3xl:grid-cols-3 w-full mb-[2.4rem] overflow-y-auto">
          {projects.map((project: Project) => (
            <div
              key={project.id}
              className="bg-gray rounded-[1.6rem] shadow-md overflow-hidden w-full opacity-70"
            >
              <img
                src={
                  thumbnails[project.id] ||
                  "https://via.placeholder.com/300x200"
                }
                alt={project.title}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="p-[2rem]">
                <h3 className="text-[2rem] text-green">
                  {project.title}
                </h3>
                <div className="flex justify-between mt-[2rem]">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-green px-[1.2rem] py-[0.4rem] text-[1.4rem] text-dark rounded-[1.2rem] border-[1px] border-green hover:bg-transparent hover:text-white duration-300 transition-all">
                      view project
                    </button>
                  </a>
                  <a
                    href={project.codeLink}
                    className="text-dark hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="text-[2.4rem] text-white hover:text-green transition-all duration-300 hover:scale-110" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

    </section>
  );
};

export default Works;
