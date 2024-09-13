

export async function fetchAlbum(id: number){
    const data = await fetch(`http://localhost:8080/albums/${id}`)

    return data
}