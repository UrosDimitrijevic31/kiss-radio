import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [songs, setSongs] = useState([]);
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    const songsStore = JSON.parse(localStorage.getItem("songsStore"));
    if (songsStore) setSongs(songsStore);
  }, []);

  useEffect(() => {
    localStorage.setItem("songsStore", JSON.stringify(songs));
  }, [songs]);

  return (
    <DataContext.Provider value={[songs, setSongs]}>
      {props.children}
    </DataContext.Provider>
  );
};
