
export async function fetchAlbum(id: number, responseConfig?: responseConfig) {
  try {

    const data = await fetch(`http://127.0.0.1:8000/releases/${id}`, {next:{revalidate:1000}});
    const json = await data.json();
    console.log(json);

    return json;
  } catch (error) {
    console.log(error);

    return null;
  }
}
