import { useEffect } from "react";
import { useContext, useState } from "react";
import { DataContext } from "../dataProvider/dataProvider";
import ListItem from "./list-item/list-item";
import "./list-item/list-item.css";
import "./list-of-selected-songs.css";

export default function SelectedSongs() {
  const [songs, setSongs] = useContext(DataContext);
  const [checked, isChecked] = useState(false);

  useEffect(() => {
    if (songs.length > 0) {
      isChecked(false);
    } else {
      isChecked(true);
    }
  }, [songs.length]);

  const deleteSongs = () => {
    setSongs([]);
  };

  return (
    <div className="selectedSongsContainer">
      <div className="title">
        <h3 style={{ fontSize: "26px", fontWeight: "800" }}>
          Lista izabranih pesama:
        </h3>
      </div>
      <div className="listItemWrapper">
        <div className="listItemContainer">
          {songs.map((song, index) => (
            <ListItem song={song} key={index} id={index} />
          ))}
        </div>
      </div>
      <div className="deleteSection">
        <button className="deleteBtn" disabled={checked} onClick={deleteSongs}>
          Obrisi sve
        </button>
      </div>
    </div>
  );
}
