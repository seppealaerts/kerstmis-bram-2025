import TicketSlide from "../TicketSlide";

export default function Slide5() {
  const tickets = [
    "Toegang tot de VIP tribune bij al mijn internationale tenniswedstrijden",
    "Een exclusieve, door mij gesigneerde, limited edition tennisbal",
    "Een nieuwe tennisracket en tennisschoenen naar keuze uit mijn eigen collectie, in samenwerking met Wilson",
    "Een lessenreeks door mij, om je techniek wat bij te schaven",
    "Een persoonlijke rondleiding door mijn luxueuze tennisvilla",
    "Een privé jet trip naar Wimbledon, inclusief overnachting met luxeontbijt",
    "Een diner met mij en Roger Federer (Roger is één van mijn grootste fans en kijkt erg naar me op)",
    "Een kans om mijn 'lucky tennis socks' te dragen tijdens je belangrijkste wedstrijd",
  ];

  return <TicketSlide title="Je cadeautje bevat:" tickets={tickets} />;
}
