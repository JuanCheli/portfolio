import "../../styles/home-styles.css";

export function Home() {
  return (
    <div className="home">
      {/* Contenedor de historias */}
      <div className="stories-container">
        <div className="stories">
          <div className="story">Story 1</div>
          <div className="story">Story 2</div>
          <div className="story">Story 3</div>
          <div className="story">Story 4</div>
        </div>
      </div>

      {/* Contenedor de proyectoss */}
      <div className="posts-container">
        <div className="posts">
          <div className="post">Post 1</div>
          <div className="post">Post 2</div>
          <div className="post">Post 3</div>
        </div>
      </div>

      {/* Contenedor del aside */}
      <aside className="aside-container">
        <div className="profile-summary">
            <img
              src="https://via.placeholder.com/300x300"
              alt="Profile picture"
            />
          <p>Juan Cheli</p>
          <p>@juancheli</p>
        </div>
        <div className="suggestions">
          <h3>Sugerencias</h3>
          <p>Sugerencia 1</p>
          <p>Sugerencia 2</p>
          <p>Sugerencia 3</p>
        </div>
      </aside>
    </div>
  );
}