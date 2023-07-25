export default async function getRepos(url) {
  const response = await fetch(url);
  if (response.ok){
    const data = await response.json();
    return data
  } else {
    throw console.error();
  }
}
