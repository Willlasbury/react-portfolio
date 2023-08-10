import { Link } from "react";

export default function Repo({ repo }) {
  // TODO: pull metrics from repo data to display graphics

  function findLink() {
    if (repo.homepage) {
      return repo.homepage;
    } else {
      return repo.html_url;
    }
  }

  return (
    <li className="flex border-2 border-black rounded-lg px-3 py-1 m-2 shadow-md hover:shadow-xl">
      <a
        href={findLink()}
        target="_blank"
        // className="border-2 border-black rounded-lg px-3 py-1 m-2 shadow-md hover:shadow-xl"
      >
        <h2 className="text-slate-900 font-semibold">{repo.description}</h2>
        <h3 className="text-slate-700">
          <span className="font-semibold text-slate-900">Repository: </span>
          <a href={repo.html_url} target="_blank" className="hover:text-black"> 
            {repo.html_url}
          </a>
        </h3>
      </a>
    </li>
  );
}
