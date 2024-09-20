export async function fetchAlbum(id: number) {
  try {
    const data = await fetch(`http://127.0.0.1:8000/bands/${id}`);
    const json: string = await data.json();
    console.log(json);

    return json;
  } catch (error) {
    console.log(error);

    return null;
  }
}
