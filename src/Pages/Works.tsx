import { FaGithub } from "react-icons/fa6";
import { useEffect, useState } from "react";

interface Project {
  id: number;
  title: string;
  liveLink: string;
  codeLink: string;
  imageLink: string;
}

const Works: React.FC = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoadning] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://sheetdb.io/api/v1/ml9dnjp0bnbkm"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        console.log(result);
        setProjects(result);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
      }
      setLoadning(false);
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    );
  if (error) return <p>Error: {error}</p>;

  return (
    <section
      className="w-full h-full overflow-y-auto xl:px-[4rem]"
      id="works"
    >
      <div className="grid place-items-center justify-items-center gap-[4rem] md:grid-cols-2 3xl:grid-cols-3 w-full mb-[2.4rem] overflow-y-auto">
        {projects.map((project: Project) => (
          <div
            key={project.id}
            className="bg-gray rounded-[1.6rem] shadow-md overflow-hidden w-full opacity-70"
          >
            <img
              src={project.imageLink}
              alt={project.title}
              className="w-full h-[20rem] object-cover"
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
