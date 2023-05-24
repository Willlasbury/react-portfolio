import pages from "../pages";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="bg-gradient-to-r from-cyan-500 from-20% via-purple-500 via-60% to-cyan-500 rounded-b-md">
      <ul className="flex flex-row">
        {Object.keys(pages).map((key, index) => {
          return (
            <li key={index} className="ml-4 my-2">
              <Link to={pages[key]} className='font-bold text-gray-800 hover:underline hover:shadow-lg'>{key}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
