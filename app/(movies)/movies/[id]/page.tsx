import { API_URL } from '../../../(home)/page';

export const metadata = {
  title: 'Movies',
};

async function getMovie(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
}

export default async function MovieDetail(props: { params: { id: string } }) {
  // params를 먼저 await로 기다립니다
  const params = await props.params;
  const id = params.id;

  console.log(id);
  const movie = await getMovie(id);
  return <h1>{movie.title}</h1>;
}
