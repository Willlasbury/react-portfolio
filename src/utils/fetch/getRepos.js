export default async function getRepos(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data
}
