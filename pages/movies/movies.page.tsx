import { api } from "@/services/api";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Container, Container2, StarWarsLogo, Button } from "./styles/style";

export default function Movies(){
  const [movies, setMovies] = useState([]);
  const [id, setId] = useState(1);

  async function getData() {
    const res = await api.get(`/films/`);
    const data = res.data.results;
    data.forEach((item: any) => {
      const split = item.url.split("/");
      const newIndex = split[split.length - 2];
      item.id = newIndex
    });
    setId(data.map((e: any)=> e.id))
    setMovies(data);
  }

  useEffect(() => {
    getData()
  }, []);

  return (
    <Container>
      <Container2>
        <StarWarsLogo src="https://fontmeme.com/permalink/220901/21c010a15ab1f11501bf3b5bd37e5d7f.png" />
      </Container2>
      <Container>
        {movies?.map((e: any) => (
          <Link href={{pathname: `../film/${e.id}`}} key={e.id}>
            {e.title}
          </Link>
        ))}
      </Container>
    </Container>
  );
}
