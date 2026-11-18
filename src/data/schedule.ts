export interface ScheduleClass {
  time: string;
  name: string;
  category: string;
  badge: string;
  badgeColor: string;
}

export interface ScheduleDay {
  day: string;
  shortDay: string;
  count: string;
  classes: ScheduleClass[];
}

export const FIGHT_SCHEDULE: ScheduleDay[] = [
  {
    day: "Poniedziałek",
    shortDay: "Pon",
    count: "5 treningów",
    classes: [
      {
        time: "16:00 – 16:45",
        name: "Kickboxing Kids (4–6 lat)",
        category: "Kickboxing",
        badge: "Dzieci",
        badgeColor: "text-amber-400 border-amber-400/30 bg-amber-400/10",
      },
      {
        time: "17:00 – 17:45",
        name: "Kickboxing Start (7–10 lat)",
        category: "Kickboxing",
        badge: "Dzieci",
        badgeColor: "text-amber-400 border-amber-400/30 bg-amber-400/10",
      },
      {
        time: "17:45 – 18:45",
        name: "Kickboxing Junior (14–18 lat)",
        category: "Kickboxing",
        badge: "Młodzież",
        badgeColor: "text-blue-400 border-blue-400/30 bg-blue-400/10",
      },
      {
        time: "18:45 – 20:00",
        name: "Kickboxing Fight Team",
        category: "Kickboxing",
        badge: "Kadra",
        badgeColor: "text-v3-red border-v3-red/30 bg-v3-red/10",
      },
      {
        time: "20:00 – 21:15",
        name: "Kickboxing Dorośli",
        category: "Kickboxing",
        badge: "Open",
        badgeColor: "text-zinc-300 border-zinc-600 bg-zinc-800/40",
      },
    ],
  },
  {
    day: "Wtorek",
    shortDay: "Wt",
    count: "4 treningi",
    classes: [
      {
        time: "16:00 – 17:00",
        name: "Kickboxing Kadet (10–13 lat)",
        category: "Kickboxing",
        badge: "Młodzież",
        badgeColor: "text-blue-400 border-blue-400/30 bg-blue-400/10",
      },
      {
        time: "17:00 – 19:00",
        name: "SSW Cobra Ju-Jitsu",
        category: "SSW Cobra Ju-Jitsu",
        badge: "120 min",
        badgeColor: "text-purple-400 border-purple-400/30 bg-purple-400/10",
      },
      {
        time: "19:00 – 20:15",
        name: "Boks",
        category: "Boks",
        badge: "Stójka",
        badgeColor: "text-v3-red border-v3-red/30 bg-v3-red/10",
      },
      {
        time: "20:15 – 21:15",
        name: "Samoobrona / Krav Maga",
        category: "Samoobrona / Krav Maga",
        badge: "Obrona",
        badgeColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
      },
    ],
  },
  {
    day: "Środa",
    shortDay: "Śr",
    count: "5 treningów",
    classes: [
      {
        time: "16:00 – 16:45",
        name: "Kickboxing Kids (4–6 lat)",
        category: "Kickboxing",
        badge: "Dzieci",
        badgeColor: "text-amber-400 border-amber-400/30 bg-amber-400/10",
      },
      {
        time: "17:00 – 17:45",
        name: "Kickboxing Start (7–10 lat)",
        category: "Kickboxing",
        badge: "Dzieci",
        badgeColor: "text-amber-400 border-amber-400/30 bg-amber-400/10",
      },
      {
        time: "17:45 – 18:45",
        name: "Kickboxing Junior (14–18 lat)",
        category: "Kickboxing",
        badge: "Młodzież",
        badgeColor: "text-blue-400 border-blue-400/30 bg-blue-400/10",
      },
      {
        time: "18:45 – 20:00",
        name: "Kickboxing Fight Team",
        category: "Kickboxing",
        badge: "Kadra",
        badgeColor: "text-v3-red border-v3-red/30 bg-v3-red/10",
      },
      {
        time: "20:00 – 21:15",
        name: "Kickboxing Dorośli",
        category: "Kickboxing",
        badge: "Open",
        badgeColor: "text-zinc-300 border-zinc-600 bg-zinc-800/40",
      },
    ],
  },
  {
    day: "Czwartek",
    shortDay: "Czw",
    count: "5 treningów",
    classes: [
      {
        time: "16:00 – 17:00",
        name: "Kickboxing Kadet (10–13 lat)",
        category: "Kickboxing",
        badge: "Młodzież",
        badgeColor: "text-blue-400 border-blue-400/30 bg-blue-400/10",
      },
      {
        time: "17:00 – 19:00",
        name: "SSW Cobra Ju-Jitsu",
        category: "SSW Cobra Ju-Jitsu",
        badge: "120 min",
        badgeColor: "text-purple-400 border-purple-400/30 bg-purple-400/10",
      },
      {
        time: "18:00 – 19:00",
        name: "Kickboxing dla początkujących",
        category: "Kickboxing dla początkujących",
        badge: "Dla nowych",
        badgeColor: "text-lime-400 border-lime-400/30 bg-lime-400/10",
      },
      {
        time: "19:00 – 20:15",
        name: "Boks",
        category: "Boks",
        badge: "Stójka",
        badgeColor: "text-v3-red border-v3-red/30 bg-v3-red/10",
      },
      {
        time: "20:15 – 21:15",
        name: "Samoobrona / Krav Maga",
        category: "Samoobrona / Krav Maga",
        badge: "Obrona",
        badgeColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
      },
    ],
  },
  {
    day: "Piątek",
    shortDay: "Pt",
    count: "2 treningi",
    classes: [
      {
        time: "18:30 – 20:00",
        name: "Kickboxing Fight Team (Sparingi)",
        category: "Kickboxing",
        badge: "Sparingi",
        badgeColor: "text-v3-red border-v3-red/30 bg-v3-red/10",
      },
      {
        time: "20:00 – 21:00",
        name: "MMA",
        category: "MMA",
        badge: "Mata",
        badgeColor: "text-cyan-400 border-cyan-400/30 bg-cyan-400/10",
      },
    ],
  },
  {
    day: "Sobota",
    shortDay: "Sob",
    count: "1 trening",
    classes: [
      {
        time: "12:00 – 13:00",
        name: "MMA",
        category: "MMA",
        badge: "Mata & Ring",
        badgeColor: "text-cyan-400 border-cyan-400/30 bg-cyan-400/10",
      },
    ],
  },
];

export const FITNESS_SCHEDULE: ScheduleDay[] = [
  {
    day: "Poniedziałek",
    shortDay: "Pon",
    count: "3 zajęcia",
    classes: [
      {
        time: "18:00 – 19:00",
        name: "V3 Stretch&Flow",
        category: "V3 Stretch & Flow",
        badge: "Stretching",
        badgeColor: "text-sky-400 border-sky-400/30 bg-sky-400/10",
      },
      {
        time: "19:00 – 20:00",
        name: "V3 Step Up!",
        category: "V3 Step Up!",
        badge: "Cardio",
        badgeColor: "text-pink-400 border-pink-400/30 bg-pink-400/10",
      },
      {
        time: "20:00 – 21:00",
        name: "Pilates",
        category: "Pilates",
        badge: "Core & Balans",
        badgeColor: "text-purple-400 border-purple-400/30 bg-purple-400/10",
      },
    ],
  },
  {
    day: "Wtorek",
    shortDay: "Wt",
    count: "5 zajęć",
    classes: [
      {
        time: "18:15 – 19:15",
        name: "Zdrowe Ciało",
        category: "Zdrowe Ciało",
        badge: "Wzmocnienie",
        badgeColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
      },
      {
        time: "18:15 – 19:15",
        name: "Joga",
        category: "Joga",
        badge: "Mobilność",
        badgeColor: "text-blue-400 border-blue-400/30 bg-blue-400/10",
      },
      {
        time: "19:15 – 20:15",
        name: "Joga",
        category: "Joga",
        badge: "Mobilność",
        badgeColor: "text-blue-400 border-blue-400/30 bg-blue-400/10",
      },
      {
        time: "19:15 – 20:15",
        name: "Booty Project",
        category: "Booty Project",
        badge: "Pośladki & Nogi",
        badgeColor: "text-pink-400 border-pink-400/30 bg-pink-400/10",
      },
      {
        time: "20:15 – 21:00",
        name: "Zumba (45 min)",
        category: "Zumba",
        badge: "Dance • 45 min",
        badgeColor: "text-amber-400 border-amber-400/30 bg-amber-400/10",
      },
    ],
  },
  {
    day: "Środa",
    shortDay: "Śr",
    count: "2 zajęcia",
    classes: [
      {
        time: "19:00 – 20:00",
        name: "V3 Step Up!",
        category: "V3 Step Up!",
        badge: "Cardio",
        badgeColor: "text-pink-400 border-pink-400/30 bg-pink-400/10",
      },
      {
        time: "20:00 – 21:00",
        name: "Pilates",
        category: "Pilates",
        badge: "Core & Balans",
        badgeColor: "text-purple-400 border-purple-400/30 bg-purple-400/10",
      },
    ],
  },
  {
    day: "Czwartek",
    shortDay: "Czw",
    count: "4 zajęcia",
    classes: [
      {
        time: "17:15 – 18:15",
        name: "Zdrowy Kręgosłup",
        category: "Zdrowy Kręgosłup",
        badge: "Zdrowie",
        badgeColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
      },
      {
        time: "18:15 – 19:15",
        name: "Zdrowy Kręgosłup",
        category: "Zdrowy Kręgosłup",
        badge: "Zdrowie",
        badgeColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
      },
      {
        time: "19:15 – 20:15",
        name: "Joga",
        category: "Joga",
        badge: "Mobilność",
        badgeColor: "text-blue-400 border-blue-400/30 bg-blue-400/10",
      },
      {
        time: "19:15 – 20:15",
        name: "Full Body Project",
        category: "Full Body Project",
        badge: "Całe Ciało",
        badgeColor: "text-v3-lime border-v3-lime/30 bg-v3-lime/10",
      },
    ],
  },
  {
    day: "Piątek",
    shortDay: "Pt",
    count: "4 zajęcia",
    classes: [
      {
        time: "18:00 – 18:30",
        name: "V3 Stretching (30 min • Fight Zone)",
        category: "V3 Stretch & Flow",
        badge: "30 min",
        badgeColor: "text-sky-400 border-sky-400/30 bg-sky-400/10",
      },
      {
        time: "18:00 – 19:00",
        name: "Pilates",
        category: "Pilates",
        badge: "Core & Balans",
        badgeColor: "text-purple-400 border-purple-400/30 bg-purple-400/10",
      },
      {
        time: "19:00 – 20:00",
        name: "V3 Step Up!",
        category: "V3 Step Up!",
        badge: "Cardio",
        badgeColor: "text-pink-400 border-pink-400/30 bg-pink-400/10",
      },
      {
        time: "20:15 – 21:00",
        name: "Zumba (45 min)",
        category: "Zumba",
        badge: "Dance • 45 min",
        badgeColor: "text-amber-400 border-amber-400/30 bg-amber-400/10",
      },
    ],
  },
  {
    day: "Sobota",
    shortDay: "Sob",
    count: "2 zajęcia",
    classes: [
      {
        time: "08:30 – 09:30",
        name: "Joga",
        category: "Joga",
        badge: "Balans",
        badgeColor: "text-blue-400 border-blue-400/30 bg-blue-400/10",
      },
      {
        time: "09:30 – 10:30",
        name: "Zdrowy Kręgosłup",
        category: "Zdrowy Kręgosłup",
        badge: "Zdrowie",
        badgeColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
      },
    ],
  },
];
