import { useState, useEffect } from "react";
import getRepos from "../utils/fetch";
import Repo from "../components/Repo";

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const data = await getRepos();
    setRepos(data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <>
        <p>Retrieving repositories from Github</p>
      </>
    );
  } else if (repos.message) {
    return (
      <section>
        <p>{repos.message}</p>
      </section>
    );
  } else {
    return (
      <section>
        <ul className="flex flex-wrap justify-center">
          {repos.map((repo) => (
            <Repo key={repo.id} repo={repo} />
          ))}
        </ul>
      </section>
    );
  }
}
