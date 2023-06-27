export default function Short({ handleRedirect }) {
  
  return (
    <article className="border-black border-2 m-3 p-3 bg-slate-100 rounded-md shadow-xl">
      <section className="p-2">
        <p>
          Hello, my name is Will, and I am currently looking for work as a full
          stack web developer. I have been exposed to coding for about seven
          years, and I have decided to turn my hobby into a job. I completed a
          full stack development bootcamp through the University of Washingtonm,
          where I learned JavaScript and React. I led the technical aspects of
          every one of my group projects, and managed the repository and
          deployment as well. I was the primary contributor to my final project
          and helped direct and lead each group member to build a more robust
          code base. If anyone reading this would like a more long winded
          version of this, please direct yourself to my {" "}
          <span
            onClick={handleRedirect}
            className="font-bold hover:cursor-pointer"
          >
            longer About Me 
          </span>{" "}
           page.
        </p>
      </section>
    </article>
  );
}
