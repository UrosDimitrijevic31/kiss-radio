import "./header.css";
import logo from "../../assets/Logo.png";
import { letters } from "../../helper/letters";
import { Link } from "react-router-dom";

export default function Header() {
  const lettersArray = letters();

  return (
    <div className="header">
      <div className="navbar">Kiss radio</div>
      <div className="hero">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="letters">
        <div className="lettersWrapper">
          <ul>
            {lettersArray.map((letter, index) => (
              <li key={index}>
                <div>
                  <Link to={`/listOfSingers/${letter}`}>{letter}</Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
