export interface Trainer {
  id: string;
  name: string;
  role: string;
  zone: "fight" | "gym";
  tags: string[];
  experience: string;
  description: string;
  leadsClasses?: string;
  specialLink?: { label: string; href: string };
  image?: string;
}

export const TRAINERS: Trainer[] = [
  // ==========================================
  // STREFA SPORTÓW WALKI (KSW SOKÓŁ & V3)
  // ==========================================
  {
    id: "jacek-bronowski",
    name: "Jacek Bronowski",
    role: "Założyciel KSW Sokół • Trener Kickboxingu i Boksu",
    zone: "fight",
    tags: ["Boks", "Kickboxing", "Mistrz Polski", "Licencja II Klasy PZKB"],
    experience: "Kilkadziesiąt lat w ringu i szkoleniu",
    description:
      "Twórca Klubu Sportów Walki Sokół Jarosław i kluczowa postać lokalnego środowiska sportów walki. Magister WF i rehabilitacji Uniwersytetu Rzeszowskiego, licencjonowany trener II klasy PZKB oraz instruktor boksu i akrobatyki. Były Mistrz Polski w kickboxingu i all style karate. Wychowawca medalistów wyróżniony m.in. przez Ministra Sportu.",
    leadsClasses: "Boks, Kickboxing, Treningi Personalne",
  },
  {
    id: "dawid-pietluch",
    name: "Dawid Pietluch",
    role: "Trener Personalny • Zawodnik MMA & Boks",
    zone: "fight",
    tags: ["MMA", "Babilon MMA", "Zapasy", "Walka w Parterze"],
    experience: "Czynny zawodnik sceny zawodowej",
    description:
      "Czynny zawodnik MMA występujący m.in. na galach Babilon MMA oraz wydarzeniach regionalnych. Doświadczenie zdobywał w rywalizacji amatorskiej i zawodowej. Na treningach łączy skuteczne zapasy i kontrolę parterową z techniką bokserską oraz profesjonalnym przygotowaniem motorycznym.",
    leadsClasses: "MMA (Piątek & Sobota)",
  },
  {
    id: "mariusz-miara",
    name: "Mariusz Miara",
    role: "Instruktor Krav Maga & Samoobrony",
    zone: "fight",
    tags: [
      "Krav Maga",
      "Certyfikat Izraelski",
      "Knife Fight",
      "Samoobrona Kobiet",
    ],
    experience: "Ponad 30 lat w sztukach walki",
    description:
      "Od ponad 30 lat związany ze sztukami walki (Oyama Karate, kickboxing, Krav Maga od 2005). Współzałożyciel sekcji Krav Maga w Przemyślu i wiceprezes Stowarzyszenia KMP. Uprawnienia zdobył na izraelskim kursie instruktorskim (2014). Specjalizuje się w walce wręcz, obronie przed nożem i kursach samoobrony.",
    leadsClasses: "Krav Maga / Samoobrona",
  },
  {
    id: "marcin-jaworski",
    name: "Marcin Jaworski",
    role: "Instruktor Kickboxingu & Boksu",
    zone: "fight",
    tags: ["Kickboxing", "Boks", "Mgr WF", "Instruktor Akrobatyki"],
    experience: "Wychowanek KSW Sokół Jarosław",
    description:
      "Magister wychowania fizycznego i rehabilitacji, licencjonowany trener II klasy Polskiego Związku Kickboxingu (PZKB) oraz instruktor boksu i akrobatyki sportowej. Jako były zawodnik KSW Sokół doskonale zna metodykę szkoleniową, stawiając na zaangażowanie i precyzyjne szlifowanie techniki.",
    leadsClasses: "Kickboxing Kadet / Junior",
  },
  {
    id: "damian-bialy",
    name: "Damian Biały",
    role: "Instruktor Kickboxingu",
    zone: "fight",
    tags: ["Kickboxing", "K1", "Dyscyplina", "Klimat Treningu"],
    experience: "Wieloletni zawodnik turniejowy",
    description:
      "Instruktor kickboxingu i były zawodnik KSW Sokół Jarosław. Wieloletnie doświadczenie z mat i ringów przekłada na rzetelną pracę szkoleniową. Wspólnie z kadrą Sokoła buduje u podopiecznych żelazną dyscyplinę, sprawność fizyczną oraz zasady sportowej rywalizacji.",
    leadsClasses: "Kickboxing Kids / Start",
  },

  // ==========================================
  // STREFA SIŁOWNIA, FITNESS & WELLNESS
  // ==========================================
  {
    id: "rafal-surmiak",
    name: "Rafał Surmiak",
    role: "Trener Personalny • Przygotowanie Motoryczne",
    zone: "gym",
    tags: [
      "Trening Motoryczny",
      "CROSS",
      "Sportowcy Zawodowi",
      "Powrót po Urazach",
    ],
    experience: "Specjalista motoryki sportowej",
    description:
      "Specjalizuje się w przygotowaniu motorycznym sportowców zawodowych (piłkarze, siatkarze, zawodnicy sportów walki) oraz amatorów. Prowadzi treningi siłowe, wspiera powrót do pełnej sprawności przy bólach stawów i kręgosłupa. Pracuje również z młodzieżą, seniorami oraz kobietami w ciąży.",
    leadsClasses: "CROSS w czwartki (w cenie każdego karnetu!)",
  },
  {
    id: "wiktoria-trojniak",
    name: "Wiktoria Trojniak",
    role: "Trenerka Personalna • Instruktorka Fitness",
    zone: "gym",
    tags: [
      "Trening Siłowy",
      "Praktyka w Berlinie",
      "Zdrowy Kręgosłup",
      "Rehabilitacja Ruchowa",
    ],
    experience: "Wieloletnie doświadczenie międzynarodowe",
    description:
      "Doświadczenie zawodowe zdobywała m.in. w Berlinie, gdzie przez lata pracowała jako trenerka personalna. Specjalizuje się w treningu siłowym i funkcjonalnym. Skutecznie pomaga osobom wracającym do sprawności po operacjach i kontuzjach, łącząc profesjonalizm z ogromną dawką motywującej energii.",
    leadsClasses: "V3 Step Up!, Zdrowy Kręgosłup, Booty & Full Body Project",
  },
  {
    id: "grzegorz-ficek",
    name: "Grzegorz Ficek",
    role: "Instruktor Jogi • Medytacja & Dźwiękoterapia",
    zone: "gym",
    tags: ["Joga", "Misy Tybetańskie", "Dźwiękoterapia", "Medytacja Kundalini"],
    experience: "Kilkadziesiąt lat praktyki jogi",
    description:
      "Instruktor Jogi z kilkudziesięcioletnim doświadczeniem. Łączy praktykę ruchową z technikami relaksacyjnymi, medytacją Osho Kundalini oraz dźwiękoterapią przy użyciu mis tybetańskich, gongów, bębnów i dzwonków Koshi. Tworzy przestrzeń sprzyjającą głębokiemu wyciszeniu, oddechowi i harmonii ciała.",
    leadsClasses: "Joga & Relaksacja",
  },
  {
    id: "zuzanna-janicka",
    name: "Zuzanna Janicka",
    role: "Trenerka Personalna • Instruktorka Pilates & Trening Sylwetkowy",
    zone: "gym",
    tags: ["Pilates", "Booty Heaven", "Psychologia Sportu", "Strefa Kobiet"],
    experience: "Opieka wellness i modelowanie sylwetki",
    description:
      "W V3 prowadzi zajęcia Pilates oraz Booty Heaven – kameralne treningi personalne w małych grupach nastawione na pośladki i nogi. Studentka psychologii (rehabilitacja młodzieży), łącząca biomechanikę ćwiczeń z empatią i zrozumieniem potrzeb podopiecznych. Koordynuje także odrębną Strefę Kobiet.",
    leadsClasses: "Pilates, Booty Heaven, Konsultacje Personalne",
    specialLink: {
      label: "Odwiedź dedykowaną Strefę Kobiet Zuzy →",
      href: "#strefa-kobiet",
    },
  },
];
