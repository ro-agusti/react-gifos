export const getGifs = async (category) => {
    const apiKey = 'SNJ9a5GbDjgSmOddC8ab03rQXLhxjPvS'
    const url = `http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURI(category)}&limit=10`
    const respuesta = await fetch(url);
    const { data } = await respuesta.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs
}