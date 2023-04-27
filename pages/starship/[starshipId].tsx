import axios from "axios";
import { api } from "@/services/api";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Container, Container2, H1 } from "./styles/style";

export default function Starship() {
  const [starship, setStarship] = useState<any>([]);
  const router = useRouter();

  async function getData() {
    const id = router.asPath.split("/")[2];
    const res = await api.get(`/starships/${id}`);
    const data = res.data;
    setStarship(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <Container2>
        <H1>Name: {starship?.name}</H1>
        <H1>Model: {starship?.model}</H1>
        <H1>Manufacturer: {starship?.manufacturer}</H1>
        <H1>Cost: {starship?.cost_in_credits}</H1>
        <H1>Length: {starship?.length}</H1>
        <H1>Max speed: {starship?.max_atmosphering_speed}</H1>
        <H1>Crew: {starship?.crew}</H1>
        <H1>Passengers: {starship?.passengers}</H1>
        <H1>Capacity: {starship?.cargo_capacity}</H1>
        <H1>Consumables: {starship?.consumables}</H1>
        <H1>Hyperdrive rating: {starship?.hyperdrive_rating}</H1>
        <H1>MGLT: {starship?.MGLT}</H1>
        <H1>Starship class: {starship?.starship_class}</H1>
      </Container2>
    </Container>
  );
}