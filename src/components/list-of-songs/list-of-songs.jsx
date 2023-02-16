import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import "./list-of-songs.css";
import actors from "../../kissFm.json";
import { DataContext } from "../dataProvider/dataProvider";

export default function Song() {
  let { singer } = useParams();
  const [data, setData] = useState(null);
  const [songs, setSongs] = useContext(DataContext);
  const [arrayTest, setArrayTest] = useState([]);

  useEffect(() => {
    setData(actors.app);
  }, [data]);

  let selectedSong = "";

  const alreadyBeenSongs = (song) => {
    setArrayTest([...arrayTest, { song }]);
  };

  const listOfSongs = () => {
    let songsList = [];
    if (data) {
      data.map((song) => {
        if (song.KATEGORIJA === singer) {
          // napravi listu svih pesama
          songsList.push(song.NUMERA);
          songsList = [...new Set(songsList)];
          // izvuce samo jednu random pesmu
          selectedSong =
            songsList[Math.floor(Math.random() * songsList.length)];
        } else {
          return null;
        }
      });
    }
  };

  listOfSongs();

  const addToList = (song) => {
    setSongs([...songs, { song }]);
    alreadyBeenSongs(song);
  };

  const changeSong = () => {
    setSongs([...songs]);
  };

  return (
    <div className="songsContainer">
      <div className="songsWrapper">
        <div className="firstLetter">{singer}</div>
        <div className="song">
          <div className="songCover">
            <div className="songTitle">{selectedSong}</div>
            <div>
              <button
                className="addToListBtn"
                onClick={() => addToList(selectedSong)}
              >
                Dodaj
              </button>
              <button className="alreadyBeenBtn" onClick={() => changeSong()}>
                Promeni
              </button>
            </div>
          </div>
        </div>
        {/* {songsList.map((song, index) => (
          <div key={index} className="song">
            <div className="songCover">
              <div className="songTitle">{song}</div>
              <div>
                <button
                  className="addToListBtn"
                  onClick={() => addToList(song)}
                  disabled={checked}
                >
                  dodaj
                </button>
                <button
                  className="alreadyBeenBtn"
                  // onClick={() => addToList(song)}
                  disabled={!checked}
                >
                  vec bila
                </button>
              </div>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
}
