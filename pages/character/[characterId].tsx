import axios from "axios";
import { Button, Container, Container2, H1, Link, StarWarsLogo } from "./style";
import { api } from "@/services/api";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Character() {
  const [characters, setCharacters] = useState<any>([]);
  const router = useRouter();

  async function getData() {
    const id = router.asPath.split("/")[2];
    const res = await api.get(`/people/${id}`);
    const data = res.data;
    setCharacters(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <Container2>
        <H1>Name: {characters?.name}</H1>
        <H1>Height: {characters?.height}cm</H1>
        <H1>Mass: {characters?.mass}kg</H1>
        <H1>Hair color: {characters?.hair_color}</H1>
        <H1>Skin color: {characters?.skin_color}</H1>
        <H1>Eye color: {characters?.eye_color}</H1>
        <H1>Birth year: {characters?.birth_year}</H1>
        <H1>Gender: {characters?.gender}</H1>
      </Container2>
    </Container>
  );
}
