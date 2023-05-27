import { NavLink } from "react-router-dom";

export default function NavBar() {
  const pages = {
    Home: "/",
    Portfolio: "/portfolio",
    "About Me": "/aboutme",
    Contact: "/contact",
    Resume: "/resume"
  };

  return (
    <header>
      <nav className="flex place-content-between bg-gradient-to-r from-cyan-500 from-20% via-purple-500 via-60% to-cyan-500 rounded-md border-2 border-cyan-800">
        <ul className="flex flex-row">
          {Object.keys(pages).map((key, index) => {
            return (
              <li key={index} className="ml-10 my-2">
                <NavLink
                  to={pages[key]}
                  className={({ isActive }) =>
                    isActive
                      ? "p-1 font-bold text-green-500 text-2xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] rounded-md hover:underline hover:text-blue-900"
                      : "font-bold text-green-200 text-2xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]  hover:underline hover:text-blue-700"
                  }
                >
                  {key}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <p className="flex place-self-center mx-3 text-2xl font-semibold text-green-500 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          William Asbury
        </p>
      </nav>
    </header>
  );
}
