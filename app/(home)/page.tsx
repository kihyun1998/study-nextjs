
export const metadata = {
    title: 'Home',
}

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";
async function getMovies() {
    await new Promise((resolve)=> setTimeout(resolve,5000));
    const res = await fetch(URL);
    const json = await res.json();
    return json;
}

export default async function HomePage(){
    const movies = await getMovies();
    return (
        <div>
            <h1>Home</h1>
           {JSON.stringify(movies)}
        </div>
    );
}