import ListSlide from "../ListSlide";

export default function Slide5() {
  const items = [
    { content: "Breek iets dat normaal heel blijft", key: "3" },
    {
      content: "Een klein beetje van wat de zee bewaart is genoeg",
      key: "7",
    },
    {
      content: "Voeg het witte toe dat in bijna elke keuken woont",
      key: "1",
    },
    { content: "Keer pas wanneer het moment juist voelt", key: "9" },
    { content: "Breng alles samen tot het één geheel wordt", key: "0" },
    { content: "Warm het vlak waar alles zal gebeuren", key: "4" },
    {
      content:
        "Begin met iets vloeibaars dat vaker in glazen dan in pannen zit",
      key: "6",
    },
    { content: "Laat het mengel voorzichtig zijn plaats vinden", key: "2" },
    { content: "Stop wanneer kleur belangrijker wordt dan tijd", key: "8" },
    {
      content: "Wacht tot kleine tekenen aan de oppervlakte verschijnen",
      key: "5",
    },
  ];

  return (
    <ListSlide title="Het recept:" items={items} correctPassword="6137042598" />
  );
}
