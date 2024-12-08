import { NavLink } from "react-router-dom";

export function Menu() {
  return (
    <nav className="navbar">
      <ul className="principal-bar">
        <li className="main-li">
          <NavLink exact to="/">
            
            <img
              className="icon main-icon"
              src="\src\media\icon.png"
              alt="Coding icon </>"
            ></img>
            <span className="main-span">Mi Portfolio</span>
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/">
            <img className="icon" src="\src\media\home.png" alt="Home"></img>
            <span>Inicio</span>
          </NavLink>
        </li>
        <li>
          <button>
            <img
              className="icon search-icon"
              src="\src\media\search.png"
              alt="search"
            ></img>
            <span>Tecnologias</span>
          </button>
        </li>
        <li>
          <NavLink exact to="/explore">
            <img
              className="icon proyect-icon"
              src="\src\media\explore.png"
              alt="Explore"
            ></img>
            <span>Proyectos</span>
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/video">
            <img className="icon video-icon" src="\src\media\reel.png" alt="Reels"></img>
            <span>Presentación</span>
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/contact">
            <img
              className="icon"
              src="\src\media\messenger.png"
              alt="Messages">

              </img>
            <span>Contacto</span>
          </NavLink>
        </li>
        <li>
          <button>
            <img className="icon heart-icon" src="\src\media\heart.png" alt="Heart"></img>
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
            <img className="icon linkedin-icon" src="\src\media\linkedin.png" alt="linkedin icon"></img>
            <span>LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/JuanCheli"target="_blank">
            <img  className="icon github-icon" src="\src\media\github.png" alt="github icon"></img>
            <span>GitHub</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
