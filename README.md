## Gruppkontrakt
[Gruppkontrakt Ghost Guardians](https://docs.google.com/document/d/1Np58-q-5aL_r0u7Gn-lQV0Uk7b_P0e1A8MAffHNomrI/edit?tab=t.0)

## API
### Bred sökning
http://www.omdbapi.com/?apikey=420db47c&s=[söksträng]

### Specifik sökning
http://www.omdbapi.com/?apikey=420db47c&plot=full&i=[imdbID]



# Uppgift
# 🎬 Reactify your Movie App!

Ni har redan byggt en filmdatabas med HTML, CSS och JavaScript. Nu är det dags att ta det till nästa nivå – med **React**! Målet är att upptäcka fördelarna med ett ramverk, såsom komponenter, återanvändning och en bättre, tydligare struktur.

## 🧩 Uppgiften

Bygg en webbapp som liknar IMDB. Användare ska kunna:

- Se trailers och topplistan (via mitt API)
- Söka efter filmer (OMDB API)
- Klicka på en film för att få mer info
- Markera filmer man vill se

---

## ✅ Krav (för godkänt)

- Startsida med:
  - **5 slumpade trailers** (leta gärna upp ett komponentsbibliotek så att ni kan importera en egen karusell)
  - **Topplista på våra rekommenderade filmer** (från mitt API)
- **Sökfunktion** som använder OMDB:s breda sökning:  
  `http://www.omdbapi.com/?apikey=[yourkey]&s=[söksträng]`
- Visa resultat som **kort eller lista** (titel + poster)
- Vid klick: gör en **specifik sökning** med imdbID:  
  `http://www.omdbapi.com/?apikey=[yourkey]&plot=full&i=[imdbID]`
- Visa mer detaljerad info om filmen (gärna på en egen sida/komponent)
- Lägga till och ta bort filmer från en **watchlist**, som man sen skall kunna se på en egen sida
- **Användarvänlig design**: Här har ni chansen att skapa en egen design om ni inte gärna vill återanvända er gamla design
- Appen ska vara **responsiv**
- **Tillgänglighet**: alt-attribut, semantisk HTML, inga onödiga div:ar
- Använd **felhantering** vid API-anrop
- **Ren och läsbar kod**: rätt indentering, inga onödiga upprepningar
- **Ett agilt arbetssätt**: ni arbetar enligt de kunskaper ni förskaffat er inom det agila arbetssättet (bland annat genom att arbeta med en Kanban-board)
- **Följande tekniker/fenomen skall finnas med i er lösning**
  - Komponenter
  - Props
  - useState och useEffect
  - API-anrop
  - Routing

---

## 🔧 API-resurser

- Mitt API (trailers och topplista):  
  `https://santosnr6.github.io/Data/favoritemovies.json`
- OMDB API:
  - Bred sökning:  
    `http://www.omdbapi.com/?apikey=[yourkey]&s=[söksträng]`
  - Specifik sökning:  
    `http://www.omdbapi.com/?apikey=[yourkey]&plot=full&i=[imdbID]`
- Ni får gärna använda TMDB API istället om ni hellre vill det.


---

## 🧪 Tips

- Testa era API-anrop i **Postman** eller **Insomnia**
- Tänk på återanvändbara komponenter i React
- Reflektera över skillnaden mot er vanilla JS-version – vad blev enklare med React?
- Vill ni bygga ut applikationen med fler funktioner, alt. tweeka någon av de funktioner som beskrivs ovan så frågar ni mig först.

---

## 👥 Gruppkontrakt

Ni författar i vanlig egna gruppkontrakt där ni tillsammans bestämmer hur arbetet skall gå till, vad ni förväntar er av varandra, samt hur ni hanterar olika situationer som skulle kunna uppstå. Kontrakten behöver inte skickas till mig, utan det tar vi först när jag behöver gå in och hantera en situation.

---

## 🧑‍🏫 Handledning

Jag vill att varje grupp bokar in sig på minst ett handledningspass, så att jag kan fånga upp eventuella problem och frågeställningar, samt följa upp att allt flyter på bra. Länken till att boka in sig på ett handledningspass [hittar ni är](https://docs.google.com/spreadsheets/d/10r8y-zwTPNmwiiGzbT8L-Su75svkLeNUWy3WbbN-qns/edit?usp=sharing)

---

## 📥 Inlämning

Alla i gruppen lämnar in en länk till gruppens gemensamma Github-repo på Azomo, senast kl 23:59 torsdagen den 17/4. Glöm inte att bjuda in mig till era repon, samt projekttavlor.

---

## 🗣️ Opponering

När vi ses igen efer påsklovet kommer var och en av grupperna tilldelas en annan grupps arbete att opponera på. Detta innebär att ni under veckan skall testa, klämma och känna, sätta er in i kodbasen, för att kunna förbereda ett antal frågor inför opponeringen som kommer att hållas på kursens sista Code Review-tillfälle, den 25/4. Mer info om detta, samt vad som förväntas av er kommer ni få efter lovet.
