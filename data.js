window.TRIP_DATA = {
  meta: {
    title: "Turcja - Stambuł 2026",
    start: "2026-07-24T16:50:00+02:00",
    end: "2026-07-27T23:10:00+02:00",
    travelers: "4 dorosłych (2 pary)",
    budgetLimit: 8000,
    history: {
      title: "Tło: Magia Stambułu",
      content: "<p>Stambuł to fascynujące miasto położone na dwóch kontynentach – Europie i Azji, rozdzielone Cieśniną Bosfor. To miejsce, gdzie spotykają się różne kultury, religie i tradycje. W jednym momencie słyszysz śpiew muezzina, a w drugim tętniącą życiem ulicę handlową.</p><p>Miasto ma niesamowitą historię – było stolicą trzech wielkich imperiów: Rzymskiego, Bizantyjskiego i Osmańskiego. Dziś to dynamiczna metropolia słynąca z wyśmienitego jedzenia, bazarów pełnych przypraw i niesamowitej gościnności mieszkańców.</p>"
    }
  },
  route: [
    { code: "GDN", city: "Gdańsk", date: "24.07", time: "wylot 16:50", duration: "lot 2h 45m", status: "confirmed" },
    { code: "IST", city: "Stambuł", date: "24.07", time: "przylot 20:35", duration: "", status: "confirmed" },
    { code: "IST", city: "Stambuł", date: "27.07", time: "wylot 21:25", duration: "lot 2h 45m", status: "confirmed" },
    { code: "GDN", city: "Gdańsk", date: "27.07", time: "przylot 23:10", duration: "", status: "confirmed" }
  ],
  flights: [
    { date: "24.07", route: "GDN → IST", number: "LOT LO 2301", time: "16:50–20:35", status: "confirmed" },
    { date: "27.07", route: "IST → GDN", number: "LOT LO 2302", time: "21:25–23:10", status: "confirmed" }
  ],
  returnTrain: {
    date: "27.07",
    route: "Gdańsk Lotnisko → Dom",
    recommended: "Około 23:30 (TAXI lub Uber)",
    alternative: "Autobus nocny lub PKM",
    rejected: "",
    status: "planned",
    note: "Późny przylot, najlepiej zorganizować odbiór z lotniska lub wziąć taksówkę."
  },
  travelProtection: [
    { title: "Ubezpieczenie Podróżne", detail: "Sprawdzić oferty z ochroną na wypadek problemów żołądkowych i odwołanego lotu.", icon: "🛡️" },
    { title: "Karta wielowalutowa", detail: "Revolut sprawdza się świetnie, ale warto mieć też trochę gotówki (liry tureckie) na mniejsze bazary.", icon: "💳" }
  ],
  weather: [
    { key: "istanbul", city: "Stambuł", coords: [41.0082, 28.9784], stayStart: "2026-07-24", stayEnd: "2026-07-27", seasonal: "Lipiec w Stambule jest zazwyczaj bardzo słoneczny i gorący, z temperaturami często przekraczającymi 30°C. Wieczory nad Bosforem mogą przynieść delikatną bryzę." }
  ],
  webcams: [
    { city: "Stambuł", title: "Cieśnina Bosfor", preview: "https://cdn.skylinewebcams.com/social2862.jpg", fallback: "assets/images/istanbul.webp", provider: "SkylineWebcams", url: "https://www.skylinewebcams.com/en/webcam/turkey/marmara/istanbul/istanbul.html" }
  ],
  baggage: {
    allowance: "Bagaż podręczny w LOT",
    chosenSize: "Plecak / walizka kabinowa",
    targetWeight: "Cel: lekko i wygodnie",
    warning: "Uważać na zakupy na bazarze – przyprawy, słodycze mogą ważyć!",
    bags: [
      { name: "Para 1", load: "Ubrania letnie, lekkie kurtki na wieczór", target: "8-10 kg" },
      { name: "Para 2", load: "Ubrania letnie, kosmetyczka", target: "8-10 kg" }
    ],
    checklist: [
      "Letnie, przewiewne ubrania (uwaga na ramiona i kolana przy wejściach do meczetów)",
      "Wygodne buty do chodzenia (Stambuł jest pagórkowaty)",
      "Krem z filtrem SPF, okulary przeciwsłoneczne, nakrycie głowy",
      "Leki podstawowe, plastry, elektrolity, coś na ewentualne problemy żołądkowe",
      "Powerbanki",
      "Gotówka (EUR lub USD do wymiany na miejscu) i karta Revolut"
    ]
  },
  travelApps: {
    istanbul: [
      { name: "Google Maps", purpose: "Podstawowa nawigacja", priority: "must", url: "https://maps.google.com/" },
      { name: "Trafi / Moovit", purpose: "Komunikacja miejska w Stambule", priority: "recommended", url: "https://moovitapp.com/" },
      { name: "BiTaksi / Uber", purpose: "Zamawianie taksówek (często tańsze i bezpieczniejsze niż łapanie na ulicy)", priority: "must", url: "https://www.bitaksi.com/en/" }
    ]
  },
  shopping: {
    generalNote: "Ceny na Krytym Bazarze można i TRZEBA negocjować (nawet o 50%). Bazar Egipski jest lepszy na zakup przypraw i słodyczy.",
    items: [
      { category: "Słodycze", limit: "Ile zmieścimy", examples: "Baklava, Lokum (Turkish Delight), Pismaniye", emoji: "🍬" },
      { category: "Przyprawy i herbata", limit: "Do bagażu", examples: "Zathar, sumak, herbata jabłkowa, czarna herbata turecka (çay)", emoji: "☕" },
      { category: "Pamiątki", limit: "-", examples: "Oko proroka (Nazar), wyroby ceramiczne, ręczniki hammam", emoji: "🧿" }
    ]
  },
  agenda: {
    "2026-07-24": {
      title: "Przylot i zameldowanie",
      theme: "Aklimatyzacja",
      details: "Wylot z Gdańska po południu, lądowanie w Stambule wieczorem i przejazd do hotelu.",
      transport: "Taxi / transfer z lotniska IST do Hotel Devman.",
      events: [
        { time: "16:50", type: "transport", text: "Wylot z GDN (LOT LO 2301)" },
        { time: "20:35", type: "transport", text: "Lądowanie w IST" },
        { time: "22:00", type: "activity", text: "Zameldowanie w Hotel Devman (Asmalimescit Cad No 22)", icon: "🏨", highlight: true },
        { time: "22:30", type: "meal", text: "Kolacja w okolicy hotelu (Beyoğlu / Taksim)", icon: "🍽️" }
      ]
    },
    "2026-07-25": {
      title: "Serce Starego Miasta (Sultanahmet)",
      theme: "Zabytki i historia",
      details: "Zwiedzanie najważniejszych zabytków Stambułu w dzielnicy Sultanahmet.",
      transport: "Tramwaj T1 z Karaköy / Kabataş do Sultanahmet.",
      events: [
        { time: "09:00", type: "meal", text: "Tureckie śniadanie (Kahvaltı)", icon: "🍳" },
        { time: "10:30", type: "activity", text: "Hagia Sophia", icon: "🏛️", highlight: true },
        { time: "12:30", type: "activity", text: "Błękitny Meczet (Sultanahmet Camii)", icon: "🕌", highlight: true },
        { time: "14:00", type: "meal", text: "Obiad: Tradycyjny Kebab / Köfte", icon: "🥙" },
        { time: "15:30", type: "activity", text: "Cysterna Bazyliki (Yerebatan Sarnıcı)", icon: "💧", highlight: true },
        { time: "17:00", type: "activity", text: "Spacer po Hipodromie", icon: "🚶" },
        { time: "19:00", type: "meal", text: "Kolacja z widokiem na Bosfor", icon: "🌅" }
      ]
    },
    "2026-07-26": {
      title: "Bazary i rejs po Bosforze",
      theme: "Zakupy i widoki",
      details: "Dzień zakupów, degustacji i relaksu na wodzie.",
      transport: "Pieszo, promy.",
      events: [
        { time: "09:30", type: "activity", text: "Kryty Bazar (Kapalı Çarşı) - Zakupy i negocjacje", icon: "🛍️", highlight: true },
        { time: "12:30", type: "activity", text: "Bazar Egipski (Mısır Çarşısı) - Przyprawy i słodycze", icon: "🌶️", highlight: true },
        { time: "14:00", type: "meal", text: "Balık Ekmek (kanapka z rybą) przy moście Galata", icon: "🐟", highlight: true },
        { time: "16:00", type: "activity", text: "Rejs po Bosforze (prom z Eminönü)", icon: "⛴️", highlight: true },
        { time: "19:00", type: "activity", text: "Wieczorny spacer po İstiklal Caddesi", icon: "🚶" },
        { time: "20:30", type: "meal", text: "Pożegnalna kolacja (Meze i Raki)", icon: "🥂", highlight: true }
      ]
    },
    "2026-07-27": {
      title: "Ostatnie chwile i powrót",
      theme: "Pakowanie",
      details: "Wymeldowanie z hotelu, ostatnie zakupy i wylot wieczorem.",
      transport: "Transfer z hotelu na lotnisko IST ok. 18:00.",
      events: [
        { time: "09:30", type: "meal", text: "Śniadanie", icon: "🥐" },
        { time: "11:30", type: "activity", text: "Wymeldowanie z Hotel Devman", icon: "🚪", highlight: true },
        { time: "12:00", type: "activity", text: "Czas wolny, ew. Wieża Galata", icon: "🗼" },
        { time: "18:00", type: "transport", text: "Przejazd na lotnisko IST" },
        { time: "21:25", type: "transport", text: "Wylot ze Stambułu (LOT LO 2302)" },
        { time: "23:10", type: "transport", text: "Przylot do Gdańska" }
      ]
    }
  },
  costMatrix: [
    { label: "Loty (LOT)", amount: 3500, currency: "PLN", type: "fixed", note: "Opłacone" },
    { label: "Hotel Devman", amount: 2000, currency: "PLN", type: "fixed", note: "Opłacone" },
    { label: "Wyżywienie", amount: 1500, currency: "PLN", type: "variable", note: "4 osoby x 3 dni" },
    { label: "Atrakcje i Transport lokalny", amount: 500, currency: "PLN", type: "variable", note: "Rejsy, bilety wstępu, tramwaje" },
    { label: "Kieszonkowe", amount: 500, currency: "PLN", type: "variable", note: "Zakupy na bazarach" }
  ]
};
