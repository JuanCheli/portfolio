import { Link } from "react-router-dom";
import "../../styles/home-styles.css";

import { Card } from './Card.jsx'

export function Home() {
  return (
    <div className="home">
      {/* Contenedor principal: stories + posts */}
      <div className="main-content">
        {/* Stories */}
        <div className="stories-container">
          <div className="stories">
            <div className="story">Story 1</div>
            <div className="story">Story 2</div>
            <div className="story">Story 3</div>
            <div className="story">Story 4</div>
          </div>
        </div>

        {/* Posts */}
        <div className="posts-container">
          <div className="posts">
            <div className="post">Post 1</div>
            <div className="post">Post 2</div>
            <div className="post">Post 3</div>
          </div>
        </div>
      </div>

      {/* Aside */}
      <aside className="aside-container">
        <div className="profile-summary">
          <Link exact to="/about-me">
            <img
              src="\src\media\pfp.png"
              className="aside-pfp"
              alt="Juan Cheli's Profile picture"
            />
            <span className="aside-username">juanchelidev</span>
            <span className="aside-name">Juan Cheli</span>
          </Link>
        </div>
        <div className="suggestions">
          <h3 className="suggestions-for-you">Tecnologias usadas</h3>
          <button className="suggestions-all">Ver todo</button> {/* AGREGAR EL ONCLICK TECNOLOGIAS */}
          <Card source="html" name="HTML"></Card>
          <Card source="css" name="CSS"></Card>
          <Card source="js" name="JavaScript"></Card>
          <Card source="react" name="React"></Card>
          <Card source="node" name="NodeJS"></Card>
        </div>
        <div className="suggestions-footer">
          <ul>
            <li>Información ·</li>
            <li>Ayuda ·</li>
            <li>Prensa ·</li>
            <li>API ·</li>
            <li>Empleo ·</li>
            <li>Privacidad ·</li>
            <li>Condiciones ·</li>
            <li>Ubicaciones ·</li>
            <li>Idioma ·</li>
            <li>Cheli Verified</li>
          </ul>
          <p>© 2025 JUAN CHELI</p>
        </div>
      </aside>
    </div>
  );
}
