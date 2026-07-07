window.TRIP_DATA = {
  meta: {
    title: "Turcja - Stambuł 2026",
    start: "2026-07-24T16:50:00+02:00",
    end: "2026-07-27T23:10:00+02:00",
    travelers: "2 dorosłe osoby",
    budgetLimit: 3000,
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
  istTransfer: {
    route: "Lotnisko IST ↔ Hotel Devman (Şişhane)",
    recommended: "Metro: M11 + M2 (ok. 50 min)",
    note: "Z lotniska (IST) bierzemy fioletową linię M11 do stacji końcowej Gayrettepe. Tam przesiadka na zieloną linię M2 w kier. Yenikapı. Wysiadasz na Şişhane (blisko hotelu). Powrót na lotnisko tą samą trasą: M2 do Gayrettepe -> M11 na lotnisko.",
    alternative: "Autobus Havaist (HVIST-16) do Taksim",
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
        { time: "22:30", type: "meal", text: "Wieczorne wyjście: szybki lahmacun do ręki i zimne piwo w Robin of Sherwood bar (Kuloğlu, Sadri Alışık Sk. No:19 D:2A)", icon: "🍻", highlight: true }
      ]
    },
    "2026-07-25": {
      title: "Serce Starego Miasta (Sultanahmet)",
      theme: "Zabytki i historia",
      details: "Zwiedzanie najważniejszych zabytków Stambułu w dzielnicy Sultanahmet.",
      transport: "Tramwaj T1 z Karaköy / Kabataş do Sultanahmet.",
      events: [
        { time: "09:00", type: "meal", text: "Śniadanie w hotelu (opcjonalnie kawa na dachu Seven Hills Restaurant by nakarmić mewy)", icon: "☕", highlight: true },
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
        { time: "08:30", type: "meal", text: "Śniadanie w hotelu + świeży simit na drogę (Cihangir Tarihi Simit Fırını, Türkgücü Cd. 59/A)", icon: "🥨", highlight: true },
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
        { time: "09:30", type: "meal", text: "Ostatnie śniadanie w hotelu", icon: "🥐" },
        { time: "11:30", type: "activity", text: "Wymeldowanie z Hotel Devman", icon: "🚪", highlight: true },
        { time: "12:00", type: "activity", text: "Czas wolny, ew. Wieża Galata", icon: "🗼" },
        { time: "18:00", type: "transport", text: "Przejazd na lotnisko IST" },
        { time: "21:25", type: "transport", text: "Wylot ze Stambułu (LOT LO 2302)" },
        { time: "23:10", type: "transport", text: "Przylot do Gdańska" }
      ]
    }
  },
  localFood: [
    { name: "Şahin Lokantası", district: "Beyoğlu / Asmalı Mescit", type: "esnaf lokantası", what: "Domowe tureckie: tencere yemekleri, pilav, karnıyarık, kadınbudu köfte, sütlaç. Lunch, nie romantyczna kolacja.", order: "karnıyarık / kadınbudu köfte / pilav / sütlaç", lat: 41.0311, lon: 28.9747, maps: "https://www.google.com/maps/search/?api=1&query=Şahin%20Lokantası%20Beyoğlu%20Istanbul" },
    { name: "Lades Menemen / Lades Restaurant", district: "Beyoğlu / Istiklal boczna ulica", type: "śniadanie, menemen, lokanta", what: "Proste śniadanie, menemen, jajka z sucuk albo kavurma, bal-kaymak. Lokalny klasyk w środku Beyoğlu.", order: "menemen z sucuk albo peynir + çay", lat: 41.0334, lon: 28.982, maps: "https://www.google.com/maps/search/?api=1&query=Lades%20Menemen%20Beyoğlu%20Istanbul" },
    { name: "Hayvore", district: "Beyoğlu", type: "kuchnia czarnomorska", what: "Domowa kuchnia regionu Morza Czarnego: hamsi, kukurydziany chleb, fasola, sarma. Dobre, gdy chcesz coś mniej kebabowego.", order: "hamsili pilav / kuru fasulye / mısır ekmeği / kuymak", lat: 41.0327, lon: 28.9807, maps: "https://www.google.com/maps/search/?api=1&query=Hayvore%20Beyoğlu%20Istanbul" },
    { name: "Hocapaşa Pidecisi", district: "Sirkeci / Hocapaşa", type: "pide", what: "Mały, stary pideci. Dobra przerwa między Eminönü, Sirkeci i bazarem, bez nadęcia.", order: "kavurmalı pide albo yumurtalı pide + ayran", lat: 41.0145, lon: 28.9769, maps: "https://www.google.com/maps/search/?api=1&query=Hocapaşa%20Pidecisi%20Istanbul" },
    { name: "Meşhur Filibe Köftecisi", district: "Sirkeci / Hocapaşa", type: "köfte", what: "Wąskie menu i długa historia. Miejsce na szybkie köfte, piyaz i coś słodkiego.", order: "köfte + piyaz + revani", lat: 41.0142, lon: 28.9766, maps: "https://www.google.com/maps/search/?api=1&query=Meşhur%20Filibe%20Köftecisi%20Istanbul" },
    { name: "Siirt Şeref Büryan Kebap Salonu", district: "Fatih / Kadınlar Pazarı", type: "büryan, Siirt", what: "Jagnięcina z tandıra, okolica przy akwedukcie. Bardziej lokalnie niż elegancko.", order: "büryan + perde pilavı + ayran", lat: 41.0194, lon: 28.9498, maps: "https://www.google.com/maps/search/?api=1&query=Siirt%20Şeref%20Büryan%20Kebap%20Salonu%20Istanbul" },
    { name: "Öz Kilis Kebap & Lahmacun", district: "Fatih", type: "lahmacun, kebap, Kilis", what: "Stare, proste, mięsne. Dobre na lahmacun, küșleme/szaszłyki i klimat Fatih.", order: "lahmacun + küșleme / kebap + ayran", lat: 41.0169, lon: 28.9482, maps: "https://www.google.com/maps/search/?api=1&query=Öz%20Kilis%20Kebap%20Lahmacun%20Fatih%20Istanbul" },
    { name: "Tarihi Karadeniz Döner", district: "Beşiktaş", type: "döner", what: "Nie jest tajne, ale to klasyk Beşiktaş. Idź w porze lunchu; kolejka znaczy, że mięso schodzi szybko.", order: "tombik döner albo dürüm döner", lat: 41.0436, lon: 29.0052, maps: "https://www.google.com/maps/search/?api=1&query=Tarihi%20Karadeniz%20Döner%20Beşiktaş%20Istanbul" },
    { name: "Halil Lahmacun", district: "Kadıköy", type: "lahmacun, pide", what: "Azjatycka strona, cienki chrupiący lahmacun. Bardzo dobry szybki lunch w Kadıköy.", order: "lahmacun + ayran; ewentualnie pide", lat: 40.989, lon: 29.0256, maps: "https://www.google.com/maps/search/?api=1&query=Halil%20Lahmacun%20Kadıköy%20Istanbul" },
    { name: "Borsam Taşfırın", district: "Kadıköy", type: "lahmacun z pieca", what: "Prosty piecowy adres w Kadıköy. Dobry, gdy robisz jedzeniowy spacer po rynku.", order: "spicy lahmacun + ayran", lat: 40.9891, lon: 29.025, maps: "https://www.google.com/maps/search/?api=1&query=Borsam%20Taşfırın%20Kadıköy%20Istanbul" },
    { name: "Yanyalı Fehmi Lokantası", district: "Kadıköy Çarşı", type: "lokanta, kuchnia osmańska/domowa", what: "Stara lokanta w Kadıköy, dobra na normalny obiad z tacą i wyborem z dań.", order: "pilav / iç pilav / çorba / dania z bakłażana", lat: 40.9894, lon: 29.0247, maps: "https://www.google.com/maps/search/?api=1&query=Yanyalı%20Fehmi%20Lokantası%20Kadıköy%20Istanbul" },
    { name: "Çiya Sofrası", district: "Kadıköy Çarşı", type: "regionalna Anatolia", what: "Nie najtańsze, ale warte jednego posiłku: kuchnia z różnych regionów Anatolii, dużo rzeczy których nie znasz z kebabowni.", order: "weź 2-3 małe dania z lady, zapytaj o sezonowe", lat: 40.9894, lon: 29.026, maps: "https://www.google.com/maps/search/?api=1&query=Çiya%20Sofrası%20Kadıköy%20Istanbul" },
    { name: "Kanaat Lokantası", district: "Üsküdar", type: "klasyczna lokanta", what: "Stara szkoła po azjatyckiej stronie. Dobry punkt po promie do Üsküdar.", order: "dania z lady + deser mleczny", lat: 41.0255, lon: 29.0152, maps: "https://www.google.com/maps/search/?api=1&query=Kanaat%20Lokantası%20Üsküdar%20Istanbul" },
    { name: "Çamlıca Sosyal Tesisleri", district: "Üsküdar / Çamlıca", type: "herbata, widok, taniej niż rooftop", what: "Miejskie tesisy: jedzenie i herbata z widokiem, nie luksusowy rooftop. Dobre na odpoczynek po azjatyckiej stronie.", order: "çay / kawa / prosty obiad / deser mleczny", lat: 41.0279, lon: 29.0722, maps: "https://www.google.com/maps/search/?api=1&query=Çamlıca%20Sosyal%20Tesisleri%20Istanbul" },
    { name: "Salacak Sahili", district: "Üsküdar / Salacak", type: "herbata, zachód słońca", what: "Nie przychodzisz tu dla kuchni, tylko dla çay, simit i widoku na starą panoramę Stambułu.", order: "çay + simit / coś prostego", lat: 41.0215, lon: 29.004, maps: "https://www.google.com/maps/search/?api=1&query=Salacak%20Sahili%20çay%20Kız%20Kulesi%20Istanbul" }
  ],
  partySpots: [
    { name: "Kadife Sokak (Bar Street)", url: "https://maps.app.goo.gl/kadife", type: "Zaułek pubowy", description: "Ulica wypełniona barami obok siebie, super klimat na luzie.", location: "Kadıköy (Azja)" },
    { name: "Dorock XL", url: "https://maps.app.goo.gl/dorock", type: "Rock Bar & Koncerty", description: "Ogromny, bardzo popularny pub z muzyką rockową.", location: "Kadıköy (Azja)" },
    { name: "Nevizade Sokak", url: "https://maps.app.goo.gl/nevizade", type: "Tureckie Meyhane", description: "Ciasna ulica, stoliki na zewnątrz, dużo Raki i gwarnych rozmów.", location: "Beyoğlu (Europa)" },
    { name: "Karaköy (Okolice Galataport)", url: "https://maps.app.goo.gl/karakoy", type: "Trendy koktajle", description: "Nowoczesne bary i lekko hipsterski klimat nad wodą.", location: "Karaköy (Europa)" }
  ],
  hiddenGems: [
    { n: "Fener i Balat – boczne ulice", c: [41.0323, 28.9489], tag: "kolorowe domy / stare dzielnice", note: "Najlepiej iść rano albo przed zachodem; nie tylko słynne schody, ale boczne zaułki.", q: "Fener Balat Istanbul" },
    { n: "Patriarchat Grecki w Fener", c: [41.0297, 28.9512], tag: "żywa historia", note: "Ciche, ważne miejsce chrześcijańskiego Stambułu; blisko Balatu.", q: "Ecumenical Patriarchate of Constantinople Fener Istanbul" },
    { n: "Kariye Camii / dawna Chora", c: [41.0317, 28.9394], tag: "mozaiki i freski", note: "Jedno z najmocniejszych miejsc sztuki bizantyjskiej; sprawdź aktualne zasady zwiedzania.", q: "Kariye Camii Chora Istanbul" },
    { n: "Mury Teodozjusza przy Edirnekapı", c: [41.0323, 28.9348], tag: "miasto-obrona", note: "Tu czuć Konstantynopol bez muzealnej gabloty; świetne połączenie z Kariye.", q: "Theodosian Walls Edirnekapi Istanbul" },
    { n: "Mihrimah Sultan Camii, Edirnekapı", c: [41.0319, 28.9360], tag: "Sinan / wzgórze", note: "Wysoko przy murach, piękna architektura i mniej ludzi niż w centrum.", q: "Mihrimah Sultan Mosque Edirnekapi Istanbul" },
    { n: "Yedikule Fortress", c: [40.9931, 28.9235], tag: "twierdza / siedem wież", note: "Mocne, surowe miejsce przy dawnych murach; sprawdź dni otwarcia.", q: "Yedikule Fortress Istanbul" },
    { n: "Zeyrek Camii / dawny Pantokrator", c: [41.0195, 28.9570], tag: "Bizancjum w ciszy", note: "Mało kto tu trafia, a to jeden z ważnych śladów bizantyjskiego miasta.", q: "Zeyrek Mosque Istanbul" },
    { n: "Akwedukt Walensa", c: [41.0162, 28.9558], tag: "rzymska skala miasta", note: "Dobry punkt przejścia między Zeyrek i Süleymaniye.", q: "Valens Aqueduct Istanbul" },
    { n: "Tarasy przy Süleymaniye", c: [41.0163, 28.9637], tag: "widok na Złoty Róg", note: "Nie sam meczet, tylko tarasy i uliczki z widokiem – złota godzina robi robotę.", q: "Suleymaniye Mosque terrace Istanbul" },
    { n: "Rüstem Paşa Camii", c: [41.0167, 28.9683], tag: "ukryte izniki", note: "Mały, schowany nad sklepikami meczet z fantastycznymi kaflami.", q: "Rustem Pasha Mosque Istanbul" },
    { n: "Büyük Valide Han", c: [41.0129, 28.9690], tag: "karawanseraj / dachy", note: "Wejdź tylko tam, gdzie jest normalnie dostępne; dachy bywają zamykane.", q: "Buyuk Valide Han Istanbul" },
    { n: "Şerefiye / Cysterna Teodozjusza", c: [41.0083, 28.9743], tag: "podziemny Stambuł", note: "Mniejsza niż Basilica Cistern, ale bardziej kameralna i bardzo fotogeniczna.", q: "Theodosius Cistern Serefiye Sarnici Istanbul" },
    { n: "Galata Mevlevihanesi", c: [41.0276, 28.9748], tag: "derwisze / sufizm", note: "Tu lepiej słuchać niż odhaczać; sprawdź, czy jest pokaz sema.", q: "Galata Mevlevi Lodge Museum Istanbul" },
    { n: "Kuzguncuk", c: [41.0377, 29.0293], tag: "azjatycka wioska w mieście", note: "Kolorowe domy, kawiarnie, Bosfor obok; spokojniejsza alternatywa dla Balatu.", q: "Kuzguncuk Istanbul" },
    { n: "Salacak – widok na Kız Kulesi", c: [41.0218, 29.0043], tag: "zachód słońca", note: "Przy dobrej pogodzie widok na starą panoramę Stambułu jest bajeczny.", q: "Salacak Sahili Kiz Kulesi Istanbul" },
    { n: "Çamlıca Tower / wzgórze Çamlıca", c: [41.0318, 29.0698], tag: "panorama 360°", note: "Nowoczesny punkt widokowy; najlepszy przy czystym powietrzu.", q: "Camlica Tower Istanbul" },
    { n: "Yoros Castle, Anadolu Kavağı", c: [41.1790, 29.0947], tag: "koniec Bosforu", note: "Wyprawa promem; Bosfor zaczyna wyglądać jak cieśnina na końcu świata.", q: "Yoros Castle Anadolu Kavagi Istanbul" }
  ],
  costMatrix: [
    { label: "Loty (LOT)", amount: 996, currency: "PLN", type: "fixed", note: "Opłacone (498 zł x 2 os.)" },
    { label: "Hotel Devman", amount: 684, currency: "PLN", type: "fixed", note: "Opłacone (159 EUR x ~4.3 PLN)" },
    { label: "Wyżywienie", amount: 600, currency: "PLN", type: "variable", note: "Szybkie lokalne przekąski i obiady (śniadania w hotelu)" },
    { label: "Atrakcje i Transport", amount: 400, currency: "PLN", type: "variable", note: "Metro, promy, karty wstępu" },
    { label: "Kieszonkowe / Zakupy", amount: 320, currency: "PLN", type: "variable", note: "Bazar, przyprawy, pamiątki" }
  ]
};
