import getRepos from "./getRepos";
import filterRepos from "./filterRepos";


export default async function getFetch () {
    const url = "https://api.github.com/users/willlasbury/repos";
    const repos = await getRepos(url)
    const toDisplay = await filterRepos(repos)
    console.log("toDisplay:", toDisplay)
    return toDisplay
}