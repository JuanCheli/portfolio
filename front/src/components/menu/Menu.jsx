import { NavLink } from "react-router-dom";
import "../../styles/menu-styles.css";

export function Menu() {
  return (
    <nav className="navbar">
      <ul className="principal-bar">
        <li className="main-li">
          <NavLink exact to="/">
            <img
              className="icon main-icon"
              src="\src\media\icon.svg"
              alt="Coding icon </>"
            ></img>
            <span className="main-span">Cheli&apos;s Portfolio</span>
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/">
            <img className="icon home-icon" src="\src\media\home.svg" alt="Home"></img>
            <span>Inicio</span>
          </NavLink>
        </li>
        <li>
          <button>
            <img
              className="icon search-icon"
              src="\src\media\search.svg"
              alt="search"
            ></img>
            <span>Tecnologias</span>
          </button>
        </li>
        <li>
          <NavLink exact to="/explore">
            <img
              className="icon proyect-icon"
              src="\src\media\explore.svg"
              alt="Explore"
            ></img>
            <span>Proyectos</span>
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/video">
            <img
              className="icon video-icon"
              src="\src\media\reel.svg"
              alt="Reels"
            ></img>
            <span>Presentación</span>
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/contact">
            <img
              className="icon msg-icon"
              src="\src\media\messenger.svg"
              alt="Messages"
            ></img>
            <span>Contacto</span>
          </NavLink>
        </li>
        <li>
          <button>
            <img
              className="icon heart-icon"
              src="\src\media\heart.svg"
              alt="Heart"
            ></img>
            <span className="interest-span">Intereses</span>
          </button>
        </li>
        <li>
          <NavLink exact to="/about-me">
            <img
              className="icon pfp"
              src="\src\media\pfp.png"
              alt="Juan Cheli's Profile picture"
            ></img>
            <span>Sobre mi</span>
          </NavLink>
        </li>
      </ul>
      <ul className="secondary-bar">
        <li>
          <a href="https://www.linkedin.com/in/juancheli/" target="_blank">
            <img
              className="icon linkedin-icon"
              src="\src\media\linkedin.svg"
              alt="linkedin icon"
            ></img>
            <span>LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/JuanCheli" target="_blank">
            <img
              className="icon github-icon"
              src="\src\media\github.svg"
              alt="github icon"
            ></img>
            <span className="git-text">GitHub</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
