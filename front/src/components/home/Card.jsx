import { useState } from "react";
import "../../styles/card-styles.css";

export function Card({
  source = "unknown",
  name = "unknown",
  initialIsFollowing = false,
}) {
  const storageKey = `follow_${name}`;
  const [isFollowing, setIsFollowing] = useState(() => {
    const savedState = localStorage.getItem(storageKey);
    return savedState ? JSON.parse(savedState) : initialIsFollowing;
  });

  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-followButton is-following"
    : "tw-followCard-followButton";
  const imgSrc = `\\src\\media\\${source}.png`


  const handleClick = () => {
    const newState = !isFollowing;
    setIsFollowing(newState);
    localStorage.setItem(storageKey, JSON.stringify(newState));
  };

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          src={imgSrc}
          alt={`${source} avatar`}
          className="tw-followCard-avatar"
        />
        <div className="tw-followCard-info">
          <strong className="tw-followCard-name">{name}</strong>
        </div>
      </header>
      <aside className="tw-follow-button-container">
        <button className={buttonClassName} onClick={handleClick}>
          <span>{text}</span>
        </button>
      </aside>
    </article>
  );
}
