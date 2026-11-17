export interface ClubClassInfo {
  id: string;
  zone: "fight" | "fitness";
  title: string;
  subtitle: string;
  filterCategory: string;
  level: string;
  focus: string;
  description: string;
  image?: string;
  accentColor: string;
  featured?: boolean;
}

export interface AgeGroupInfo {
  name: string;
  subtitle: string;
  desc: string;
  age: string;
  duration: string;
  pro: boolean;
}

export const FIGHT_DISCIPLINES: ClubClassInfo[] = [
  {
    id: "kickboxing-k1",
    zone: "fight",
    title: "Kickboxing / K1",
    subtitle: "Stójka & Kopnięcia",
    filterCategory: "Kickboxing",
    level: "Wszystkie poziomy",
    focus: "Dynamika • Kondycja • Technika",
    description:
      "Połączenie klasycznych technik bokserskich z dynamicznymi kopnięciami na wszystkich wysokościach. Treningi prowadzone przez licencjonowaną kadrę KSW Sokół Jarosław rozwijają koordynację, szybkość reakcji oraz żelazną kondycję — zarówno w grupach rekreacyjnych, jak i zawodniczej kadrze Fight Team.",
    image: "/images/fight1.png",
    accentColor: "text-v3-red border-v3-red/30 bg-v3-red/10",
  },
  {
    id: "boks",
    zone: "fight",
    title: "Boks",
    subtitle: "Klasyczna Stójka",
    filterCategory: "Boks",
    level: "Początkujący i zaawansowani",
    focus: "Praca nóg • Precyzja • Uniki",
    description:
      "Szermierka na pięści na pełnowymiarowym ringu bokserskim V3. Skupiamy się na prawidłowej gardzie, poruszaniu się po ringu, kombinacjach ciosów na tarczach i ciężkich workach oraz kontrolowanych zadaniach technicznych.",
    image: "/images/boks2.jpg",
    accentColor: "text-v3-red border-v3-red/30 bg-v3-red/10",
  },
  {
    id: "mma",
    zone: "fight",
    title: "MMA",
    subtitle: "Walka Wszechstylowa",
    filterCategory: "MMA",
    level: "Open",
    focus: "Stójka • Zapasy • Parter",
    description:
      "Kompleksowe przygotowanie łączące uderzenia w stójce, klincz, obalenia zapaśnicze oraz kontrolę i poddania w parterze. Zajęcia odbywają się na profesjonalnej macie zapaśniczej pod okiem czynnych zawodników sceny zawodowej.",
    image: "/images/fight1.png",
    accentColor: "text-cyan-400 border-cyan-400/30 bg-cyan-400/10",
  },
  {
    id: "ssw-cobra-jujitsu",
    zone: "fight",
    title: "SSW Cobra Ju-Jitsu",
    subtitle: "Sztuka Obezwładniania",
    filterCategory: "SSW Cobra Ju-Jitsu",
    level: "Open",
    focus: "Dźwignie • Rzuty • Kontrola",
    description:
      "Tradycyjny, rozbudowany system walki wręcz oparty na rzutach, dźwigniach na stawy, duszeniach oraz skutecznej kontroli przeciwnika w bliskim dystansie i parterze.",
    image: "/images/fight1.png",
    accentColor: "text-purple-400 border-purple-400/30 bg-purple-400/10",
  },
  {
    id: "krav-maga",
    zone: "fight",
    title: "Samoobrona / Krav Maga",
    subtitle: "Praktyczna Samoobrona",
    filterCategory: "Samoobrona / Krav Maga",
    level: "Bez doświadczenia",
    focus: "Refleks • Obrona • Pewność siebie",
    description:
      "Praktyczny system obrony przed realnym zagrożeniem bez reguł sportowych. Nauka szybkiej oceny sytuacji, uwalniania się z chwytów, obrony przed uderzeniami oraz bezpiecznego reagowania w stresie.",
    image: "/images/boks2.jpg",
    accentColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
  },
  {
    id: "trening-wprowadzajacy",
    zone: "fight",
    title: "Trening wprowadzający",
    subtitle: "Idealny start od zera",
    filterCategory: "Trening wprowadzający",
    level: "Dla nowych osób",
    focus: "Podstawy • Bezpieczeństwo • Pozycja",
    description:
      "Dedykowane zajęcia dla osób, które nigdy wcześniej nie trenowały sportów walki. W spokojnym tempie poznasz podstawową pozycję, poruszanie się, wyprowadzanie prostych ciosów i zasady bezpieczeństwa na macie.",
    image: "/images/boks2.jpg",
    accentColor: "text-v3-lime border-v3-lime/30 bg-v3-lime/10",
    featured: true,
  },
];

export const FIGHT_AGE_GROUPS: AgeGroupInfo[] = [
  {
    name: "KIDS",
    subtitle: "Przedszkolaki",
    desc: "Rozwój sprawności, koordynacja i dyscyplina przez sportowe zabawy ruchowe.",
    age: "4–6 lat",
    duration: "45 min",
    pro: false,
  },
  {
    name: "START",
    subtitle: "Podstawy",
    desc: "Nauka pozycji walki, podstawowych uderzeń, równowagi i ogólnej zwinności.",
    age: "7–10 lat",
    duration: "45 min",
    pro: false,
  },
  {
    name: "KADET",
    subtitle: "Młodzież",
    desc: "Szlifowanie techniki ciosów, gibkość, praca nóg i przygotowanie motoryczne.",
    age: "10–13 lat",
    duration: "60 min",
    pro: false,
  },
  {
    name: "JUNIOR",
    subtitle: "Zaawansowani",
    desc: "Intensywny trening zadaniowy, praca na tarczach, sparingi i taktyka ringowa.",
    age: "14–18 lat",
    duration: "60 min",
    pro: false,
  },
  {
    name: "DOROŚLI",
    subtitle: "Forma & Pasja",
    desc: "Budowa kondycji, redukcja wagi i nauka techniki bez presji startów w zawodach.",
    age: "Open",
    duration: "75 min",
    pro: false,
  },
  {
    name: "FIGHT TEAM",
    subtitle: "Kadra PRO",
    desc: "Twarde sparingi turniejowe i specjalistyczne przygotowanie do walk zawodniczych.",
    age: "Zawodnicy",
    duration: "75 min",
    pro: true,
  },
];

export const FITNESS_CLASSES: ClubClassInfo[] = [
  {
    id: "cross",
    zone: "fitness",
    title: "CROSS z Rafałem",
    subtitle: "W cenie każdego karnetu",
    filterCategory: "CROSS",
    level: "Skalowany do możliwości",
    focus: "Wydolność • Siła • Obwody",
    description:
      "Intensywny trening funkcjonalny z wykorzystaniem odważników kettlebell, sztang, skakanek i masy własnego ciała. Buduje siłę użytkową, żelazną wydolność i spala setki kalorii. Wstęp wliczony w każdy karnet na siłownię.",
    image: "/images/silownia3.jpg",
    accentColor: "text-v3-lime border-v3-lime/30 bg-v3-lime/10",
    featured: true,
  },
  {
    id: "v3-step-up",
    zone: "fitness",
    title: "V3 Step Up!",
    subtitle: "Energia & Cardio",
    filterCategory: "V3 Step Up!",
    level: "Wszystkie poziomy",
    focus: "Spalanie • Nogi • Wytrzymałość",
    description:
      "Dynamiczny trening choreograficzno-wytrzymałościowy z wykorzystaniem platformy step. Skutecznie podkręca metabolizm, wzmacnia mięśnie ud i łydek oraz gwarantuje solidną dawkę endorfin.",
    image: "/images/silownia2.jpg",
    accentColor: "text-pink-400 border-pink-400/30 bg-pink-400/10",
  },
  {
    id: "booty-project",
    zone: "fitness",
    title: "Booty Project",
    subtitle: "Pośladki & Nogi",
    filterCategory: "Booty Project",
    level: "Wszystkie poziomy",
    focus: "Modelowanie • Jędrność • Siła",
    description:
      "Ukierunkowany trening dolnych partii ciała z użyciem gum oporowych mini-band, hantli i sztang. Skupiony na precyzyjnej aktywacji mięśni pośladkowych oraz wysmukleniu ud.",
    image: "/images/women-zone.jpg",
    accentColor: "text-pink-400 border-pink-400/30 bg-pink-400/10",
  },
  {
    id: "full-body-project",
    zone: "fitness",
    title: "Full Body Project",
    subtitle: "Kompleksowe Wzmocnienie",
    filterCategory: "Full Body Project",
    level: "Wszystkie poziomy",
    focus: "Całe ciało • Rzeźba • Kondycja",
    description:
      "Zbalansowany trening angażujący wszystkie główne grupy mięśniowe podczas jednej jednostki. Łączy ćwiczenia wielostawowe z elementami wytrzymałościowymi dla harmonijnej sylwetki.",
    image: "/images/silownia2.jpg",
    accentColor: "text-pink-400 border-pink-400/30 bg-pink-400/10",
  },
  {
    id: "pilates",
    zone: "fitness",
    title: "Pilates",
    subtitle: "Core & Balans",
    filterCategory: "Pilates",
    level: "Dla każdego",
    focus: "Mięśnie głębokie • Postawa • Kontrola",
    description:
      "Płynny, świadomy trening wzmacniający centrum ciała (core), poprawiający stabilizację kręgosłupa oraz elastyczność mięśni bez nadmiernego obciążania stawów.",
    image: "/images/women-zone.jpg",
    accentColor: "text-purple-400 border-purple-400/30 bg-purple-400/10",
  },
  {
    id: "joga",
    zone: "fitness",
    title: "Joga & Joga Poranna",
    subtitle: "Mobilność & Wyciszenie",
    filterCategory: "Joga",
    level: "Dla każdego",
    focus: "Oddech • Rozciąganie • Regeneracja",
    description:
      "Praktyka łącząca płynne sekwencje ruchowe (asany) z pracą nad oddechem. Redukuje napięcie mięśniowe i stres, zwiększa elastyczność całego ciała i przywraca wewnętrzną równowagę.",
    image: "/images/v3-gym-brick.jpeg",
    accentColor: "text-blue-400 border-blue-400/30 bg-blue-400/10",
  },
  {
    id: "zdrowy-kregoslup",
    zone: "fitness",
    title: "Zdrowy Kręgosłup",
    subtitle: "Profilaktyka & Ulga",
    filterCategory: "Zdrowy Kręgosłup",
    level: "Dla każdego",
    focus: "Plecy • Mobilizacja • Stabilizacja",
    description:
      "Zajęcia profilaktyczno-wzmacniające stworzone szczególnie dla osób pracujących przy biurku i kierowców. Wzmacniają gorset mięśniowy, rozluźniają spięty kark i odciążają odcinek lędźwiowy.",
    image: "/images/silownia2.jpg",
    accentColor: "text-cyan-400 border-cyan-400/30 bg-cyan-400/10",
  },
  {
    id: "zdrowe-cialo",
    zone: "fitness",
    title: "Zdrowe Ciało",
    subtitle: "Sprawność na co dzień",
    filterCategory: "Zdrowe Ciało",
    level: "Dla każdego",
    focus: "Wzmocnienie • Równowaga • Energia",
    description:
      "Ogólnorozwojowy trening w umiarkowanym tempie, którego celem jest poprawa codziennej sprawności, wzmocnienie osłabionych partii mięśniowych i bezpieczny powrót do regularnej aktywności.",
    image: "/images/silownia3.jpg",
    accentColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
  },
  {
    id: "v3-mobility",
    zone: "fitness",
    title: "V3 Mobility (45 min)",
    subtitle: "Zakresy Ruchu & Regeneracja",
    filterCategory: "V3 Mobility",
    level: "Dla każdego (także Fight Zone)",
    focus: "Stawy • Powięź • Szybsza regeneracja",
    description:
      "Skondensowana, 45-minutowa sesja ukierunkowana na otwieranie bioder, obręczy barkowej i poprawę zakresu ruchu w stawach. Doskonałe uzupełnienie treningu siłowego oraz sportów walki.",
    image: "/images/fight1.png",
    accentColor: "text-amber-400 border-amber-400/30 bg-amber-400/10",
  },
];
