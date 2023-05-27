import photo from "../utils/images/photo.jpg";

export default function AboutMe({ visited }) {
  return (
    <main className="h-screen mt-3 flex flex-col place-items-center">
      <h1>William Asbury</h1>
      <h2>I like to climb rocks and learn things. Please give me a job</h2>
      <img
        className="w-2/12 rounded-full border-2 border-blue-950 drop-shadow-2xl shadow-inner"
        src={photo}
        alt="Will climbing the Shredder Project in southwestern Virginia"
      />
    </main>
  );
}