import "../../styles/home-styles.css";

import {Aside} from './Aside.jsx'

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
      <Aside />
    </div>
  );
}
