import { useEffect, useState } from 'react';
import axios from 'axios';
import './Trailers.css';

export default function Trailers() {
  const [trailers, setTrailers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  // Funktioner för att byta till föregående och nästa trailer
  const prev = () => setCurrentIndex((prev) => (prev - 1 + trailers.length) % trailers.length);
  const next = () => setCurrentIndex((prev) => (prev + 1) % trailers.length);

  if (trailers.length === 0) return <p>Laddar trailers...</p>;

   // Returnerar karusellen med tre trailers synliga åt gången (vänster, center, höger)
  return (
    <div className="trailers">
      <div className="trailers__container">
        {trailers.map((url, index) => {
          let pos = (index - currentIndex + trailers.length) % trailers.length;
          let className = "trailers__video";

          if (pos === 0) className += " trailers__video--left";
          else if (pos === 1) className += " trailers__video--center";
          else if (pos === 2) className += " trailers__video--right";
          else return null;

          return (
            <iframe
              key={index}
              className={className}
              src={url}
              title={`Trailer ${index}`}
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

