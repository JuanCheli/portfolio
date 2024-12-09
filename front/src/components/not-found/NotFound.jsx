import {Link} from 'react-router-dom';
import "../../styles/not-found.css";

export function NotFound() {
  return (
    <div className='not-found'>
      <h1 className='not-found-title'>Esta página no está disponible.</h1>
      <span className='not-found-span'>
        Es posible que el enlace que seleccionaste no funcione o que se haya
        eliminado la página. <Link to="/">Volver al Inicio.</Link>
      </span>
    </div>
  );
}
