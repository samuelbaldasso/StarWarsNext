import { Container, Container2, H1, H2 } from "./styles/style";
import { api } from "@/services/api";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Films() {
  const [movies, setMovies] = useState<any>([]);
  const router = useRouter();

  async function getData() {
    const id = router.asPath.split("/")[2];
    const res = await api.get(`/films/${id}`);
    const data = res.data;
    setMovies(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <Container2>
        <H1>Title: {movies?.title}</H1>
        <H1>Episode: {movies?.episode_id}cm</H1>
        <H1>Director: {movies?.director}</H1>
        <H1>Producers: {movies?.producer}</H1>
        <H1>Release date: {movies?.release_date}</H1>
        <br />
        <H2>OPENING CRAWL</H2>
        <H1>{movies?.opening_crawl}</H1>
      </Container2>
    </Container>
  );
}
