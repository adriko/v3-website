export interface SeasonCampaign {
  id: string;
  name: string;
  startMonth: number; // 1-12
  startDay: number;
  endMonth: number;
  endDay: number;
  badge: string;
  text: string;
  ctaText: string;
  ctaLink: string;
  themeGradient: string;
  accentBorder: string;
}

export const SEASON_CAMPAIGNS: SeasonCampaign[] = [
  {
    id: "halloween",
    name: "Halloween",
    startMonth: 10,
    startDay: 24, // Od 24 października
    endMonth: 11,
    endDay: 2, // Do 2 listopada
    badge: "🎃 HALLOWEEN W V3",
    text: "Upiornie mocna forma! Wpisowe 0 zł i analiza składu ciała gratis do karnetu.",
    ctaText: "Sprawdź karnety",
    ctaLink: "#cennik",
    themeGradient: "from-orange-950 via-zinc-950 to-orange-900",
    accentBorder: "border-orange-500/40 text-orange-400",
  },
  {
    id: "mikolajki",
    name: "Mikołajki",
    startMonth: 11,
    startDay: 29, // Tydzień przed 6 grudnia
    endMonth: 12,
    endDay: 9, // 3 dni po Mikołaju
    badge: "🎅 MIKOŁAJKI W V3",
    text: "Podaruj bliskim zdrowie i formę na święta – vouchery podarunkowe na recepcji.",
    ctaText: "Kup karnet",
    ctaLink: "#cennik",
    themeGradient: "from-red-950 via-zinc-950 to-red-900",
    accentBorder: "border-red-500/40 text-red-400",
  },
  {
    id: "swieta",
    name: "Święta Bożego Narodzenia",
    startMonth: 12,
    startDay: 15,
    endMonth: 12,
    endDay: 26,
    badge: "🎄 ŚWIĄTECZNY TRENING",
    text: "Klub V3 otwarty 5:00 – 24:00 również w okresie świątecznym na kod QR z aplikacji!",
    ctaText: "Zobacz godziny",
    ctaLink: "#kontakt",
    themeGradient: "from-emerald-950 via-zinc-950 to-red-950",
    accentBorder: "border-emerald-500/40 text-emerald-400",
  },
  {
    id: "nowy-rok",
    name: "Noworoczne Postanowienia",
    startMonth: 12,
    startDay: 27,
    endMonth: 1,
    endDay: 20, // Do 20 stycznia
    badge: "⚡ NOWY ROK 2027",
    text: "Zrealizuj swoje postanowienia! Dwa piętra treningu, Fight Zone i Strefa Kobiet.",
    ctaText: "Dołącz teraz",
    ctaLink: "#cennik",
    themeGradient: "from-yellow-950 via-zinc-950 to-zinc-900",
    accentBorder: "border-yellow-500/40 text-yellow-400",
  },
  {
    id: "walentynki",
    name: "Walentynki",
    startMonth: 2,
    startDay: 7,
    endMonth: 2,
    endDay: 16,
    badge: "❤️ WALENTYNKI W V3",
    text: "Trenujcie razem! Zabierz drugą połówkę na trening wprowadzający za 1 zł.",
    ctaText: "Zadzwoń do klubu",
    ctaLink: "tel:+48788463717",
    themeGradient: "from-pink-950 via-zinc-950 to-rose-950",
    accentBorder: "border-pink-500/40 text-pink-400",
  },
];
