import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./list-of-singers.css";
import actors from "../../kissFm.json";

export default function ListOfSongs() {
  let { letter } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(actors.app);
  }, [data]);

  let singers = [];

  const selectedSingers = () => {
    console.log(letter);
    if (data) {
      data.map((song) => {
        if (song.KATEGORIJA.substring(0, 2) === letter) {
          singers.push(song.KATEGORIJA);
          singers = [...new Set(singers)];
        }
        if (song.KATEGORIJA.charAt(0) === letter) {
          singers.push(song.KATEGORIJA);
          singers = [...new Set(singers)];
        }
      });
    }
  };

  useEffect(() => {}, [letter]);

  selectedSingers();

  return (
    <div className="singerContainer">
      <div className="singersWrapper">
        <div className="firstLetter">{letter}</div>
        {singers.map((singer, index) => (
          <Link key={index} to={`/listOfSingers/${letter}/${singer}`}>
            <div className="singer">{singer}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
