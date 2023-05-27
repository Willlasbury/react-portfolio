import projects from "../utils/projects";

export default function Home() {
  return (
    <main className="h-full">
      <h1 className="mb-5 flex justify-center text-3xl font-bold font-sans text-gray-900 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
        Projects
      </h1>
      <section className="flex flex-wrap justify-center h-5/6">
        {Object.keys(projects).map((key, index) => {
          return (
            <article
              key={index}
              className="flex justify-center w-1/4 h-1/4 m-3 border-4 border-gray-700 rounded-lg shadow-lg bg-cyan-500 hover:font-bold hover:bg-cyan-400 text-xl font-medium hover:text-2xl"
            >
              <a
                className="flex grow place-content-center items-center"
                href={projects[key]}
              >
                {key}
              </a>
            </article>
          );
        })}
      </section>
    </main>
  );
}