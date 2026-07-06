window.TRIP_DATA = {
  meta: {
    title: "Turcja - Stambuł 2026",
    start: "2026-07-24T16:50:00+02:00",
    end: "2026-07-27T23:10:00+02:00",
    travelers: "2 dorosłe osoby",
    budgetLimit: 4000,
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
      { name: "Istanbulkart", purpose: "Doładowanie karty miejskiej i trasy metra", priority: "must", url: "https://www.istanbulkart.istanbul/" },
      { name: "Trafi / Moovit", purpose: "Komunikacja miejska w Stambule", priority: "recommended", url: "https://moovitapp.com/" },
      { name: "BiTaksi / Uber", purpose: "Zamawianie taksówek (używamy awaryjnie)", priority: "optional", url: "https://www.bitaksi.com/en/" },
      { name: "Tricount / Splid", purpose: "Wspólne rozliczenia wydatków na 4 osoby", priority: "must", url: "https://tricount.com/" }
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
      transport: "Metro (M11 z lotniska IST) lub autobus Havaist. Omijamy taxi.",
      events: [
        { time: "16:50", type: "transport", text: "Wylot z GDN (LOT LO 2301)" },
        { time: "20:35", type: "transport", text: "Lądowanie w IST" },
        { time: "22:00", type: "activity", text: "Zameldowanie w Hotel Devman (Asmalimescit Cad No 22)", icon: "🏨", highlight: true },
        { time: "22:30", type: "meal", text: "Wieczorne wyjście: Robin of Sherwood bar (Kuloğlu, Sadri Alışık Sk. No:19 D:2A)", icon: "🍻", highlight: true }
      ]
    },
    "2026-07-25": {
      title: "Serce Starego Miasta (Sultanahmet)",
      theme: "Zabytki i historia",
      details: "Zwiedzanie najważniejszych zabytków Stambułu w dzielnicy Sultanahmet.",
      transport: "Tramwaj T1 z Karaköy / Kabataş do Sultanahmet.",
      events: [
        { time: "09:00", type: "meal", text: "Śniadanie (opcjonalnie: dach Seven Hills Restaurant by nakarmić mewy!)", icon: "🐦", highlight: true },
        { time: "10:30", type: "activity", text: "<a href='https://www.guruwalk.com/walks/32639-istanbul-old-city-tour-byzantine-and-ottoman-tales' target='_blank' style='color:inherit; text-decoration:underline;'>Free Walking Tour: Byzantine & Ottoman Tales ↗</a>", icon: "🚶", highlight: true },
        { time: "13:30", type: "activity", text: "Zakończenie wycieczki (Hagia Sophia - opcjonalnie wejście do środka)", icon: "🕌" },
        { time: "14:00", type: "meal", text: "Obiad: Tradycyjny Kebab / Köfte", icon: "🥙" },
        { time: "15:30", type: "activity", text: "Cysterna Bazyliki (Yerebatan Sarnıcı - podziemia z wodą)", icon: "💧", highlight: true },
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
        { time: "08:30", type: "meal", text: "Śniadanie (Simit): Cihangir Tarihi Simit Fırını (Türkgücü Cd. 59/A)", icon: "🥨", highlight: true },
        { time: "09:30", type: "activity", text: "Kryty Bazar (Kapalı Çarşı) - Zakupy i negocjacje", icon: "🛍️", highlight: true },
        { time: "12:30", type: "activity", text: "Bazar Egipski (Mısır Çarşısı) - Przyprawy i słodycze", icon: "🌶️", highlight: true },
        { time: "14:00", type: "meal", text: "Balık Ekmek (kanapka z rybą) przy moście Galata / Eminönü", icon: "🐟", highlight: true },
        { time: "16:00", type: "transport", text: "Prom (Vapur) z Eminönü do Kadıköy (na kartę Istanbulkart)", icon: "⛴️", highlight: true },
        { time: "16:30", type: "activity", text: "Popołudnie w azjatyckim Kadıköy (dzielnica Moda)", icon: "🚶" },
        { time: "19:00", type: "meal", text: "Kolacja np. w Çiya Sofrası lub Basta!", icon: "🍽️", highlight: true },
        { time: "20:30", type: "activity", text: "Imprezowy bar-hopping: Kadife Sokak (Bar Street) w Kadıköy", icon: "🍻", highlight: true },
        { time: "23:00", type: "transport", text: "Powrót promem nocnym lub dolmuszem do Taksim", icon: "🌙" }
      ]
    },
    "2026-07-27": {
      title: "Ostatnie chwile i powrót",
      theme: "Pakowanie",
      details: "Wymeldowanie z hotelu, ostatnie zakupy i wylot wieczorem.",
      transport: "Metro lub Havaist na lotnisko IST ok. 18:00.",
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
  foodSpots: [
    { name: "Çiya Sofrası", url: "https://maps.app.goo.gl/ciya", type: "Anatolijska tradycja", description: "Kulinarna legenda w Kadıköy z wyjątkowymi potrawami.", location: "Kadıköy (Azja)" },
    { name: "Basta! Street Food", url: "https://maps.app.goo.gl/basta", type: "Gourmet Wrapy", description: "Świetne dürüm z wolno pieczonym mięsem.", location: "Kadıköy (Azja)" },
    { name: "Reks Kokoreç", url: "https://maps.app.goo.gl/reks", type: "Późne gastro", description: "Klasyczny, uliczny kokoreç - idealny po imprezie.", location: "Kadıköy (Azja)" },
    { name: "Hafiz Mustafa 1864", url: "https://maps.app.goo.gl/hafiz", type: "Słodycze / Desery", description: "Najlepsza baklava, idealna na mały postój w centrum.", location: "Beyoğlu / Sultanahmet" }
  ],
  partySpots: [
    { name: "Kadife Sokak (Bar Street)", url: "https://maps.app.goo.gl/kadife", type: "Zaułek pubowy", description: "Ulica wypełniona barami obok siebie, super klimat na luzie.", location: "Kadıköy (Azja)" },
    { name: "Dorock XL", url: "https://maps.app.goo.gl/dorock", type: "Rock Bar & Koncerty", description: "Ogromny, bardzo popularny pub z muzyką rockową.", location: "Kadıköy (Azja)" },
    { name: "Nevizade Sokak", url: "https://maps.app.goo.gl/nevizade", type: "Tureckie Meyhane", description: "Ciasna ulica, stoliki na zewnątrz, dużo Raki i gwarnych rozmów.", location: "Beyoğlu (Europa)" },
    { name: "Karaköy (Okolice Galataport)", url: "https://maps.app.goo.gl/karakoy", type: "Trendy koktajle", description: "Nowoczesne bary i lekko hipsterski klimat nad wodą.", location: "Karaköy (Europa)" }
  ],
  costMatrix: [
    { label: "Loty (LOT)", amount: 1992, currency: "PLN", type: "fixed", note: "Opłacone (498 zł / os.)" },
    { label: "Hotel Devman", amount: 1367, currency: "PLN", type: "fixed", note: "Opłacone (318 EUR)" },
    { label: "Wyżywienie", amount: 1500, currency: "PLN", type: "variable", note: "Mix budżetowo/średnio" },
    { label: "Atrakcje i Transport", amount: 1200, currency: "PLN", type: "variable", note: "Rejs, bilety, taksówki" },
    { label: "Kieszonkowe / Zakupy", amount: 1308, currency: "PLN", type: "variable", note: "Bazar, pamiątki, przyprawy" }
  ]
};
