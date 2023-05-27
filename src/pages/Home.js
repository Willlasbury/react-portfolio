import photo from "../utils/images/photo.jpg";

export default function Home() {
  return (
    <main className="flex flex-col grow items-center">
      <h1 className="text-4xl font-sans border-4 border-cyan-400 rounded-lg p-4 my-3 drop-shadow-lg inner-shadow">I'm Will, please hire me</h1>
      <img
        className="w-2/12 rounded-full border-2 border-blue-950 drop-shadow-2xl shadow-inner"
        src={photo}
        alt="Will climbing the Shredder Project in southwestern Virginia"
      ></img>
    </main>
  );
}
