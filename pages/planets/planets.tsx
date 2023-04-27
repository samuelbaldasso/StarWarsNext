import { api } from "@/services/api";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button, Container, Container2, StarWarsLogo } from "./style";

export default function Planets() {
  const [planet, setPlanets] = useState([]);
  const [page, setPage] = useState(1);
  const [id, setId] = useState(1);

  async function getData() {
    const res = await api.get(`/planets/?page=${page}`);
    const data = res.data.results;
    data.forEach((item: any) => {
      const split = item.url.split("/");
      const newIndex = split[split.length - 2];
      item.id = newIndex
    });
    setId(data.map((e: any)=> e.id))
    setPlanets(data);
  }
  const isNotPrevious = page === 1;
  const isNotNext = page === 6;

  useEffect(() => {
    getData()
  }, [page]);

  return (
    <Container>
      <Container2>
        <StarWarsLogo src="https://fontmeme.com/permalink/220901/21c010a15ab1f11501bf3b5bd37e5d7f.png" />
      </Container2>
      <Container>
        {planet?.map((e: any) => (
          <Link href={{pathname: `../planet/${e.id}`}} key={e.id}>
            {e.name}
          </Link>
        ))}
      </Container>
      <Container2>
        <Button onClick={() => setPage(page - 1)} disabled={isNotPrevious}>
          Previous
        </Button>
        <Button onClick={() => setPage(page + 1)} disabled={isNotNext}>
          Next
        </Button>
      </Container2>
    </Container>
  );
}
