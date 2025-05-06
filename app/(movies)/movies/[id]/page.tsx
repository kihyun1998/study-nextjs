import { API_URL } from '../../../(home)/page';

export const metadata = {
  title: 'Movies',
};

async function getMovie(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
}

async function getVideos(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const res = await fetch(`${API_URL}/${id}/videos`);
  return res.json();
}

export default async function MovieDetail(props: { params: { id: string } }) {
  const params = await props.params;
  const id = params.id;

  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  return <h1>{movie.title}</h1>;
}
