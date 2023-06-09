export default function Footer() {
  const style =
    "p-2 border-2 border-gray-700 rounded-lg bg-sky-200 shadow-lg";
  return (
    <footer className="flex justify-center w-full">
      <ul className="flex w-full justify-evenly my-5">
        <li className={style}>
          <span className="font-bold">Github:</span>
          <a href="https://github.com/Willlasbury" className="font-semibold">   Willlasbury</a>
        </li>
        <li className={style}>
          <span className="font-bold">Email:</span> <span className="font-semibold">    asburyw229@gmail.com</span>
        </li>
        <li className={style}>
          <span className="font-bold">LinkedIn:</span>{" "}
          <a href="https://www.linkedin.com/in/william-asbury-2613a824b/"  className="font-semibold">
                William Asbury
          </a>
        </li>
      </ul>
    </footer>
  );
}
