import keyValues from "./key";
import Legend from "./Legend";

export default function Long() {
  const keys = Object.keys(keyValues);

  return (
    <article className="border-black border-2 m-3 p-3 bg-slate-100 rounded-md shadow-xl">
      <section className="flex flex-col mb-3 border-b-2 border-black">
        {keys.map((name) => (
          <Legend key={name} name={name} />
        ))}
      </section>
      {keys.map((key, index) => {
        return (
          <section key={index}>
            <h2 id={key} className="text-lg font-bold underline">
              {key}
            </h2>
            <article>{keyValues[key]}</article>
          </section>
        );
      })}
      <p>
        ... still in progress. I am writing this as I get time. I apologize for
        all the typos and grammer mistakes.
      </p>
    </article>
  );
}
