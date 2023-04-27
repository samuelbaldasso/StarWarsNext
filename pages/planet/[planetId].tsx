import { api } from "@/services/api";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { Container, Container2, H1, H2 } from "./styles/style";

export default function Planet() {
  const [planet, setPlanet] = useState<any>([]);
  const router = useRouter();

  async function getData() {
    const id = router.asPath.split("/")[2];
    const res = await api.get(`/planets/${id}`);
    const data = res.data;
    setPlanet(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <Container2>
        <H1>Name: {planet?.name}</H1>
        <H1>Rotation period: {planet?.rotation_period}</H1>
        <H1>Orbital period: {planet?.orbital_period}</H1>
        <H1>Diameter: {planet?.diameter}</H1>
        <H1>Climate: {planet?.climate}</H1>
        <H1>Gravity: {planet?.gravity}</H1>
        <H1>Terrain: {planet?.terrain}</H1>
        <H1>Surface: {planet?.surface_water}</H1>
        <H1>Population: {planet?.population}</H1>
      </Container2>
    </Container>
  );
}