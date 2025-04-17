import { useEffect, useState } from 'react';
import axios from 'axios';
import './Trailers.css';

export default function Trailers() {
  const [trailers, setTrailers] = useState([]); // Skapar en state-variabel, används för att spara länkarna från API:et
  const [currentIndex, setCurrentIndex] = useState(0); // Håller reda på vilken trailer som är i fokus i karusellen
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Skapar en variabel som innehåller aktuell bredd på webbläsarfönstret när komponenten laddas

  // Hämtar trailer-länkar från API:et och randomisera dem
  useEffect(() => {
    const shuffleArray = (array) =>
      array
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);

    axios
      .get("https://santosnr6.github.io/Data/favoritemovies.json")
      .then((res) => {
        const shuffled = shuffleArray(res.data.map(movie => movie.Trailer_link));
        setTrailers(shuffled);
      })
      .catch((err) => console.error("Fel vid hämtning:", err));
  }, []);

  // "Lyssnar" på fönsterstorlek och gör karusellen responsiv
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Funktioner för att byta till föregående och nästa trailer
  const prev = () => setCurrentIndex((prev) => (prev - 1 + trailers.length) % trailers.length);
  const next = () => setCurrentIndex((prev) => (prev + 1) % trailers.length);

  if (trailers.length === 0) return <p>Laddar trailers...</p>;

   // Returnerar karusellen med tre trailers synliga åt gången (vänster, center, höger)
  return (
    <div className="trailers">
      <div className="trailers__container">
      {trailers.map((url, index) => {
          const pos = (index - currentIndex + trailers.length) % trailers.length;
          if (pos > 2) return null;

          // Responsiva inställningar baserat på windowWidth
          const scaleCenter = windowWidth < 768 ? 1 : windowWidth < 1300 ? 1.15 : 1.3;
          const scaleSide = windowWidth < 768 ? 0 : windowWidth < 1300 ? 0.9 : 1.05;
          const shift = windowWidth < 768 ? 0 : windowWidth < 1300 ? 35 : 45;

          let transform = '';
          let opacity = 0;
          let zIndex = 1;
          let pointerEvents = 'none';
          let display = 'block';

          // Bestämmer hur varje trailer positioneras och skalas beroende på om den är till vänster, center eller höger 
          if (pos === 0) {
            transform = `translateX(-${shift}%) scale(${scaleSide})`;
            opacity = 0.5;
          } else if (pos === 1) {
            transform = `translateX(0) scale(${scaleCenter})`;
            opacity = 1;
            zIndex = 2;
            pointerEvents = 'auto';
          } else if (pos === 2) {
            transform = `translateX(${shift}%) scale(${scaleSide})`;
            opacity = 0.5;
          }

          // Döljer trailers som inte är i mitten på små skärmar, så bara en trailer åt gången syns
          if (windowWidth < 768 && pos !== 1) {
            display = 'none';
          }

          return (
            <iframe
              key={url}
              className="trailers__video"
              src={url}
              title={`Trailer ${index}`}
              style={{
                transform,
                opacity,
                zIndex,
                pointerEvents,
                display,
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          );
        })}
        <button className="trailers__arrow trailers__arrow--left" onClick={prev}>◀</button>
        <button className="trailers__arrow trailers__arrow--right" onClick={next}>▶</button>
      </div>
    </div>
  );
}

