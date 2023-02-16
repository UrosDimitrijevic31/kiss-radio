import { useContext } from "react";
import { DataContext } from "../../dataProvider/dataProvider";
import "./list-item.css";

export default function ListItem({ song, id }) {
  const [songs, setSongs] = useContext(DataContext);

  const deleteBtn = () => {
    setSongs(songs.filter((item) => item !== song));
  };

  return (
    <div className="listItem">
      <div className="text">
        <div htmlFor={id} className="songTitleText">
          {/* <input type="checkbox" id={id} /> */}
          {song.song}
        </div>
      </div>
      <div className="btnContainer">
        <button className="deleteBtn" onClick={deleteBtn}>
          obrisi
        </button>
      </div>
    </div>
  );
}
