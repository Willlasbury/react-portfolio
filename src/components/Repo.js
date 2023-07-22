export default function Repo ({repo}) {
    // TODO: pull metrics from repo data to display graphics
    return(
        <>
        <h2>{repo.description}</h2>
        <h3>{repo.html_url}</h3>
        </>
    )
}