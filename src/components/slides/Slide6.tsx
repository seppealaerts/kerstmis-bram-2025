import { Button, Text } from "@radix-ui/themes";
import Slide from "../Slide";

export default function Slide6() {
  return (
    <Slide emoji="🎉" title="Allee proficiat!">
      <Text size="4">Het is je dan tóch gelukt!</Text>
      <br />
      <Text size="4" style={{ marginTop: "2rem" }}>
        Akkoord, het recept was misschien niet super duidelijk, maar hieronder
        kan je het volledige recept vinden.
      </Text>
      <Button
        variant="outline"
        color="crimson"
        asChild
        style={{ marginTop: "2rem" }}
      >
        <a
          href="/assets/pdf/recept-pannenkoeken.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download recept ↓
        </a>
      </Button>
    </Slide>
  );
}
