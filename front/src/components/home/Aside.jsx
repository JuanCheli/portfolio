import { Link } from "react-router-dom";
import { Card } from "./Card.jsx";

export function Aside() {
  return (
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
        {/* AGREGAR EL ONCLICK TECNOLOGIAS */}
        <button className="suggestions-all">Ver todo</button>
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
  );
}
