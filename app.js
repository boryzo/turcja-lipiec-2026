(function () {
  "use strict";
  const data = window.TRIP_DATA;
  const money = new Intl.NumberFormat("pl-PL", { style: "currency", currency: "PLN" });
  const statusLabels = { paid: "opłacone", reserved: "rezerwacja", planned: "do kupienia", decision: "decyzja", confirmed: "potwierdzone" };

  const sum = items => items.reduce((total, item) => total + item.amount, 0);
  const fixedTotal = sum(data.costMatrix.filter(c => c.type === 'fixed'));
  const variableTotal = sum(data.costMatrix.filter(c => c.type === 'variable'));
  const forecastTotal = fixedTotal + variableTotal;
  const remaining = data.meta.budgetLimit - forecastTotal;

  function routeMarkup() {
    return `<div class="card route-card"><div class="route">${data.route.map(stop => `
      <div class="route-stop ${stop.status}">
        <span class="route-dot">${stop.code}</span><b>${stop.city}</b><small>${stop.date}</small>
        ${stop.time ? `<small style="color:var(--text-muted); display:block; margin-top:2px;">${stop.time}</small>` : ""}
        ${stop.duration ? `<small style="color:var(--accent); display:block;">${stop.duration}</small>` : ""}
      </div>`).join("")}</div></div>`;
  }

  function renderOverview() {
    document.querySelector("#view-overview").innerHTML = `
      <div class="section-head"><div><span class="section-label">Plan w skrócie</span><h2>Cała podróż na jednej osi</h2><p>${data.meta.travelers} · 4 dni · 3 noce</p></div></div>
      <div class="grid grid-4">
        <article class="card stat-card"><span class="stat-icon">✈️</span><strong>2 loty</strong><p>Gdańsk ↔ Stambuł LOT</p></article>
        <article class="card stat-card"><span class="stat-icon">🏠</span><strong>Hotel Devman</strong><p>3 noce</p></article>
        <article class="card stat-card"><span class="stat-icon">🎯</span><strong>${money.format(forecastTotal)}</strong><p>Szacunkowy budżet wyjazdu</p></article>
        <article class="card stat-card"><span class="stat-icon">🧳</span><strong>Bagaż kab.</strong><p>Tylko podręczny, lekko</p></article>
      </div>
      ${routeMarkup()}
      
      <div class="section-head" style="margin-top:50px"><div><span class="section-label">Nocleg</span><h2>Nasza baza wypadowa</h2></div></div>
      <div class="grid grid-1">
        <article class="card hotel-card" style="display:flex; flex-direction:row; align-items:center; gap:20px;">
          <div style="flex:1;">
            <span class="section-label">24-27 Lipca · 3 noce</span>
            <h3>Hotel Devman</h3>
            <p>Asmalimescit Cad No 22, Stambuł</p>
            <div class="hotel-links" style="margin-top:20px;">
              <a href="https://maps.google.com/?q=Hotel+Devman+Istanbul" target="_blank" rel="noopener">Mapa ↗</a>
            </div>
          </div>
        </article>
      </div>
      
      <div class="section-head" style="margin-top:50px"><div><span class="section-label">Ostatni dzień</span><h2>Powrót do domu</h2></div></div>
      <div class="grid grid-2">
        <article class="card train-card"><span class="stat-icon">✈️</span><div><span class="section-label">${data.returnTrain.date} · ${data.returnTrain.route}</span><h3>${data.returnTrain.recommended}</h3><p>${data.returnTrain.note}</p><small>Alternatywa: ${data.returnTrain.alternative}</small></div></article>
        <article class="card"><span class="section-label">Bezpieczeństwo</span><h3>Ubezpieczenia i Kasa</h3><div class="protection-list">${data.travelProtection.map(item => `<div class="protection-item"><span>${item.icon}</span><div><strong>${item.title}</strong><p>${item.detail}</p></div></div>`).join("")}</div></article>
      </div>`;
  }

  function renderIstanbul() {
    document.querySelector("#view-istanbul").innerHTML = `
      <article class="destination-hero">
        <div style="background:var(--accent); height:200px; border-radius:20px; display:flex; align-items:center; justify-content:center; color:#fff; font-size:2rem; font-family:'Playfair Display',serif;">Stambuł</div>
        <div class="destination-copy" style="margin-top:-30px; position:relative; z-index:2; background:var(--card-bg); padding:30px; border-radius:20px;">
            <span class="section-label" style="color:var(--accent)">Turcja</span>
            <h2>Magia Orientu</h2>
            <p>Zderzenie Europy i Azji, niesamowite jedzenie i zachwycające zabytki.</p>
            <span class="destination-meta">24-27 Lipca 2026</span>
            <button class="pill history-btn" data-history="istanbul" style="margin-top:12px; background:rgba(255,255,255,0.2); color:#fff; border:1px solid rgba(255,255,255,0.4); cursor:pointer">📖 Poznaj tło historyczne</button>
        </div>
      </article>

      <div class="section-head" style="margin-top:48px"><div><span class="section-label">Dzień po dniu</span><h2>Agenda pobytu</h2></div></div>
      <div class="timeline">${Object.entries(data.agenda).map(([date, day], idx) => `
        <article class="day ${day.details ? "clickable" : ""}" data-city="istanbul" data-day="${date}" ${day.details ? 'tabindex="0" role="button" aria-label="Zobacz szczegóły dnia"' : ''}>
          <div class="day-date"><b>${date.split('-')[2]}.${date.split('-')[1]}</b><span>Dzień ${idx + 1}</span></div><span class="day-dot"></span>
          <div class="day-body"><h3>${day.title}</h3><p>${day.details}</p><div class="day-tags"><span class="pill">${day.theme}</span></div></div>
        </article>`).join("")}</div>
        
      <div class="section-head" style="margin-top:48px"><div><span class="section-label">Gastronomia (Budżet & Średnia półka)</span><h2>Jedzenie i Restauracje</h2><p>Nasze topowe typy na azjatyckiej stronie (i nie tylko).</p></div></div>
      <div class="grid grid-2">
        ${data.foodSpots.map(place => `
        <article class="card">
          <span class="section-label" style="display:block; margin-bottom:5px;">${place.location}</span>
          <h3>${place.name}</h3>
          <small style="color:var(--accent); font-weight:bold; display:block; margin-bottom:10px;">${place.type}</small>
          <p style="font-size: 14px; color: var(--text-muted);">${place.description}</p>
        </article>`).join("")}
      </div>

      <div class="section-head" style="margin-top:48px"><div><span class="section-label">Życie Nocne</span><h2>Imprezy i Bary</h2><p>Gdzie wyskoczyć wieczorem (lokalnie i bardziej trendy).</p></div></div>
      <div class="grid grid-2">
        ${data.partySpots.map(place => `
        <article class="card">
          <span class="section-label" style="display:block; margin-bottom:5px;">${place.location}</span>
          <h3>${place.name}</h3>
          <small style="color:var(--accent); font-weight:bold; display:block; margin-bottom:10px;">${place.type}</small>
          <p style="font-size: 14px; color: var(--text-muted);">${place.description}</p>
        </article>`).join("")}
      </div>

      <div class="section-head" style="margin-top:48px"><div><span class="section-label">Zakupy</span><h2>Bazarowe szaleństwo</h2><p>${data.shopping.generalNote}</p></div></div>
      <div class="grid grid-3">
        ${data.shopping.items.map(place => `
        <article class="card">
          <span style="font-size:2rem; margin-bottom:10px; display:block;">${place.emoji}</span>
          <h3>${place.category}</h3>
          <p style="margin-top: 10px; font-size: 14px; color: var(--text-muted);">${place.examples}</p>
          <small style="display:block; margin-top:10px; color:var(--accent);">Limit: ${place.limit}</small>
        </article>`).join("")}
      </div>`;
  }

  function renderBudget() {
    const usedPercent = Math.min(100, forecastTotal / data.meta.budgetLimit * 100);
    document.querySelector("#view-budget").innerHTML = `
      <article class="card budget-hero">
        <div class="budget-summary"><span class="section-label">Limit wyjazdu (4 os.)</span><h2>${money.format(data.meta.budgetLimit)}</h2><p>Prognoza obejmuje loty, hotel i wydatki na miejscu (w tym rezerwa na zakupy).</p><div class="budget-meter ${remaining < 0 ? "over" : ""}"><span style="width:${usedPercent}%"></span></div><div class="budget-numbers"><span>Prognoza: ${money.format(forecastTotal)}</span><span>Zapas: ${money.format(remaining)}</span></div></div>
        
        <div class="currency-box"><span class="section-label">Kalkulator NBP</span><h3>Przelicz TRY na PLN</h3><p>Kurs średni liry tureckiej pobierany automatycznie.</p>
            <div class="converter"><div class="field"><label for="currency-amount">Kwota</label><input id="currency-amount" type="number" min="0" value="1000" inputmode="decimal"></div><span class="converter-equals">×</span><div class="field"><label for="currency-code">Waluta</label><select id="currency-code"><option value="TRY">TRY · lira turecka</option></select></div></div><div class="converted" id="converted-value">—</div><p class="rate-note" id="rate-note">Pobieram kurs NBP…</p>
        </div>
      </article>

      <div class="grid grid-2">
        <article class="card"><span class="section-label">Koszty stałe (Loty, Hotel)</span><h3>${money.format(fixedTotal)}</h3>${data.costMatrix.filter(i=>i.type==='fixed').map(item => `<div class="budget-row"><div><strong>${item.label}</strong>${item.note ? `<small>${item.note}</small>` : ""}</div><span class="amount">${money.format(item.amount)}</span></div>`).join("")}</article>
        <article class="card"><span class="section-label">Budżet na miejscu</span><h3>${money.format(variableTotal)}</h3>${data.costMatrix.filter(i=>i.type==='variable').map(item => `<div class="budget-row envelope"><div><strong>${item.label}</strong><small>${item.note}</small></div><b>${money.format(item.amount)}</b></div>`).join("")}</article>
      </div>`;
  }

  function renderPractical() {
    document.querySelector("#view-practical").innerHTML = `
      <div class="section-head"><div><span class="section-label">Pogoda na trasie</span><h2>Prognoza i warunki</h2><p>Sprawdź aktualne dane (Open-Meteo).</p></div></div>
      <div class="grid grid-1 weather-grid">${data.weather.map(city => `
        <article class="card weather-card" data-weather="${city.key}">
          <div class="weather-top"><span class="weather-icon">◌</span><span class="status planned">oczekiwanie</span></div>
          <h3>${city.city}</h3><p>${city.seasonal}</p><div class="forecast-days"></div><small class="weather-note">Łączenie z Open-Meteo…</small>
        </article>`).join("")}</div>

      <div class="section-head" style="margin-top:50px"><div><span class="section-label">Na żywo</span><h2>Kamery internetowe ze Stambułu</h2></div></div>
      <div class="grid grid-2 webcam-grid">${data.webcams.map(cam => `
        <article class="card webcam-card"><a class="webcam-frame" href="${cam.url}" target="_blank" rel="noopener"><img src="${cam.preview}" data-live-preview="${cam.preview}" data-fallback="${cam.fallback}" referrerpolicy="no-referrer" alt="Ostatnia klatka: ${cam.title}" loading="lazy"><span class="live-badge">● PODGLĄD</span></a><div class="webcam-copy"><span class="section-label">${cam.city} · ${cam.provider}</span><h3>${cam.title}</h3><p>Ostatnia dostępna klatka.</p><div class="hotel-links"><a href="${cam.url}" target="_blank" rel="noopener">Otwórz kamerę ↗</a></div></div></article>`).join("")}</div>

      <div class="section-head" style="margin-top:50px"><div><span class="section-label">Telefon przed podróżą</span><h2>Przydatne aplikacje</h2></div></div>
      <div class="grid grid-1 apps-grid">
        <article class="card"><span class="section-label">🇹🇷 Turcja</span><h3>Aplikacje na Stambuł</h3><div class="app-list">${data.travelApps.istanbul.map(app => `<a class="app-item" href="${app.url}" target="_blank" rel="noopener"><span class="app-letter">${app.name[0]}</span><span><strong>${app.name}</strong><small>${app.purpose}</small></span><em class="app-priority ${app.priority}">${app.priority === "must" ? "konieczna" : "warto"}</em></a>`).join("")}</div></article>
      </div>`;
  }

  function renderTodo() {
    document.querySelector("#view-todo").innerHTML = `
      <div class="section-head"><div><span class="section-label">Pakowanie</span><h2>Zasady dla bagażu</h2><p>${data.baggage.allowance}. ${data.baggage.targetWeight}</p></div></div>
      <div class="grid grid-2">
        <article class="card">
          <span class="section-label">Co bierzemy (Checklista)</span>
          <ul class="packing-list" style="margin-top: 15px;">
            ${data.baggage.checklist.map(tip => `<li>${tip}</li>`).join("")}
          </ul>
        </article>
        <div class="grid grid-1">
           ${data.baggage.bags.map(bag => `
            <article class="card">
                <h3>${bag.name}</h3>
                <p>${bag.load}</p>
                <small style="color:var(--accent); font-weight:bold;">Cel: ${bag.target}</small>
            </article>`).join('')}
        </div>
      </div>
      <div class="section-head" style="margin-top:50px"><div><span class="section-label">Dokumenty</span><h2>Wizy i Paszporty</h2></div></div>
      <article class="card">
        <h3>Dla Polaków do Turcji</h3>
        <p>Polacy podróżujący do Turcji w celach turystycznych do 90 dni są <strong>zwolnieni z obowiązku wizowego</strong>.</p>
        <p style="margin-top:10px;"><strong>Paszport:</strong> Dokument musi być ważny co najmniej 150 dni od daty wjazdu do Turcji. (Dowód osobisty w wielu przypadkach wystarcza od 2022 roku, ale paszport to najpewniejsza i najszybsza forma dokumentu na lotnisku IST).</p>
      </article>
    `;
  }

  function initApp() {
    renderOverview();
    renderIstanbul();
    renderBudget();
    renderPractical();
    renderTodo();
    setupNavigation();
    setupModals();
    setupCurrency();
    loadWeather();
  }

  function setupNavigation() {
    const navButtons = document.querySelectorAll(".nav-link");
    const views = document.querySelectorAll(".view");
    const menuBtn = document.querySelector(".menu-button");
    const nav = document.getElementById("main-nav");

    function switchView(viewId) {
      navButtons.forEach(btn => btn.classList.toggle("active", btn.dataset.view === viewId));
      views.forEach(view => view.classList.toggle("active", view.id === `view-${viewId}`));
      window.scrollTo(0, 0);
      if (window.innerWidth <= 768) {
        nav.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      }
    }

    navButtons.forEach(btn => {
      btn.addEventListener("click", () => switchView(btn.dataset.view));
    });

    document.querySelectorAll("[data-jump-view]").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        switchView(btn.dataset.jumpView);
      });
    });

    menuBtn.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", isOpen);
    });
  }

  function setupModals() {
    const dayModal = document.getElementById("day-modal");
    const dayCloseBtn = document.getElementById("modal-close-btn");
    const historyModal = document.getElementById("history-modal");
    const historyCloseBtn = document.getElementById("history-close-btn");

    document.body.addEventListener("click", (e) => {
      const dayEl = e.target.closest(".day.clickable");
      if (dayEl) {
        const date = dayEl.dataset.day;
        const info = data.agenda[date];
        if (!info) return;

        document.getElementById("modal-title").textContent = info.title;
        document.getElementById("modal-date").textContent = date;
        
        let eventsHtml = '<ul style="list-style:none; padding:0; margin-top:20px;">' + info.events.map(ev => `
            <li style="margin-bottom:15px; display:flex; gap:15px;">
                <b style="min-width:45px;">${ev.time}</b>
                <span>${ev.icon ? ev.icon + ' ' : ''} <span style="${ev.highlight ? 'color:var(--accent); font-weight:bold;' : ''}">${ev.text}</span></span>
            </li>
        `).join('') + '</ul>';

        document.getElementById("modal-desc").innerHTML = info.details + eventsHtml;
        document.getElementById("modal-transport-text").textContent = info.transport;
        
        const photoMap = {
            "istanbul": "https://images.unsplash.com/photo-1522262590532-a991489a0253?q=80&w=800&auto=format&fit=crop"
        };
        document.getElementById("modal-image").src = photoMap["istanbul"];

        dayModal.showModal();
      }

      const historyBtn = e.target.closest(".history-btn");
      if (historyBtn) {
        document.getElementById("history-title").textContent = data.meta.history.title;
        document.getElementById("history-content").innerHTML = data.meta.history.content;
        historyModal.showModal();
      }
    });

    [dayCloseBtn, historyCloseBtn].forEach(btn => {
        if(btn) btn.addEventListener("click", function() {
            this.closest("dialog").close();
        });
    });

    dayModal.addEventListener("click", e => e.target === dayModal && dayModal.close());
    if(historyModal) historyModal.addEventListener("click", e => e.target === historyModal && historyModal.close());
  }

  function setupCurrency() {
    const amountInput = document.getElementById("currency-amount");
    const codeSelect = document.getElementById("currency-code");
    const valDisplay = document.getElementById("converted-value");
    const noteDisplay = document.getElementById("rate-note");
    if(!amountInput) return;

    let rates = {};

    function convert() {
      const amount = parseFloat(amountInput.value) || 0;
      const code = codeSelect.value;
      if (rates[code]) {
        valDisplay.textContent = money.format(amount * rates[code]);
      }
    }

    async function fetchRates() {
      try {
        const response = await fetch("https://api.nbp.pl/api/exchangerates/tables/A/?format=json");
        const json = await response.json();
        const data = json[0].rates;
        const tryRate = data.find(r => r.code === "TRY");
        if (tryRate) rates["TRY"] = tryRate.mid;
        noteDisplay.textContent = `Kurs NBP z ${json[0].effectiveDate}.`;
        convert();
      } catch (err) {
        rates = { "TRY": 0.12 }; // rough fallback
        noteDisplay.textContent = "Błąd API NBP. Kurs zapasowy (TRY ~0.12 PLN).";
        convert();
      }
    }

    amountInput.addEventListener("input", convert);
    codeSelect.addEventListener("change", convert);
    fetchRates();
  }

  async function loadWeather() {
    const cards = document.querySelectorAll(".weather-card");
    const now = new Date();
    
    for (const card of cards) {
      const key = card.dataset.weather;
      const cityData = data.weather.find(w => w.key === key);
      const container = card.querySelector(".forecast-days");
      const iconWrap = card.querySelector(".weather-icon");
      const note = card.querySelector(".weather-note");
      const statusBadge = card.querySelector(".status");

      try {
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${cityData.coords[0]}&longitude=${cityData.coords[1]}&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Europe%2FIstanbul`);
        const result = await res.json();
        
        container.innerHTML = "";
        
        // Show next 3 days
        for(let i=0; i<3; i++) {
            const max = Math.round(result.daily.temperature_2m_max[i]);
            const min = Math.round(result.daily.temperature_2m_min[i]);
            const dateStr = result.daily.time[i];
            
            container.innerHTML += `<div class="forecast-day" style="display:flex; justify-content:space-between; margin-top:8px; border-bottom:1px solid var(--glass-border); padding-bottom:5px;">
                <span>${dateStr.substring(5).replace('-','.')}</span>
                <b>${max}°C <small style="color:var(--text-muted); font-weight:normal;">/ ${min}°</small></b>
            </div>`;
        }
        
        iconWrap.innerHTML = "🌤️";
        note.textContent = "Prognoza dla Stambułu na najbliższe dni.";
        statusBadge.textContent = "Zaktualizowano";
        statusBadge.classList.replace("planned", "confirmed");
        
      } catch (e) {
        note.textContent = "Pobieranie nieudane. Brak połączenia.";
      }
    }
  }

  document.addEventListener("DOMContentLoaded", initApp);
})();
