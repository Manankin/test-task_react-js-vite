export default async function getData () {
  const result = await fetch('https://api.spacexdata.com/v4/dragons')
    .then(response => response.json())
    .then(data => data)

  return result;
}