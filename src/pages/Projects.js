import projects from "../utils/projects";

export default function Home() {
  return (
    <>
      <h1 className="mb-5 text-3xl font-bold font-sans text-gray-900 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
        Projects
      </h1>
      <section className="flex flex-wrap justify-center grow">
        {Object.keys(projects).map((key, index) => {
          return (
            <article
              key={index}
              className="flex w-1/3 m-3 border-4 border-gray-700 rounded-lg shadow-lg bg-cyan-500"
            >
              <a
                className="flex justify-center items-center grow text-xl font-medium hover:[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]  hover:bg-cyan-400 hover:rounded-lg"
                href={projects[key]}
              >
                {key}
              </a>
            </article>
          );
        })}
      </section>
    </>
  );
}
