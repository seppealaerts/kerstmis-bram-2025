import Slide from "../Slide";
import CreditCard from "../CreditCard";
import { Button } from "@radix-ui/themes";

export default function Slide8() {
  return (
    <Slide emoji="🎁" title="Je cadeaubon">
      <CreditCard
        src="/assets/img/bon-intersport-front.png"
        backSrc="/assets/img/bon-intersport-back.png"
        alt="Intersport cadeaubon voorkant"
        backAlt="Intersport cadeaubon achterkant"
      />
      <Button
        variant="outline"
        color="crimson"
        asChild
        style={{ marginTop: "2rem" }}
      >
        <a
          href="/assets/pdf/bon-intersport.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download cadeaubon ↓
        </a>
      </Button>
    </Slide>
  );
}
