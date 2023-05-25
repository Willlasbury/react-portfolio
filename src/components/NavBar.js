import { Link } from "react-router-dom";

export default function NavBar() {
  const pages = {
    Home: "/",
    Project: "/projects",
    "About Me": "/aboutme",
  };

  return (
    <nav className="bg-gradient-to-r from-cyan-500 from-20% via-purple-500 via-60% to-cyan-500 rounded-b-md">
      <ul className="flex flex-row">
        {Object.keys(pages).map((key, index) => {
          return (
            <li key={index} className="ml-4 my-2">
              <Link
                to={pages[key]}
                className="font-bold text-green-200 text-2xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:underline hover:shadow-lg hover:text-blue-900"
              >
                {key}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
