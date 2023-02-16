import { Route, Routes } from "react-router-dom";
import "./App.css";
import { DataProvider } from "./components/dataProvider/dataProvider";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import SelectedSongs from "./components/list-of-selected-songs/list-of-selected-songs";
import ListOfSingers from "./components/list-of-singers/list-of-singers";
import ListOfSongs from "./components/list-of-songs/list-of-songs";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Header />
        <main className="container">
          <div className="left">
            <Routes>
              <Route
                path="/listOfSingers/:letter"
                element={<ListOfSingers />}
              />
              <Route
                path="/listOfSingers/:letter/:singer"
                element={<ListOfSongs />}
              />
            </Routes>
          </div>
          <SelectedSongs />
        </main>
        <Footer />
      </div>
    </DataProvider>
  );
}

export default App;
