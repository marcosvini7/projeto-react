export async function loadPosts(){
    const postsPromise = fetch('https://jsonplaceholder.typicode.com/posts')
    const photosPromise = fetch('https://jsonplaceholder.typicode.com/photos')

    const [posts, photos] = await Promise.all([postsPromise, photosPromise])

    const postsJson = await posts.json()
    const photosJson = await photos.json()

    const postsAndPhotos = postsJson.map((post, i) => {
      return {...post, photoUrl: photosJson[i].url}
    })

    return postsAndPhotos
}