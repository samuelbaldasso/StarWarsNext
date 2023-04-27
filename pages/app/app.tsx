import Link from "next/link";
import { Button, Container, Container2, StarWarsLogo } from "./style";

export const MyApp = () => {
  return (
    <Container>
      <Container2>
        <StarWarsLogo src="https://fontmeme.com/permalink/220901/21c010a15ab1f11501bf3b5bd37e5d7f.png" />
      </Container2>
      <Container2>
        <Button>
          <Link href={'home/home'}>Characters</Link>
        </Button>
        <Button>
          <Link href={'movies/movies'}>Movies</Link>
        </Button>
        <Button>
          <Link href={'planets/planets'}>Planets</Link>
        </Button>
        <Button>
          <Link href={'starships/starships'}>Starships</Link>
        </Button>
      </Container2>
    </Container>
  );
}