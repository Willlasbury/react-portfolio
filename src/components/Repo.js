export default function Repo ({repo}) {
    // TODO: pull metrics from repo data to display graphics
    return(
        <section className="border-2 border-black rounded-lg px-3 py-1 m-2 shadow-md">
        <h2 className="text-slate-900 font-semibold">{repo.description}</h2>
        <h3 className="text-slate-800">{repo.html_url}</h3>
        </section>
    )
}